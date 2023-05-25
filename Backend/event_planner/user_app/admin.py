from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)
admin.site.register(Event)
admin.site.register(Budget)
admin.site.register(Agender)
admin.site.register(Guest)
admin.site.register(Report)
admin.site.register(RSVP)
admin.site.register(Invitation)