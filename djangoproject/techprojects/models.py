from django.db import models
from django.contrib.auth.models import User


class ProjectUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.URLField(null=True, blank=True)
    github_user_url = models.URLField(null=True, blank=True)
    personal_website_url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.user.username


class Location(models.Model):
    city = models.CharField(max_length=100, db_index=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.city}, {self.state if self.state is not None else ''}, {self.country}'


class ProjectRegistration(models.Model):
    name = models.CharField(max_length=100)
    submitted_by = models.ForeignKey(ProjectUser, on_delete=models.CASCADE, related_name='projects')
    submission_date = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    image_url = models.URLField(null=True, blank=True)
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True, blank=True, related_name='projects')
    repository_url = models.URLField(null=True, blank=True) # provides endpoint for readme, license, and code which may be fetched and rendered in the frontend

    def __str__(self):
        return self.name
    

class ProjectResourceLink(models.Model): # additional links to resources like documentation, demo, etc.
    project = models.ForeignKey(ProjectRegistration, on_delete=models.CASCADE, related_name='resource_links')
    link = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.link
    
