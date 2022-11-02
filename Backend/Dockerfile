FROM python:3.7.4

COPY . /app

WORKDIR /app

RUN pip install -r requirements.txt

ENTRYPOINT ["python"]

CMD ["app.py"]

# ENTRYPOINT [ "flask" ]

# CMD ["run", "--host", "0.0.0.0"]
# docker build -t backend/test .
# docker run -p 5000:5000 backend/test