from ninja import ModelSchema

from ..models import People


class PeopleOutSchema(ModelSchema):
    class Config:
        model = People
        model_fields = [
            'id', 'name'
        ]


class PeopleDetailSchema(ModelSchema):
    class Config:
        model = People
        model_fields = [
            'id', 'name', 'tag', 'photo', 'description', 'birthday', 'position', 'education'
        ]
