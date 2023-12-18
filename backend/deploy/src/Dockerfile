FROM python:3.10-alpine

MAINTAINER [ VALIKO666 ]

RUN pip install --upgrade pip

ENV APP_DIR=/backend
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV FLASK_APP=server/__init__.py
ENV APP_FOLDER_DATA=/backend/server/static
ENV DB_URI=postgresql://admin:admin@database:5432/db
ENV SECRET_KEY=qc8BhapYxRGr5gLrX-x2K9bbGXHtmhlgiPhK1PT_w6,EMvTv3n
ENV GIGACHAT_API=NDg0YTFmMzQtNDJjMS00ZGQ1LTkwYzAtMjUwYzgyMmYzYWViOmRlYWViYzE0LTJmN2MtNDRiYy05MWUwLTdlNjUzMjhkMmQ5OQ==

RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR
COPY . $APP_DIR
RUN chmod +x entrypoint.sh
RUN pip install -r requirements.txt