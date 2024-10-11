from ninja import ModelSchema

from .people_schemes import PeopleOutSchema
from ..models import EventPeople


class EventPeopleOutSchema(ModelSchema):
    people: PeopleOutSchema

    class Config:
        model = EventPeople
        model_fields = ['id', 'tag', 'role', 'sort']
