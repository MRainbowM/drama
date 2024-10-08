from typing import List

from django.utils.translation import gettext_lazy as _
from ninja import Router

from .models import EventPeople
from .schemes import EventPeopleOutSchema

router = Router()


@router.get(
    '/event_people/list/{event_id}',
    response=List[EventPeopleOutSchema],
    tags=[_('Участники спектаклей')],
    summary=_('Получить список участников спектакля')
)
def get_event_people_list_by_event_id(request, event_id: int):
    event_people_list = EventPeople.objects.filter(event_id=event_id)

    return event_people_list
