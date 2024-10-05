from typing import List

from basis.api import api
from ninja import Query

from ..schemes import EventShowFilterSchema, EventShowSchema


@api.get('/event_show/list', response=List[EventShowSchema])
def get_event_show_list_api(request, filters: EventShowFilterSchema = Query(...)):
    from event.models import EventShow

    event_show_list = EventShow.objects.all()
    event_show_list = filters.filter(event_show_list)

    return event_show_list
