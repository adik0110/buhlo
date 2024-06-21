from django.db import models

class Bottle(models.Model):
    ALCOHOL_TYPES = [
        ('WHISKEY', 'Whiskey'),
        ('VODKA', 'Vodka'),
        ('WINE', 'Wine'),
        ('BEER', 'Beer'),
        ('RUM', 'Rum'),
        ('GIN', 'Gin'),
        ('TEQUILA', 'Tequila'),
        ('BRANDY', 'Brandy'),
        ('LIQUEUR', 'Liqueur'),
        ('OTHER', 'Other'),
    ]

    name = models.CharField(max_length=150, verbose_name="Название")
    alcohol_type = models.CharField(max_length=50, choices=ALCOHOL_TYPES, verbose_name="Тип алкоголя")
    stock = models.PositiveIntegerField(verbose_name="Количество на складе")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    description = models.TextField(verbose_name="Описание", blank=True)
    image = models.ImageField(upload_to='bottle_images/', verbose_name="Изображение", blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Бутылка"
        verbose_name_plural = "Бутылки"
        ordering = ['name']
