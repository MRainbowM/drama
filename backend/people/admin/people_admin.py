from django.contrib import admin

from ..models import People


@admin.register(People)
class PeopleAdmin(admin.ModelAdmin):
    pass
