# Generated by Django 5.1.4 on 2025-01-15 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sponsors', '0003_alter_sponsor_archived'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sponsorprofile',
            name='company_logo_url',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='sponsorprofile',
            name='company_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='sponsorprofile',
            name='company_website',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='sponsorprofile',
            name='rep_image_url',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='sponsorprofile',
            name='rep_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='sponsorprofile',
            name='rep_role',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
