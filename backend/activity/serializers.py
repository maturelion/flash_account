from rest_framework.serializers import ModelSerializer

from .models import Activity

class ActivitySerializer(ModelSerializer):
    class Meta:
        model = Activity
        fields = [
            "id",
            "tx_type",
            "amount",
            "status",
            "description",
            "scope",
            "ref",
            "date"
        ]