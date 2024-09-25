from basis.models.dates_abstract_model import DatesAbstract
from django.db import models
from django.utils.translation import gettext_lazy as _


class Show(DatesAbstract):
    """Репертуар"""

    name = models.CharField(_('Название спектакля'), max_length=256, unique=True)
    slug = models.CharField(_('Слаг названия'), max_length=256)
    short_description = models.TextField()

    class Meta:
        verbose_name = _('Спектакль')
        verbose_name_plural = _('Спектакли')
