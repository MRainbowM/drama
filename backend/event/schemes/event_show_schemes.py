from datetime import datetime
from typing import Optional

from ninja import Schema, FilterSchema

from .event_schemes import EventBoundSchema


class EventShowOutSchema(Schema):
    id: int
    event: EventBoundSchema
    start_at: datetime


class EventShowFilterSchema(FilterSchema):
    start_at: Optional[datetime] = None
