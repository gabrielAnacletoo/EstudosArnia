
from app_cadastro_users import views
from django.urls import path

urlpatterns = [
    # rota, view responsavel, nme de referência
    # Página inicial
    path('', views.home,name='home'),

]
