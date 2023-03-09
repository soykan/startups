from django.contrib import admin

from .models import StartupDetail, StartupTag

admin.site.register(StartupDetail)
admin.site.register(StartupTag)