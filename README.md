## Запуск проекта

### Сборка контейнера
```sh
docker-compose up --build -d django-drama
```

### Остановка контейнера
```sh
docker-compose stop django-drama
```

## Backend

### Запуск сервера
```sh
docker-compose exec django-drama python3 manage.py runserver 0.0.0.0:8007
```

### Создание миграций
```sh
docker-compose exec django-drama python3 manage.py makemigrations
```

### Применение миграций
```sh
docker-compose exec django-drama python3 manage.py migrate
```

### Cоздание супер-пользователя
```sh
docker-compose exec django-drama python3 manage.py createsuperuser
```

### Создание приложения
```sh
docker-compose exec django-drama python3 manage.py startapp {app_name}
```

## Frontend

### Запуск фронтенда
```sh
npm run dev
```