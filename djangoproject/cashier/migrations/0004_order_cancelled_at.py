# Generated by Django 5.1.4 on 2025-01-25 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cashier', '0003_alter_order_payment'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='cancelled_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
