# Generated by Django 3.2.13 on 2023-07-11 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_demo_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='demo',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]