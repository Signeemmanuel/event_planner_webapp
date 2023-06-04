from rest_framework import serializers
from .models import *
from user_app.models import User
from user_app.serializers import UserSerializer

class EventSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    # user_first_name = serializers.CharField(source='user.first_name')
    # user_last_name = serializers.CharField(source='user.last_name')
    # user = UserSerializer()
    class Meta:
        model = Event
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        user = instance.user
        representation['user_first_name'] = user.first_name
        representation['user_last_name'] = user.last_name
        return representation


class AgendaSerializer(serializers.ModelSerializer):
    event = EventSerializer()
    
    class Meta:
        model = Agenda
        fields = "__all__"
    
    
class BudgetSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Budget
        fields = "__all__"

        
class RSVPSerializer(serializers.ModelSerializer):
    event = serializers.PrimaryKeyRelatedField(queryset=Event.objects.all())
    
    class Meta:
        model = RSVP
        fields = "__all__"


class GuestSerializer(serializers.ModelSerializer):
    event = EventSerializer(required=True)
    
    class Meta:
        model = Guest
        fields = "__all__"
        

class ReportSerializer(serializers.ModelSerializer):
    event = serializers.PrimaryKeyRelatedField(queryset=Event.objects.all())
    
    class Meta:
        model = Report
        fields = "__all__"               
    
    def to_representation(self, instance):
        representation = super().to_representation(instance=instance)
        event_instance = instance.event
        representation["event_name"] = event_instance.name
        representation["event_date"] = event_instance.date
        representation["event_time"] = event_instance.time
        
        return representation
