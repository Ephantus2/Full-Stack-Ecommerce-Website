"""
WSGI config for naivas project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'naivas.settings')

application = get_wsgi_application()

# 👇 Add this after 'application' is defined
try:
    from accounts.create_superuser import create_superuser
    create_superuser()
except Exception as e:
    print(f"Superuser creation failed: {e}")

