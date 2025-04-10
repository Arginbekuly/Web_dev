from django.urls import path
from .views import *

urlpatterns = [
    path('labels/', LabelList.as_view(), name='labels'),
    path('labels/<int:id>', LabelDetail.as_view(), name='label_details'),
    path('labels/<int:id>/artists', LabelArtistList.as_view(), name='label_list'),
    path('artists/', ArtistList.as_view(), name='artists'),
    path('artists/<int:id>', ArtistDetail.as_view(), name='artist_details'),
    path('artists/top_ten', ArtistTopTen.as_view(), name='TopTenArtists')
]
