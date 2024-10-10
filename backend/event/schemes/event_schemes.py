from charset_normalizer.md import List
from ninja import ModelSchema

from people.schemes import EventPeopleOutSchema
from .event_image_schemes import EventImageBoundSchema
from ..models import Event


class EventOutSchema(ModelSchema):
    peoples: List[EventPeopleOutSchema]
    images: List[EventImageBoundSchema]

    class Config:
        model = Event

        model_fields = [
            'id', 'name', 'slug', 'short_description', 'cover', 'preview_cover', 'min_age_limit',
            'description', 'duration', 'has_intermission', 'premiere_at',
        ]

    @staticmethod
    def resolve_peoples(obj):
        return obj.peoples.all().order_by('sort')

    @staticmethod
    def resolve_images(obj):
        return obj.images.all()


class EventBoundSchema(ModelSchema):
    class Config:
        model = Event
        model_fields = [
            'id', 'name', 'slug', 'short_description', 'preview_cover', 'min_age_limit',
        ]
