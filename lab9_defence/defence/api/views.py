from django.shortcuts import render
from rest_framework import generics
from .models import Label, Artist
from .serializer import LabelSerializer, ArtistSerializer


# Create your views here.
class LabelList(generics.ListCreateAPIView):
    queryset = Label.objects.all()
    serializer_class = LabelSerializer


class LabelDetail(generics.RetrieveAPIView):
    queryset = Label.objects.all()
    serializer_class = LabelSerializer


class LabelArtistList(generics.ListAPIView):
    serializer_class = ArtistSerializer

    def get_queryset(self):
        label_id = self.kwargs['label_id']
        return Label.objects.filter(label_id=label_id)


class ArtistList(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer


class ArtistDetail(generics.RetrieveAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer


class ArtistTopTen(generics.ListAPIView):
    serializer_class = LabelSerializer

    def get_queryset(self):
        return Artist.objects.order_by('-monthly_income')[:10]
