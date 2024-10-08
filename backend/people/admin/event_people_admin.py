from django.contrib import admin

from ..models import EventPeople


@admin.register(EventPeople)
class EventPeopleAdmin(admin.ModelAdmin):
    pass
