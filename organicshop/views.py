from django.shortcuts import render

from django.http import HttpResponse

def home(request):    
    return render(request, 'homepage.html')

def about(request):    
    return render(request, 'about.html')

def acc(request):
    return render(request, 'acc.html')

def accountwishlist(request):
    return render(request, 'accountwishlist.html')

def bloglist(request):
    return render(request, 'bloglist.html')

def checkout(request):
    return render(request, 'checkout.html')

def chitietsanpham(request):
    return render(request, 'chitietsanpham.html')

def contact(request):
    return render(request, 'contact.html')

def editacc(request):
    return render(request, 'editacc.html')

def login(request):
    return render(request, 'login.html')

def mycart(request):
    return render(request, 'mycart.html')

def orderdetails(request):
    return render(request, 'orderdetail.html')

def orderhistory(request):
    return render(request, 'orderhistory.html')

def shop(request):
    return render(request, 'shop.html')

def signup(request):
    return render(request, 'signup.html')

def singleblog(request):
    return render(request, 'single-blog.html')

def sodiachi(request):
    return render(request, 'sodiachi.html')

def wishlist(request):
    return render(request, 'wishlist.html')

# Create your views here.
