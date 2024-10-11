from ninja import ModelSchema

from ..models import People


class PeopleOutSchema(ModelSchema):
    class Config:
        model = People
        model_fields = [
            'id', 'name'
        ]
