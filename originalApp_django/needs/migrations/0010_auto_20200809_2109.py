# Generated by Django 3.0.5 on 2020-08-09 12:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('needs', '0009_auto_20200809_1926'),
    ]

    operations = [
        migrations.AlterField(
            model_name='need',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 9, 21, 9, 8, 774976), verbose_name='投稿日時'),
        ),
    ]
