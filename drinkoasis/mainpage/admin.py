from django.contrib import admin

from .models import Bottle

@admin.register(Bottle)
class BottleAdmin(admin.ModelAdmin):
    list_display = ('name', 'alcohol_type', 'stock', 'price')
    search_fields = ('name', 'alcohol_type')
    list_filter = ('alcohol_type',)