# Generated by Django 5.1.4 on 2025-01-13 22:33

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Sponsor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SponsorContribution',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('sponsor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sponsors.sponsor')),
            ],
        ),
        migrations.CreateModel(
            name='SponsorMessage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('sponsor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sponsors.sponsor')),
            ],
        ),
        migrations.CreateModel(
            name='SponsorProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rep_name', models.CharField(max_length=100)),
                ('rep_role', models.CharField(max_length=100)),
                ('rep_image_url', models.URLField()),
                ('company_name', models.CharField(max_length=100)),
                ('company_logo_url', models.URLField()),
                ('company_website', models.URLField()),
                ('sponsor', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='sponsors.sponsor')),
            ],
        ),
    ]
