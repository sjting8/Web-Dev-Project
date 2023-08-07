from django.urls import path
from api.views.demo import DemoView

urlpatterns = [
    path('demo/', DemoView.as_view()),
]