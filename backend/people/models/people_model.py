from django.db import models
from django.utils.translation import gettext_lazy as _

from basis.models.dates_abstract_model import DatesAbstract


class People(DatesAbstract):
    """Люди театра"""
    name = models.CharField(_('Имя, фамилия'), max_length=512)

    class Meta:
        verbose_name = _('Люди')
        verbose_name_plural = _('Люди')

    def __str__(self) -> str:
        return str(self.name)
