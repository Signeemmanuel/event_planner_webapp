from django.db import models
from ..user_app.models import User

class Event(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    date = models.DateField(blank=False, null=False)
    time = models.TimeField(blank=False, null=False)
    location = models.CharField(max_length=255,blank=False, null=False)
    description = models.TextField()
    event_type = models.CharField(max_length=255, blank=True, null=True)
    event = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    
    def __str__(self):
        return self.name


class Budget(models.Model):
    item_name = models.CharField(max_length=255, blank=False, null=False)
    item_cost= models.IntegerField(default=0)
    item_paid = models.BooleanField(default=False)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=False, blank=False)
    
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
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=False, blank=False)


class Agenda(models.Model):
    activity_name = models.CharField(max_length=255, blank=False, null=False)
    time = models.TimeField()
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=False, blank=False)
        
    def __str__(self):
        return self.activity_name


class RSVP(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=False, blank=False)
    email = models.ForeignKey(Guest, on_delete=models.CASCADE, blank=False, null=False)
    
    def __str__(self):
        return self.event_id + self.email

