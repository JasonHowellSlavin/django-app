from django.db import models

# Create your models here.
class Poem(models.Model):
    author_title = models.CharField(max_length=400)
    poem_content = models.TextField()

    def __str__(self):
            return self.author_title