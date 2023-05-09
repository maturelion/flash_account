from rest_framework.viewsets import ModelViewSet
from .models import Wallet
from .serializers import WalletSerializer

class WalletViewSet(ModelViewSet):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer
    lookup_field = "user__id"