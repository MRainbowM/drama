from charset_normalizer.md import List
from ninja import ModelSchema

from people.schemes import EventPeopleOutSchema
from ..models import Event


class EventOutSchema(ModelSchema):
    peoples: List[EventPeopleOutSchema]

    class Config:
        model = Event

        model_fields = [
            'id', 'name', 'slug', 'short_description', 'cover', 'min_age_limit',
            'description', 'duration', 'has_intermission',
        ]

    @staticmethod
    def resolve_peoples(obj):
        return obj.peoples.all()


class EventBoundSchema(ModelSchema):
    class Config:
        model = Event
        model_fields = [
            'id', 'name', 'slug', 'short_description', 'cover', 'min_age_limit',
        ]
