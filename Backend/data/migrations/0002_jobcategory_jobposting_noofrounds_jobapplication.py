# Generated by Django 4.2.3 on 2023-08-06 14:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='JobPosting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('company_name', models.CharField(max_length=200)),
                ('job_description', models.TextField()),
                ('expected_cgpa', models.DecimalField(decimal_places=2, max_digits=2)),
                ('package', models.CharField(max_length=100)),
                ('number_of_openings', models.PositiveIntegerField()),
                ('expected_interviewees', models.PositiveIntegerField()),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.jobcategory')),
                ('poster', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.userprofile')),
            ],
        ),
        migrations.CreateModel(
            name='noofrounds',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('no_of_rounds', models.PositiveIntegerField()),
                ('job_posting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.jobposting')),
            ],
        ),
        migrations.CreateModel(
            name='JobApplication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cover_letter', models.TextField()),
                ('resume', models.FileField(upload_to='resumes/')),
                ('applied_at', models.DateTimeField(auto_now_add=True)),
                ('qualified_round', models.CharField(choices=[('first', 'First Round'), ('second', 'Second Round'), ('selected', 'Selected'), ('rejected', 'Rejected')], default='first', max_length=10)),
                ('applicant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.userprofile')),
                ('job_posting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.jobposting')),
                ('rounds', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.noofrounds')),
            ],
        ),
    ]
