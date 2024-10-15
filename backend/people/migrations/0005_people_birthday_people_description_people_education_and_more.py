# Generated by Django 5.1.1 on 2024-10-15 05:30

import people.models.services.photo_path
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('people', '0004_alter_eventpeople_role'),
    ]

    operations = [
        migrations.AddField(
            model_name='people',
            name='birthday',
            field=models.DateField(blank=True, null=True, verbose_name='Дата рождения'),
        ),
        migrations.AddField(
            model_name='people',
            name='description',
            field=models.TextField(blank=True, default='', verbose_name='Описание'),
        ),
        migrations.AddField(
            model_name='people',
            name='education',
            field=models.CharField(blank=True, default='', max_length=256, verbose_name='Образование'),
        ),
        migrations.AddField(
            model_name='people',
            name='photo',
            field=models.ImageField(blank=True, default='', null=True, upload_to=people.models.services.photo_path.photo_path, verbose_name='Фотография'),
        ),
        migrations.AddField(
            model_name='people',
            name='position',
            field=models.CharField(blank=True, default='', max_length=256, verbose_name='Должность'),
        ),
        migrations.AddField(
            model_name='people',
            name='tag',
            field=models.CharField(blank=True, choices=[('actor', 'Актер'), ('director', 'Режиссер'), ('author', 'Автор'), ('team', 'Команда')], help_text='Фильтр на странице "Коллектив"', max_length=128, null=True, verbose_name='Тег'),
        ),
        migrations.AlterField(
            model_name='eventpeople',
            name='role',
            field=models.CharField(blank=True, default='', help_text='Если участник - актер: указать имя персонажа. Если участник выполняет другую роль, например, художник - нужно указать "художник"', max_length=256, verbose_name='Роль участника в спектакле'),
        ),
    ]
