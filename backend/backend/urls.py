from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from activity.views import ActivityViewSet

from users.views import UserViewSet

router = DefaultRouter()
router.register("users", UserViewSet, "user")
router.register("activities", ActivityViewSet, "activity")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('dj_rest_auth.urls')),
    path('rest-auth/registration/', include('dj_rest_auth.registration.urls')),
]
