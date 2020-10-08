"""djangoproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from contacts import views
from rest_framework.urlpatterns import format_suffix_patterns



urlpatterns = [
    path('admin/',admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),

    path('Contact', views.ContactListView.as_view()),
    path('Contact<pk>', views.ContactView.as_view()),

    path('Personal_Information', views.Personal_InformationListView.as_view()),
    path('Personal_Information<pk>', views.Personal_InformationView.as_view()),

    path('Pedigree', views.PedigreeListView.as_view()),
    path('Pedigree<pk>', views.PedigreeView.as_view()),

    path('Social_media_link', views.Social_media_linkListView.as_view()),
    path('Social_media_link<pk>', views.Social_media_linkView.as_view()),

    path('Office_Detail', views.Office_DetailListView.as_view()),
    path('Office_Detail<pk>', views.Office_DetailView.as_view()),

]



