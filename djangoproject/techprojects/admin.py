from django.contrib import admin

from .models import Location, ProjectRegistration, ProjectResourceLink

admin.site.register(Location)
admin.site.register(ProjectRegistration)
admin.site.register(ProjectResourceLink)
