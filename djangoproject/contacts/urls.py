from django.contrib import admin
from django.urls import include,path
from rest_framework.urlpatterns import format_suffix_patterns
from contacts.views import ContactListView
from contacts import views
urlpatterns = [
    
    path('Contact_List/', views.ContactListView.as_view()),
]