# Generated by Django 4.2.1 on 2023-06-02 14:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('event_app', '0002_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='event',
            new_name='user',
        ),
    ]