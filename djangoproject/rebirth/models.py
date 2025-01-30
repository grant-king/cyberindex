from django.db import models


class Avatar(models.Model):
    session_key = models.CharField(max_length=40, db_index=True)
    public_image = models.ImageField(upload_to="avatars/")
    original_hash = models.CharField(max_length=40, null=True)
    public_hash = models.CharField(max_length=40, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def session_id(self):
        return hash(self.session_key)
