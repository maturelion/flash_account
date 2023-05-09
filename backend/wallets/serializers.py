from rest_framework.serializers import ModelSerializer
from .models import Wallet

class WalletSerializer(ModelSerializer):
    class Meta:
        fields = [
            "id",
            "user",
            "balance",
            ]
        model = Wallet
        extra_kwargs = {
            "url": {"view_name": "wallet-detail", "lookup_field": "user__id"}
        }
