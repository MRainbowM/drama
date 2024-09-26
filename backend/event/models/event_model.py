from basis.models.dates_abstract_model import DatesAbstract
from django.db import models
from django.utils.translation import gettext_lazy as _

from .services.event_cover_path import event_cover_path


class Event(DatesAbstract):
    """Репертуар"""

    name = models.CharField(_('Название спектакля'), max_length=256, unique=True)
    slug = models.CharField(_('Слаг названия'), max_length=256)
    short_description = models.TextField(_('Краткое описание'))
    is_enable = models.BooleanField(_('Показывать в репертуаре'),  default=True)
    cover = models.ImageField(_('Обложка'), upload_to=event_cover_path)

    class Meta:
        verbose_name = _('Спектакль')
        verbose_name_plural = _('Спектакли')

    def __str__(self) -> str:
        return str(self.name)