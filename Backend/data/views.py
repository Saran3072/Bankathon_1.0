from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from data.models import UserProfile, JobPosting, JobApplication
from .serializers import Item, RegisterApplicant, RegisterHR, JobPostingHR, JobPostsHR, JobApply, ApplicantApplications, JobApplicantDetail, ApplicantDetail, JobPostingDetail
import jwt, datetime
import os
import replicate
os.environ["REPLICATE_API_TOKEN"] = "r8_PmTqvljk8bV7jeCofQIDWSOjWuT5u1T0l93mK"
pre_prompt = "You are helpful assistant. You do not respond as 'User' or pretend to be 'User'. You only respond once as 'Assistant' with the content that is requested."
# openai.api_key = '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'
# def get_completion(prompt, model="gpt-3.5-turbo"):
#     messages = [{"role": "user", "content": prompt}]
#     response = openai.ChatCompletion.create(
#         model=model,
#         messages=messages,
#         temperature=0, # this is the degree of randomness of the model's output
#     )
#     return response.choices[0].message["content"]

@api_view(['GET'])
def getData(request):
    items = UserProfile.objects.all()
    serializer = Item(items, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def addItem(request):
    serializer = Item(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

class RegisterViewApplicant(APIView):
    def post(self, request):
        serializer = RegisterApplicant(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"Status": "Success"})

class RegisterViewHR(APIView):
    def post(self, request):
        serializer = RegisterHR(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class LoginAppliant(APIView):
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

        user = UserProfile.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("User not Found")
        
        if not user.password == password:
            raise AuthenticationFailed("Incorrect Password")
        
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token,
            'status': "Success"
        }
        return response

class LoginHR(APIView):
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

        user = UserProfile.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("User not Found")
        
        if not user.password == password:
            raise AuthenticationFailed("Incorrect Password")
        
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response

class UserViewApplicant(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = UserProfile.objects.filter(id=payload['id']).first()
        serializer = RegisterApplicant(user)
        return Response(serializer.data)

class UserViewHR(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = UserProfile.objects.filter(id=payload['id']).first()
        serializer = RegisterHR(user)
        print(user.id)
        return Response(serializer.data)

class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response
    
class JobPost(APIView):
    def post(self, request):
        description_o = request.data["description"]
        title = request.data["title"]
        # token='ZgiwzoNzLwOM-UC1XULu0p6yIDrTOrqIcSFSKwCdSR6yef_KUTPgP-SZF1ux5vDrIuNSXg.'
        prompt = description_o + '''
                    Consider the above Job Ttile, Job Description and return an enhanced Job Description in single paragraph which attracts the applicants in a better way. Wrap the answer in curly braces.'''
        output = replicate.run('a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5', # LLM model
                        input={"prompt": f"{pre_prompt} {prompt} Assistant: ", # Prompts
                        "temperature":0.1, "top_p":0.9, "max_length":2000, "repetition_penalty":1})
        full_response = ""
        for item in output:
            full_response += item
        f = full_response.index('{')
        l = full_response.index('}')
        print(full_response[f+1:l])
        serializer = JobPostingHR(data=request.data)
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        user = UserProfile.objects.filter(id=payload['id']).first()

        if user is None:
            raise AuthenticationFailed('User not Found')

        if serializer.is_valid():
            serializer.save(poster=user, description_enhance = full_response[f+1:l])  # Assign the user profile as the poster
            return Response(serializer.data)
class PostingsHR(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = UserProfile.objects.filter(id=payload['id']).first()

        if user is None:
            raise AuthenticationFailed('User not Found')
        job_posts = JobPosting.objects.filter(poster=user)
        serializer = JobPostsHR(job_posts, many=True)
        return Response(serializer.data)
    
@api_view(['GET'])
def AllJobs(APIView):
    items = JobPosting.objects.all()
    serializer = JobPostsHR(items, many = True)
    return Response(serializer.data)

    
class JobApplyApplicant(APIView):
    def post(self, request):
        resume = request.data["resume"]
        job_id = request.data["job_posting"]
        # cover_letter = request.data["cover_letter"]
        serializer = JobApply(data=request.data)

        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        
        user = UserProfile.objects.filter(id=payload['id']).first()

        if user is None:
            raise AuthenticationFailed('User not Found')

        if serializer.is_valid():
            # Set the qualified_round based on the job application's round
            job_posting = JobPosting.objects.filter(id=job_id).first()
            if job_posting:
                job_description = job_posting.description
                prompt1 = resume + '''Please evaluate the provided resume and assess the alignment of the applicant's profile with the given job description. Assign a singe overall numerical score (out of 100) to indicate how well the candidate's profile matches the requirements outlined in the job description. I WANT OVERALL SCORE ALONE IN CURLY BRACES, I DONT WANT ANY OTHER CONTENT. The Job Description is as follows:
                ''' + job_description
                output = replicate.run('a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5', # LLM model
                                input={"prompt": f"{pre_prompt} {prompt1} Assistant: ", # Prompts
                                "temperature":0.1, "top_p":0.9, "max_length":2000, "repetition_penalty":1})
                final = ""
                for item in output:
                    final += item
                print(final)
                # Set the qualified_round based on the job application's round
                serializer.save(applicant=user, qualified_round=0)

                # Do something with job_description and job_title
                # For example, you can print them or store them in variables

                return Response(serializer.data)
            else:
                return Response({'error': 'Job Posting not found'})
        else:
            return Response(serializer.errors)
class ApplicantApplicationsView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        applicant_id = payload['id']
        applications = JobApplication.objects.filter(applicant=applicant_id)
        
        serializer = ApplicantApplications(applications, many=True)
        return Response(serializer.data)
class JobApplicantsView(APIView):
    def get(self, request, job_id):
        try:
            job = JobPosting.objects.get(id=job_id)
        except JobPosting.DoesNotExist:
            return Response({'error': 'Job not found'})

        applicants = JobApplication.objects.filter(job_posting=job)

        serializer = JobApplicantDetail(applicants, many=True)

        data = {
            'job_details': JobPostingDetail(job).data,
            'applicants': serializer.data,
        }

        return Response(data)
