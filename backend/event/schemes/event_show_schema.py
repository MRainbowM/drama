from ninja import Schema
from pydantic import Field

from .event_schema import EventSchema


class EventShowSchema(Schema):
    id: int
    event: EventSchema = Field(..., alias='event')
