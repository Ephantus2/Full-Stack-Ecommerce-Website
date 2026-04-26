from django.core.management.base import BaseCommand
from ...models import Products

class Command(BaseCommand):
    help = 'Fix image names manually'

    def handle(self, *args, **kwargs):
        updates = {
            "duvet_p5ZY1Sr.jpg": "duvet.jpg",
            "coffeetable1.jpg": "coffeetable2.jpg",
            "cooker_OrmisVf.jpg": "cooker.jpg",
            "laptop2_YV1IHrG.jpg": "laptop1.jpg",
            "laptop1_Otyuut5.jpg": "laptop2.jpg",
            "redmi1_Xtqqia0.jpg": "redmi1.jpg",
            "samsung1_crxcH6P.jpg": "samsung1.jpg",
            "tv1_r1F74WE.jpg": "tv1.jpg",
            "IMG-20250901-WA0018.jpg": "shoes1.jpg",
            "shoes1_KkUGcnc.jpg": "shoes2.jpg",
            "shoes2_FOEh7eQ.jpg": "shoes3.jpg",
            "shoes4_3n0dhmu.jpg": "shoes4.jpg",
            "watch_tr7Gd6d.jpg": "watch.jpg",
            "woofer2.jpg": "woofer1.jpg",
            "fridge1_lxR7DMk.jpg": "fridge1.jpg",
            "fan_VAUOaMn.jpg": "fan.jpg",
            "coffeetable2_RLJgjyE.jpg": "coffeetable2.jpg",
            "bluecups_4CIzbvl.jpg": "bluecups.jpg",
            "pinkcups_Ite955p.jpg": "pinkcups.jpg",
            "iron1.jpg": "flashdisk.jpg",
        }

        updated = 0

        for product in Products.objects.all():
            if product.image:
                current_name = product.image.name.split("/")[-1]

                if current_name in updates:
                    new_name = updates[current_name]
                    product.image.name = f"media/photos/{new_name}"
                    product.save()
                    updated += 1

        self.stdout.write(self.style.SUCCESS(f"Updated {updated} products"))