from rest_framework import serializers, validators
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name', "contact")
        extra_kwargs = {
            "password": {"write_only": True},
            "email": {
                "required": True,
                "allow_blank": False,
                "validators": [
                    validators.UniqueValidator(
                        User.objects.all(), "A user with that email already exits"
                    ),
                ]
            }
        }
        
    def create(self, validated_data):
        username = validated_data.get('username')
        password = validated_data.get('password')
        email = validated_data.get('email')
        first_name = validated_data.get('first_name')
        last_name = validated_data.get('last_name')
        contact = validated_data.get("contact")
        
        user = User.objects.create(
            username = username,
            password = password,
            email = email,
            first_name = first_name,
            last_name = last_name,
            contact = contact,
        )
        
        return user
        

class AgendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields = '__all__'
    
    
class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = "__all__"

class RSVPSerializer(serializers.ModelSerializer):
    class Meta:
        model = RSVP
        fields = "__all__"

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = "__all__"
        

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = "__all__"
        
        
class EventSerializer(serializers.ModelSerializer):
    # user = UserSerializer(required=True)
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    budget = BudgetSerializer(required=False)
    agenda = AgendaSerializer(required=False)
    report = ReportSerializer(required=False)

    class Meta:
        model = Event
        fields = "__all__"
        
        

class InvitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invitation
        fields = '__all__'