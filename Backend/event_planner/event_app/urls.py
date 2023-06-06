from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('event', EventViewSet, basename="events"),
# router.register('agenda', AgendaViewSet, basename="agenda"),
router.register('report', ReportViewSet, basename="report")

urlpatterns = [
    path('', include(router.urls)),
     path('agenda/<int:event_id>/', AgendaListView.as_view(), name="agenda-detail"),
]