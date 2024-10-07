from ninja import Schema


class EventSchema(Schema):
    id: int
    name: str
    slug: str
    short_description: str
    description: str
    cover: str
    min_age_limit: str
    