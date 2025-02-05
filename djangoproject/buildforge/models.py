from django.db import models


class Voxel(models.Model):
    color = models.CharField(max_length=6, blank=True)
    x = models.IntegerField(db_index=True)
    y = models.IntegerField(db_index=True)
    z = models.IntegerField(db_index=True)


class Claim(models.Model):
    voxel = models.ForeignKey(Voxel, on_delete=models.CASCADE)
    session_key = models.CharField(max_length=64, db_index=True)
    # if voxel was claimed within some time frame, it can't be collected again
    timestamp = models.DateTimeField(auto_now_add=True)
    # if voxel is in holding state, it can't be claimed by another user
    is_holding = models.BooleanField(default=False, db_index=True)

    @property
    def session_id(self):
        return hash(self.session_key)
    
    class Meta:
        ordering = ["-timestamp"]


class PlacementPromise(models.Model):
    # user is holding voxel and plans to place it at a new location
    # used for visually planning where a voxel will be placed, what's around it
    voxel = models.ForeignKey(Voxel, on_delete=models.CASCADE)
    session_key = models.CharField(max_length=64, db_index=True)
    # starts relative, then converted to world coordinates using builder location when placed
    x = models.IntegerField()
    y = models.IntegerField()
    z = models.IntegerField(default=0)
    # if voxel is placed it is in world. If time has passed since claim, it can be collected
    is_placed = models.BooleanField(default=False, db_index=True)

    @property
    def session_id(self):
        return hash(self.session_key)


class Builder(models.Model):
    # special voxel that represent's player's avatar
    # for determining neighboring voxels for rendering, 3d camera spawn point
    # and for setting a world location for placing voxels
    # will select the current editing plane for the 2d placement promise UI
    # for persisting the user's current location in the world
    session_key = models.CharField(max_length=64, db_index=True)
    x = models.IntegerField(default=0)
    y = models.IntegerField(default=0)
    z = models.IntegerField(default=0)
    edit_plane = models.CharField(max_length=2, default="xy")

    @property
    def session_id(self):
        return hash(self.session_key)

