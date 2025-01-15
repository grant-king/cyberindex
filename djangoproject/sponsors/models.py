from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Sponsor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    archived = models.BooleanField(default=False, db_index=True)


class SponsorProfile(models.Model):
    sponsor = models.OneToOneField(Sponsor, on_delete=models.CASCADE)
    rep_name = models.CharField(max_length=100, null=True, blank=True)
    rep_role = models.CharField(max_length=100, null=True, blank=True)
    rep_image_url = models.URLField(null=True, blank=True)
    company_name = models.CharField(max_length=100, null=True, blank=True)
    company_logo_url = models.URLField(null=True, blank=True)
    company_website = models.URLField(null=True, blank=True)


class SponsorMessage(models.Model):
    sponsor = models.ForeignKey(Sponsor, on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class SponsorContribution(models.Model):
    sponsor = models.ForeignKey(Sponsor, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

