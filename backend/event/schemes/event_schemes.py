from ninja import ModelSchema

from ..models import Event


class EventOutSchema(ModelSchema):
    class Config:
        model = Event
        model_fields = [
            'id', 'name', 'slug', 'short_description', 'cover', 'min_age_limit',
            'description', 'duration', 'has_intermission'
        ]


class EventBoundSchema(ModelSchema):
    class Config:
        model = Event
        model_fields = [
            'id', 'name', 'slug', 'short_description', 'cover', 'min_age_limit',
        ]
