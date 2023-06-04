from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Event, Report

@receiver(post_save ,sender=Event)
def create_report(sender, instance, created, **kwargs):
    if created:
        # create report for new event
        Report.objects.create(event=instance)
            
