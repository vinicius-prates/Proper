# Generated by Django 4.1.2 on 2022-11-10 11:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sneakers', '0004_alter_sneaker_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sneaker',
            name='brand',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='sneakers.brand'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='sneaker',
            name='condition',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='sneakers.condition'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='sneaker',
            name='size',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='sneakers.sneakersize'),
            preserve_default=False,
        ),
    ]
