from django.contrib import admin

from people.models import EventPeople
from ..models import Event


class EventPeopleInline(admin.TabularInline):
    model = EventPeople
    extra = 1


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    readonly_fields = ('slug',)
    inlines = [EventPeopleInline]
