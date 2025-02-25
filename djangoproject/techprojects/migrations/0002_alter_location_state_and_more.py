# Generated by Django 5.1.4 on 2024-12-10 03:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('techprojects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='state',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='projectregistration',
            name='location',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='projects', to='techprojects.location'),
        ),
        migrations.AlterField(
            model_name='projectregistration',
            name='submitted_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='techprojects.projectuser'),
        ),
        migrations.AlterField(
            model_name='projectresourcelink',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='resource_links', to='techprojects.projectregistration'),
        ),
    ]
