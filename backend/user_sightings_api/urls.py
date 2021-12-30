from user_sightings_api.views import SightingViewSet
from rest_framework.routers import DefaultRouter
from user_sightings_api import views

router = DefaultRouter()
router.register(r'sightings', views.SightingViewSet, basename='sighting')
urlpatterns = router.urls
