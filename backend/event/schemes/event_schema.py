from ninja import Schema


class EventSchema(Schema):
    id: int
    name: str
    short_description: str
    cover: str
    slug: str
