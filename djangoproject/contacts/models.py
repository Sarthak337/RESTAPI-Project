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
    email = models.EmailField(max_length=70)
    mob_no = models.CharField(max_length=20)
    direct_no = models.CharField(max_length=20)
    notes = models.TextField()
    INSTITUTIONS = [
        ('K','KIIT'),
        ('O','Others'),
    ]
    institution = forms.ChoiceField(choices=INSTITUTIONS,widget=forms.RadioSelect)
    SCHOOL = (
        ('n','NA'),
        ('s1','School_1'),
        ('s2','School_2'),
        ('s3','School_3'),
    )
    school = models.CharField(max_length=20,choices=SCHOOL,default='NA')
    STREAM = (
        ('n','NA'),
        ('s1','STREAM_1'),
        ('s2','STREAM_2'),
        ('s3','STREAM_3'),
    )
    school = models.CharField(max_length=20,choices=STREAM,default='NA')
    y_of_p = models.CharField(max_length=10)
    degree = models.CharField(max_length=50)
    MONTH = (
        ('n','NA'),
        ('j1','JANUARY'),
        ('j2','FEBRUARY'),
    )
    month = models.CharField(max_length=20,choices=MONTH,default='NA')
    YEAR = (
        ('n','NA'),
        ('j1','2001'),
        ('j2','2002'),
    )
    year = models.CharField(max_length=20,choices=YEAR,default='NA')
    Linkedin = models.CharField(max_length=30)
    Facebook = models.CharField(max_length=30)
    Twitter = models.CharField(max_length=30)
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
    RECRUITMENT_CHOICES = [('KIIT','OTHERS')]
    address2 = forms.ChoiceField(choices=RECRUITMENT_CHOICES,widget=forms.RadioSelect)

    def __Officedetail__(self):
        return self.name


