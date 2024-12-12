# Generated by Django 5.1.4 on 2024-12-11 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('techprojects', '0004_remove_projectregistration_submitted_by_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectregistration',
            name='repo_details',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='projectregistration',
            name='name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='projectregistration',
            name='repository_url',
            field=models.URLField(default='https://github.com/hackforla/homeuniteus'),
            preserve_default=False,
        ),
    ]
