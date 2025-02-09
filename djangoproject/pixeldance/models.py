from django.db import models

class Dancer(models.Model):
    color = models.CharField(max_length=7, db_index=True)
    session_key = models.CharField(max_length=32, db_index=True, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def session_id(self):
        return hash(self.session_key)

class DancePath(models.Model):
    dancer = models.ForeignKey(Dancer, on_delete=models.CASCADE, related_name='paths')
    start_x = models.PositiveSmallIntegerField(db_index=True)
    start_y = models.PositiveSmallIntegerField(db_index=True)
    end_x = models.PositiveSmallIntegerField(db_index=True)
    end_y = models.PositiveSmallIntegerField(db_index=True)
    delta_x = models.SmallIntegerField(db_index=True)
    delta_y = models.SmallIntegerField(db_index=True)
    event_timestamp = models.PositiveBigIntegerField()
    click_time_delta = models.IntegerField()

