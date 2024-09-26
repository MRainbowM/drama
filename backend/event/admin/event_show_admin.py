from django.contrib import admin

from ..models import EventShow


@admin.register(EventShow)
class EventShowAdmin(admin.ModelAdmin):
    pass
