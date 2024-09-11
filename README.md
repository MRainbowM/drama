## Запуск проекта

### Сборка контейнера
```sh
docker-compose  up --build -d django-drama
```

### Запуск сервера
```sh
docker-compose exec django-drama python3 manage.py runserver 0.0.0.0:8007
```

### Применение миграций
```sh
docker-compose exec django-drama python3 manage.py migrate
```

### Cоздание супер-пользователя
```sh
docker-compose exec django-drama python3 manage.py createsuperuser
```
