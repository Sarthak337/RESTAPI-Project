from django.db import models
from django.contrib.auth.models import User
from django import forms

class Contact(models.Model):

    COMPANY_NAME = (
        ('n','NA'),
        ('t','TCS'),
        ('i','INFOSYS'),
        ('a','ACCENTURE'),
        ('a','AMAZON'),
        ('h','HIGHRADIUS'),
    )
    co_name = models.CharField(max_length=20,choices=COMPANY_NAME,default='NA')
    def __contact__(self):
        return self.co_name
class Personal_Information(models.Model):
    name = models.CharField(max_length=30)
    SALUTATION = (
        ('n','NA'),
        ('c','Colonel'),
        ('mr','Mr.'),
        ('mrs','Mrs.'),
        ('D','Dr'),
    )
    salutation = models.CharField(max_length=20,choices=SALUTATION,default='NA')
    REFERRED_BY = (
        ('n','NA'),
        ('a','Mr A.'),
        ('b','Mr B'),
        ('c','Mr C'),
    )
    referred_by = models.CharField(max_length=20,choices=REFERRED_BY,default='NA')
    DESIGNATION = (
        ('n','NA'),
        ('h','HR'),
        ('f','Finance'),
        ('a','Administration'),
        ('a','Accounts'),
        ('i','IT'),
        ('m','Management'),
        ('ma','Marketing'),
        ('t','Technical'),
        ('p','Purchase'),
    )
    designation = models.CharField(max_length=20,choices=DESIGNATION,default='NA')

    DEPARTMENT = (
        ('n','NA'),
        ('h','HR'),
        ('f','Finance'),
        ('ad','Administration'),
        ('ac','Accounts'),
        ('i','IT'),
        ('m','Management'),
        ('ma','Marketing'),
        ('t','Technical'),
        ('p','Purchase'),
            )
    department = models.CharField(max_length=20,choices=DEPARTMENT,default='NA')
    designation = models.CharField(max_length=100)
    email = models.EmailField(max_length=70)
    mob_no = models.CharField(max_length=20)
    remarks = models.TextField(max_length=150)

    def __personalinformation__(self):
        return self.name
class Pedigree(models.Model):
    COLLEGE_CHOICES = [
        ('K','KIIT'),
        ('O','Others'),
    ]
    address1 = forms.ChoiceField(choices=COLLEGE_CHOICES,widget=forms.RadioSelect)
    y_of_p = models.CharField(max_length=10)
    degree = models.CharField(max_length=50)
    Working_Since = models.DateField()
class Social_media_link(models.Model):
    Linkedin = models.CharField(max_length=30)
    Facebook = models.CharField(max_length=30)
    Twitter = models.CharField(max_length=30)
class Office_Detail(models.Model):
    OFFICE_DETAILS = (
        ('n','NA'),
        ('hd','Head office'),
        ('f','Factory plant'),
        ('bch','Branch office'),
        ('p','Project_site'),
        ('r','Regional_office'),
        ('re','Registered_office'),
        ('z','Zonal_office'),
    )
    Of_details = models.CharField(max_length=20,choices=OFFICE_DETAILS,default='NA')
    Board_line_number = models.CharField(max_length=20)
    Address = models.TextField(max_length=200)
    Country = models.CharField(max_length=20)
    City = models.CharField(max_length=15)
    RECRUITMENT_CHOICES = [('','')]
    address2 = forms.ChoiceField(choices=RECRUITMENT_CHOICES,widget=forms.RadioSelect)

    def __Officedetail__(self):
        return self.Of_details




