from typing import List

from django.utils.translation import gettext_lazy as _
from ninja import Router

from .models import EventPeople
from .schemes import EventPeopleOutSchema

router = Router()
