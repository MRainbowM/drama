from basis.api import api


@api.get("/hello")
def hello(request):
    return "Hello world"
