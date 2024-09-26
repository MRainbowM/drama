from datetime import datetime
from typing import Optional

from ninja import Field, FilterSchema


class EventShowFilterSchema(FilterSchema):
    start_at: Optional[datetime] = None
