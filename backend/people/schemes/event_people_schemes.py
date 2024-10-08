from ninja import ModelSchema

from .people_schemes import PeopleBoundSchema
from ..models import EventPeople


class EventPeopleOutSchema(ModelSchema):
    people: PeopleBoundSchema

    class Config:
        model = EventPeople
        model_fields = ['id', 'tag', 'role']
