from datetime import datetime

from ninja import Schema

from .bound.event_bound_schema import EventBoundSchema


class EventShowSchema(Schema):
    id: int
    event: EventBoundSchema
    start_at: datetime
