from __future__ import unicode_literals
from django.shortcuts import render
from .models import Contact
from .serializers import ContactSerializer
from rest_framework import generics
from django.views.generic.edit import UpdateView

class ContactListView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
class ContactView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()





 
