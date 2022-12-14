# Generated by Django 4.1.2 on 2022-11-10 11:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sneakers', '0005_alter_sneaker_brand_alter_sneaker_condition_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sneaker',
            name='brand',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='sneakers.brand'),
        ),
        migrations.AlterField(
            model_name='sneaker',
            name='condition',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='sneakers.condition'),
        ),
        migrations.AlterField(
            model_name='sneaker',
            name='size',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='sneakers.sneakersize'),
        ),
    ]
