from rest_framework import serializers
from startup.models import StartupDetail, StartupTag

class StartupDetailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = StartupDetail
        fields = [
            'name',
            'logo',
            'location',
            'employee_count',
            'founding_date',
            'founders_list_text',
            'summary',
            'website',
            'mail_address',
            'investment_amount',
            ]


class StartupTagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = StartupTag
        fields = ['tag']