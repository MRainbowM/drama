from datetime import datetime
from typing import Optional

from ninja import Schema, FilterSchema, Field

from .event_schemes import EventPreviewSchema


class EventShowOutSchema(Schema):
    id: int
    event: EventPreviewSchema
    start_at: datetime
    is_premiere: bool
    link_to_buy_ticket: str


class EventShowFilterSchema(FilterSchema):
    start_at__gte: Optional[datetime] = Field(None, q='start_at__gte')
    start_at__lte: Optional[datetime] = Field(None, q='start_at__lte')
    is_enable: Optional[bool] = Field(None, q='is_enable')
