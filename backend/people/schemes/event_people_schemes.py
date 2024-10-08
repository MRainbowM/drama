from ninja import Schema

from .people_schemes import PeopleBoundSchema


class EventPeopleOutSchema(Schema):
    id: int
    people: PeopleBoundSchema
    tag: str
    role: str
