# Generated by Django 5.1.4 on 2025-01-26 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sponsors', '0006_meditationread'),
    ]

    operations = [
        migrations.AddField(
            model_name='sponsormessage',
            name='archived',
            field=models.BooleanField(db_index=True, default=False),
        ),
    ]
