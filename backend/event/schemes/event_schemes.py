from ninja import ModelSchema, Schema

from ..models import Event


class EventOut(ModelSchema):
    class Config:
        model = Event
        model_fields = [
            'id', 'name', 'slug', 'short_description', 'description', 'cover',
            'min_age_limit'
        ]


class EventBoundSchema(Schema):
    id: int
    name: str
    slug: str
    short_description: str
    cover: str
    min_age_limit: int
