from typing import List

from django.utils.translation import gettext_lazy as _
from ninja import NinjaAPI, Query

from event.models import EventShow
from .schemes import EventShowFilterSchema, EventShowOutSchema

api = NinjaAPI()


@api.get('/event_show/list', response=List[EventShowOutSchema], tags=[_('Афиша')])
def get_event_show_list(request, filters: EventShowFilterSchema = Query(...)):
    event_show_list = EventShow.objects.all()
    event_show_list = filters.filter(event_show_list)

    return event_show_list
