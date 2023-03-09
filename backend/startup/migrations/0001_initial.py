# Generated by Django 4.1.7 on 2023-03-09 17:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='StartupDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
                ('logo', models.ImageField(upload_to='images')),
                ('location', models.TextField()),
                ('employee_count', models.IntegerField()),
                ('founding_date', models.DateField()),
                ('founders_list_text', models.TextField()),
                ('summary', models.TextField()),
                ('website', models.CharField(max_length=300)),
                ('mail_address', models.CharField(max_length=300)),
                ('investment_amount', models.TextField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='StartupTags',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag', models.CharField(max_length=100)),
                ('startup', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startup.startupdetails')),
            ],
        ),
    ]
