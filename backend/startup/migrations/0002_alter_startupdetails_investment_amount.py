# Generated by Django 4.1.7 on 2023-03-09 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('startup', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='startupdetails',
            name='investment_amount',
            field=models.CharField(max_length=100),
        ),
    ]
