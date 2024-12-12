from django.db import models
from django.utils import timezone

class ProjectRegistrationManager(models.Manager):
    def get_or_update_from_repo(self, repository_url, repo_details=None):
        """
        Get or create a ProjectRegistration instance, updating if it exists.
        
        Args:
            repository_url (str): The GitHub repository URL
            repo_details (dict): Repository details from GitHub API
            
        Returns:
            tuple: (instance, created) where created is boolean
        """
        try:
            instance = self.get(repository_url=repository_url)
            if repo_details:
                # Update with new data
                instance.repo_details = repo_details
                instance.name = repo_details.get('name')
                instance.image_url = repo_details.get('owner', {}).get('avatar_url')
                instance.last_updated = timezone.now()
                instance.save()
            return instance, False
        except self.model.DoesNotExist:
            if not repo_details:
                raise ValueError("repo_details required for new projects")
                
            return self.create(
                repository_url=repository_url,
                repo_details=repo_details,
                name=repo_details.get('name'),
                image_url=repo_details.get('owner', {}).get('avatar_url')
            ), True
