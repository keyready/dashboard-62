#!/bin/sh

python3 manage.py create_db
gunicorn --bind 0.0.0.0:5000 manage:app --reload --timeout 3600