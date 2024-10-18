# Generated by Django 5.1.1 on 2024-10-18 07:31

from django.db import migrations, models
from slugify import slugify


def forwards_func(apps, schema_editor):
    People = apps.get_model('people', 'People')

    for people in People.objects.all():
        slug = slugify(
            f'{people.first_name} {people.last_name} {people.tag}'
        )
        People.objects.filter(pk=people.pk).update(slug=slug)


def reverse_func(apps, schema_editor):
    pass


class Migration(migrations.Migration):
    dependencies = [
        ('people', '0007_rename_firstname_people_first_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='people',
            name='slug',
            field=models.CharField(default='', max_length=256, verbose_name='Слаг имени'),
            preserve_default=False,
        ),
        migrations.RunPython(forwards_func, reverse_func),
        migrations.AlterField(
            model_name='people',
            name='slug',
            field=models.CharField(default='', max_length=256, unique=True, verbose_name='Слаг имени'),
            preserve_default=False,
        ),
    ]