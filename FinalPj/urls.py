"""
URL configuration for FinalPj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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
from django.urls import path
from organicshop import views
from django.contri.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('about/', views.about, name='about'),
    path('home/', views.home, name='home'),
    path('acc/', views.acc, name='acc'),
    path('accountwishlist/', views.accountwishlist, name='accountwishlist'),
    path('bloglist/', views.bloglist, name='bloglist'),
    path('checkout/', views.checkout, name='checkout'),
    path('chitietsanpham/', views.chitietsanpham, name='chitietsanpham'),
    path('contact/', views.contact, name='contact'),
    path('editacc/', views.editacc, name='editacc'),
    path('login/', views.login, name='login'),
    path('mycart/', views.mycart, name='mycart'),
    path('orderdetails/', views.orderdetails, name='orderdetails'),
    path('orderhistory/', views.orderhistory, name='orderhistory'),
    path('shop/', views.shop, name='shop'),
    path('signup/', views.signup, name='signup'),
    path('singleblog/', views.singleblog, name='singleblog'),
    path('sodiachi/', views.sodiachi, name='sodiachi'),
    path('wishlist/', views.wishlist, name='wishlist'),    
]

urlpatterns += staticfiles_urlpatterns()