from __future__ import unicode_literals
from django.shortcuts import render
from .models import Contact,Personal_Information,Pedigree,Social_media_link,Office_Detail
from .serializers import ContactSerializer,Personal_InformationSerializer,PedigreeSerializer,Social_media_linkSerializer,Office_DetailSerializer
from rest_framework import generics
from django.contrib.auth.models import User

class ContactListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = ContactSerializer

class ContactView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContactSerializer
    queryset = User.objects.all()



class Personal_InformationListView(generics.ListCreateAPIView):
    queryset = Personal_Information.objects.all()
    serializer_class = Personal_InformationSerializer

class Personal_InformationView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = Personal_InformationSerializer
    queryset = Personal_Information.objects.all()




class PedigreeListView(generics.ListCreateAPIView):
    queryset = Pedigree.objects.all()
    serializer_class = PedigreeSerializer

class PedigreeView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PedigreeSerializer
    queryset = Pedigree.objects.all()




class Social_media_linkListView(generics.ListCreateAPIView):
    queryset = Social_media_link.objects.all()
    serializer_class = Social_media_linkSerializer

class Social_media_linkView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = Social_media_linkSerializer
    queryset = Social_media_link.objects.all()




class Office_DetailListView(generics.ListCreateAPIView):
    queryset = Office_Detail.objects.all()
    serializer_class = Office_DetailSerializer


class Office_DetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = Office_DetailSerializer
    queryset = Office_Detail.objects.all()

 
