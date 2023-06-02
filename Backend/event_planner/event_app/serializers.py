from rest_framework import serializers
from models import *
from ..user_app.models import User


class EventSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    
    class Meta:
        model = Event
        fields = "__all__"



class AgendaSerializer(serializers.ModelSerializer):
    event = EventSerializer(required=True)
    
    class Meta:
        model = Agenda
        fields = "__all__"
    
    
class BudgetSerializer(serializers.ModelSerializer):
    event = EventSerializer(required=True)
    
    class Meta:
        model = Budget
        fields = "__all__"


class RSVPSerializer(serializers.ModelSerializer):
    event = EventSerializer(required=True)
    
    class Meta:
        model = RSVP
        fields = "__all__"


class GuestSerializer(serializers.ModelSerializer):
    event = EventSerializer(required=True)
    
    class Meta:
        model = Guest
        fields = "__all__"
        

class ReportSerializer(serializers.ModelSerializer):
    event = EventSerializer(required=True)
    
    class Meta:
        model = Report
        fields = "__all__"               
        
