FROM ubuntu:latest

RUN apt update
RUN apk add --no-cache jp2a

WORKDIR /app

COPY entrypoint.sh /app/

RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]