from datetime import datetime

from ninja import Schema

from .event_schema import EventSchema


class EventShowSchema(Schema):
    id: int
    event: EventSchema
    start_at: datetime
