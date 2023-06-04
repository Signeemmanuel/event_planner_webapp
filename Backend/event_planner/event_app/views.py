from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response
from .models import *
from .serializers import *
from .permissions import IsHost


class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    permission_classes = [IsHost, IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        queryset = Event.objects.filter(user=user)
        return queryset
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        
    
class AgendaViewSet(viewsets.ModelViewSet):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer
    # permission_classes = [IsHost, IsAuthenticated]
    
    # def get_queryset(self):
    #     event_id = self.request.data.get("event")
    #     queryset = Agenda.objects.filter(event=event_id)
    #     return queryset
    
    # def perform_create(self, serializer):
    #     serializer.save()        
    
# class AgendaDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Agenda.objects.all()
#     serializer_class = AgendaSerializer
    
    # def get_queryset(self):
    #     event = self.request.data.get("event")
    #     queryset = Agenda.objects.filter(event=event)
    #     return queryset
    
# class AgendaCreate(generics.CreateAPIView):
#     serializer_class = AgendaSerializer
    
#     def perform_create(self, serializer):
#         event_id = self.request.data.get("event_id")
#         event = Event.objects.get(id=event_id)
#         serializer.save(event=event)
     
    
class BudgetViewSet(viewsets.ModelViewSet):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer
    
    
class GuestViewSet(viewsets.ModelViewSet):
    permission_classes = []
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer
    
    
class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    
class RSVPViewSet(viewsets.ModelViewSet):
    queryset = RSVP.objects.all()
    serializer_class = RSVPSerializer

