from django.db import models

from users.models import User

TX_TYPE = [
    ["Debit", "Debit"],
    ["Credit", "Credit"],
]

# DESCRIPTION = [
#     ["bills", "bills"],
#     ["purchase", "purchase"],
#     ["mobile check deposit", "mobile check deposit"],
#     ["ONLINE TRANSFER", "ONLINE TRANSFER"],
# ]
STATUS = [
    ["Completed", "Completed"],
    ["canceled", "canceled"],
    ["pending", "pending"],
    ["failed", "failed"],
]

class Activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_activity")
    tx_type = models.CharField(max_length=50, choices=TX_TYPE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=50, choices=STATUS, default="pending")
    description = models.CharField(max_length=50)
    scope = models.CharField(max_length=50)
    ref = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-date"]