from django.db import models
from .managers import ProjectRegistrationManager

class Location(models.Model):
    city = models.CharField(max_length=100, db_index=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.city}, {self.state if self.state is not None else ''}, {self.country}'


class ProjectRegistration(models.Model):
    repository_url = models.URLField(unique=True, db_index=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    submission_date = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    image_url = models.URLField(null=True, blank=True)
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True, blank=True, related_name='projects')
    repo_details = models.JSONField(null=True, blank=True) # response from github api containing additional details about the repository like number of stars, forks, etc.
    objects = ProjectRegistrationManager()

    def __str__(self):
        return self.name
    

class ProjectResourceLink(models.Model): # additional links to resources like documentation, demo, etc.
    project = models.ForeignKey(ProjectRegistration, on_delete=models.CASCADE, related_name='resource_links')
    link = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.link
    
