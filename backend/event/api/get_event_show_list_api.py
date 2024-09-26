from basis.api import api
from ninja import Query

from ..schemes import EventShowFilterSchema


@api.get("/event_show/list")
def get_event_show_list_api(request, filters: EventShowFilterSchema = Query(...)):
    return "Hello world"
