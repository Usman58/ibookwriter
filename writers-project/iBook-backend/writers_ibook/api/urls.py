

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CreateUserView, LoginView, LogoutView, ProjectViewSet

# Create a router and register the ProjectViewSet
router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('', include(router.urls)),  # Include the router-generated URLs
]