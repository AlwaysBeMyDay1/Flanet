from django.db import models
from users.models import User


class Friends(models.Model):
    user_one = models.ForeignKey(User, related_name="user_one", on_delete=models.CASCADE, blank=False) 
    user_two = models.ForeignKey(User, related_name="user_two", on_delete=models.CASCADE, blank=False)
    created_date = models.DateTimeField(auto_now_add=True, blank=False)
    meeting_count = models.IntegerField(default=1)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user_one','user_two'],  name="unique_friends")
        ]
        ordering = ["-meeting_count"]
