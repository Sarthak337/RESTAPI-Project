from django.contrib import admin
from .models import Contact,Personal_Information,Pedigree,Social_media_link,Office_Detail

admin.register(Contact,Personal_Information,Pedigree,Social_media_link,Office_Detail)(admin.ModelAdmin)
