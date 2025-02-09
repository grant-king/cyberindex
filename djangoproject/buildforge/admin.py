from django.contrib import admin
from buildforge.models import Voxel, Claim, PlacementPromise, Builder

admin.site.register(Voxel)
admin.site.register(Claim)
admin.site.register(PlacementPromise)
admin.site.register(Builder)
