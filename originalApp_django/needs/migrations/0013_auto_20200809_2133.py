# Generated by Django 3.0.5 on 2020-08-09 12:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('needs', '0012_auto_20200809_2113'),
    ]

    operations = [
        migrations.AlterField(
            model_name='need',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 9, 21, 33, 27, 537094), verbose_name='投稿日時'),
        ),
    ]