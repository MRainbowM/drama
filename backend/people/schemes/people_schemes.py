from ninja import ModelSchema

from ..models import People


class PeopleOutSchema(ModelSchema):
    class Config:
        model = People
        model_fields = [
            'id', 'first_name', 'last_name'
        ]


class PeopleDetailSchema(ModelSchema):
    class Config:
        model = People
        model_fields = [
            'id', 'first_name', 'last_name', 'tag', 'photo', 'description', 'birthday', 'position', 'education'
        ]
