from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)
    contact = models.IntegerField(blank=True, null=True)
    
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name']

class Budget(models.Model):
    item_name = models.CharField(max_length=255, blank=False, null=False)
    item_cost= models.IntegerField(default=0)
    item_paid = models.BooleanField(default=False)

    def __str__(self):
        return (self.item_name )


class Guest(models.Model):
    email = models.EmailField(primary_key=True, max_length=255, unique = True)
    first_name = models.CharField(max_length=255, blank=False, null=False)
    last_name = models.CharField(max_length=255, blank=False, null=False)
    contact = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name
    
    
class Report(models.Model):
    attendance = models.IntegerField(default=0)
    total_cost = models.IntegerField(default=0)
    summary = models.TextField()
    

class Agenda(models.Model):
    activity_name = models.CharField(max_length=255, blank=False, null=False)
    time = models.TimeField()
    
    def __str__(self):
        return self.activity_name


class Event(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    date = models.DateField(blank=False, null=False)
    # time = models.TimeField(blank=False, null=False)
    location = models.CharField(max_length=255,blank=False, null=False)
    description = models.TextField()
    event_type = models.CharField(max_length=255, blank=True, null=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, null=False)
    budget_id = models.ForeignKey(Budget, on_delete=models.SET_NULL, blank=True, null=True)
    report_id = models.ForeignKey(Report, on_delete=models.SET_NULL, blank=True, null=True)
    agender_id = models.ForeignKey(Agenda, on_delete=models.SET_NULL, blank=True, null=True)
    def __str__(self):
        return self.name


class RSVP(models.Model):
    event_id = models.ForeignKey(Event, on_delete=models.CASCADE, blank=False, null=False)
    email = models.ForeignKey(Guest, on_delete=models.CASCADE, blank=False, null=False)


class Invitation(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    invited_user_email = models.EmailField(max_length=255)
    invitation_url = models.CharField(max_length=255)

    class Meta:
        ordering = ('event',)
        