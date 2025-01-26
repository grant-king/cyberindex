"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import routers
from techprojects import views_api as techprojects_views
from frontend_techprojects.views import index as frontend_1_index
from sponsors import views_api as sponsors_views
from django.contrib.auth import views as auth_views
from pixeldance import views_api as dance_views
from cashier import views_api as cashier_views

router = routers.DefaultRouter()
router.register(r'locations', techprojects_views.LocationViewSet)
router.register(r'projectregistrations', techprojects_views.ProjectRegistrationViewSet)
router.register(r'projectresourcelinks', techprojects_views.ProjectResourceLinkViewSet)
router.register(r'sponsors', sponsors_views.SponsorViewSet)
router.register(r'sponsorprofiles', sponsors_views.SponsorProfileViewSet)
router.register(r'sponsormessages', sponsors_views.SponsorMessageViewSet)
router.register(r'sponsorcontributions', sponsors_views.SponsorContributionViewSet)
router.register(r'dancers', dance_views.DancerViewSet)
router.register(r'dancepaths', dance_views.DancePathViewSet)
router.register(r'customers', cashier_views.CustomerViewSet)
router.register(r'meditationreads', sponsors_views.MeditationReadViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api-auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api-auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('apiv1/', include(router.urls)),
    path('', frontend_1_index, name='index'),
    # sponsors accounts
    path('login/', sponsors_views.LoginView.as_view(), name='login'),
    path('logout/', sponsors_views.LogoutView.as_view(), name='logout'),
    path('register/', sponsors_views.RegisterView.as_view(), name='register'),
    path('password_reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    # random meditation
    path('apiv1/meditation/', sponsors_views.SponsorMeditationView.as_view(), name='meditation'),
    path('apiv1/checkout/', cashier_views.CheckoutView.as_view(), name='checkout'),
    path('apiv1/confirm_payment/', cashier_views.ConfirmPaymentView.as_view(), name='confirm_payment'),
]
