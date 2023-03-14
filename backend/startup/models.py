from django.db import models

class StartupDetail(models.Model):
    name = models.CharField(max_length=300)
    logo = models.FileField(upload_to='images')
    location = models.TextField()
    employee_count = models.IntegerField()
    founding_date = models.DateField(auto_now=False, auto_now_add=False)
    founders_list_text = models.TextField()
    summary = models.TextField()
    
    website = models.CharField(max_length=300) 
    mail_address = models.CharField(max_length=300)
    investment_amount = models.CharField(max_length=100)


class StartupTag(models.Model):
    startup = models.ForeignKey(StartupDetail, on_delete=models.CASCADE)
    tag = models.CharField(max_length=100)
