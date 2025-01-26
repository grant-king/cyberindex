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


class SponsorMessage(models.Model): # aka meditation from gen pop user perspective
    sponsor = models.ForeignKey(Sponsor, on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    archived = models.BooleanField(default=False, db_index=True)

    class Meta:
        ordering = ['-created_at']


class SponsorContribution(models.Model):
    sponsor = models.ForeignKey(Sponsor, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)


class MeditationRead(models.Model):
    sponsor = models.ForeignKey(Sponsor, on_delete=models.CASCADE)
    meditation = models.ForeignKey(SponsorMessage, on_delete=models.CASCADE)
    read_at = models.DateTimeField(auto_now_add=True)
    reader_session_key = models.CharField(max_length=40)

    class Meta:
        ordering = ['-read_at']

    @property
    def consumer_key(self):
        # return a hash of the reader_session_key
        return hash(self.reader_session_key)

