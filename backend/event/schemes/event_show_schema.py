from ninja import Schema

from .event_schema import EventSchema


class EventShowSchema(Schema):
    id: int
    event: EventSchema
