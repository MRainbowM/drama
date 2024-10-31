# Generated by Django 5.1.1 on 2024-10-31 14:15

import event.models.services.event_program_pdf_path
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0009_eventshow_link_to_buy_ticket'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='program_pdf',
            field=models.FileField(blank=True, default='', help_text='PDF файл с программой спектакля', null=True, upload_to=event.models.services.event_program_pdf_path.event_program_pdf_path, verbose_name='Программка спектакля'),
        ),
    ]
