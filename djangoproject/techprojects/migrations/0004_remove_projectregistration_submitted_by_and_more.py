# Generated by Django 5.1.4 on 2024-12-11 14:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('techprojects', '0003_rename_sumbission_date_projectregistration_submission_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projectregistration',
            name='submitted_by',
        ),
        migrations.DeleteModel(
            name='ProjectUser',
        ),
    ]
