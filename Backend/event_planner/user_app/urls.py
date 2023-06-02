from django.urls import path, include
from knox.views import LogoutView, LogoutAllView
from .views import *
# from rest_framework.routers import DefaultRouter


# router = DefaultRouter()
# router.register('agenda/<int:event_id>/', AgendaViewSet, basename='agenda')


urlpatterns = [
    path('login/', login_view, name='login view'),
    path('register/', register_view, name='login view'),
    path('users/', get_user_data, name="user data"),
    path('logout/', LogoutView.as_view(), name="logout view"),
    # path('logallout/', LogoutAllView.as_view(), name="logout all view"),
    # path('', include(router.urls)),
    # path('agendacreate/', AgendaCreate.as_view(), name="agenda"),
]
