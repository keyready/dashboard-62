FROM python:3.10-alpine

MAINTAINER [ VALIKO666 ]

RUN pip install --upgrade pip

ENV APP_DIR=/backend
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV FLASK_APP=server/__init__.py
ENV PORT=9999
ENV DB_URI=postgresql://admin:admin@database:5432/db
ENV SECRET_KEY=qc8BhapYxRGr5gLrX-x2K9bbGXHtmhlgiPhK1PT_w6,EMvTv3n
ENV OPENAI_KEY=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
# ENV OPENAI_KEY=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

RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR
COPY . $APP_DIR
RUN pip install -r requirements.txt

EXPOSE 5000