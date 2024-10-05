from basis.models.dates_abstract_model import DatesAbstract
from django.db import models
from django.utils.translation import gettext_lazy as _

from .event_model import Event


class EventShow(DatesAbstract):
    """Афиша"""

    event = models.ForeignKey(Event, on_delete=models.CASCADE, verbose_name=_('Спектакль'))
    start_at = models.DateTimeField(_('Дата и время начала спектакля'))
    # end_at = models.DateTimeField(_('Дата и время окончания спектакля'))

    is_enable = models.BooleanField(_('Показывать в афише'),  default=True)
    is_premiere = models.BooleanField(_('Премьера'),  default=False)

    class Meta:
        verbose_name = _('Спектакль в афише')
        verbose_name_plural = _('Спектакли в афише')
