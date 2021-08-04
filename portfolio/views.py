from django.shortcuts import render
from django.core.mail import send_mail
from . import settings


def profile(request):
    if request.method ==  'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        data={'name':name,
              'email':email,
              'subject':subject,
              'message':message
        }
        msg='''
            New message: {}
            
            
            from: {}
        '''.format(data['message'],data['email'])
        to = [settings.EMAIL_HOST_USER]
        send_mail(data['message'],msg,data['email'],to)
        return render(request,'index.html',{'name':name})
    else:
        return render(request, 'index.html')


# Create your views here.
