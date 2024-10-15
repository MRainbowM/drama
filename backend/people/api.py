from typing import List

from django.utils.translation import gettext_lazy as _
from ninja import Router

from .models import People
from .schemes import PeopleDetailSchema

router = Router()


@router.get(
    '/list',
    response=List[PeopleDetailSchema],
    tags=[_('Люди театра')],
    summary=_('Получить список людей театра')
)
def get_event_show_list(request):
    people_list = People.objects.all()

    return people_list
