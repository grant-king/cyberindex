from django.db import models


class Voxel(models.Model):
    color = models.CharField(max_length=6)
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


class PlacementPromise(models.Model):
    # user is holding voxel and plans to place it at a new location
    # used for visually planning where a voxel will be placed, what's around it
    voxel = models.ForeignKey(Voxel, on_delete=models.CASCADE)
    session_key = models.CharField(max_length=64, db_index=True)
    x = models.IntegerField()
    y = models.IntegerField()
    z = models.IntegerField()
    # if voxel is placed and time has passed, it can be collected
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
    x = models.IntegerField()
    y = models.IntegerField()
    z = models.IntegerField()
    edit_plane = models.CharField(max_length=1, default="x")

    @property
    def session_id(self):
        return hash(self.session_key)
