from django.contrib import admin
from .models import Sponsor, SponsorProfile, SponsorMessage, SponsorContribution

# Register your models here.
admin.site.register(Sponsor)
admin.site.register(SponsorProfile)
admin.site.register(SponsorMessage)
admin.site.register(SponsorContribution)
