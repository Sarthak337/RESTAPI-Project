from django.contrib import admin
from django.urls import include,path
from contacts import views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('admin/',admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('',include('contacts.urls')),
]





