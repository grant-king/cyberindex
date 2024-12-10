from django.contrib import admin

from .models import ProjectUser, Location, ProjectRegistration, ProjectResourceLink

admin.site.register(ProjectUser)
admin.site.register(Location)
admin.site.register(ProjectRegistration)
admin.site.register(ProjectResourceLink)
