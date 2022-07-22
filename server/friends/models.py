from django.db import models
from users.models import Users


class Friends(models.Model):
    user_one = models.ForeignKey(Users, related_name="following", on_delete=models.CASCADE, blank=False) 
    user_two = models.ForeignKey(Users, related_name="following", on_delete=models.CASCADE, blank=False)
    created_date = models.DateTimeField(auto_now_add=True, blank=False) # 최초 저장 시에만 현재날짜 적용
    meeting_count = models.IntegerField(default=1)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user_one','user_two'],  name="unique_friends")
        ]
        ordering = ["-meeting_count"]

    def __str__(self):
        f"{self.user_one} became friend with {self.user_two}"

