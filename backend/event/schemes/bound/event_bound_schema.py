from ninja import Schema


class EventBoundSchema(Schema):
    id: int
    name: str
    slug: str
    short_description: str
    cover: str
    min_age_limit: int
