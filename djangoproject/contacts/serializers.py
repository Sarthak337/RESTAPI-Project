from rest_framework import serializers
from .models import Contact,Personal_Information,Pedigree,Social_media_link,Office_Detail

class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = "__all__"
class Personal_InformationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Personal_Information
        fields = "__all__"
class PedigreeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Pedigree
        fields = "__all__"
class Social_media_linkSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Social_media_link
        fields = "__all__"
class Office_DetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Office_Detail
        fields = "__all__"

