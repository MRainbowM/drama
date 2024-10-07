from typing import List

from django.shortcuts import get_object_or_404
from django.utils.translation import gettext_lazy as _
from ninja import NinjaAPI, Query

from event.models import EventShow, Event
from .schemes import EventShowFilterSchema, EventShowOutSchema, EventOutSchema

api = NinjaAPI()


@api.get(
    '/event_show/list',
    response=List[EventShowOutSchema],
    tags=[_('Афиша')],
    summary=_('Получить список спектаклей в афише')
)
def get_event_show_list(request, filters: EventShowFilterSchema = Query(...)):
    event_show_list = EventShow.objects.all()
    event_show_list = filters.filter(event_show_list)

    return event_show_list


@api.get(
    '/event/{slug}',
    response=EventOutSchema,
    tags=[_('Спектакли')],
    summary=_('Получить данные спектакля по slug')
)
def get_event_by_slug(request, slug: str):
    event = get_object_or_404(Event, slug=slug)
    return event
