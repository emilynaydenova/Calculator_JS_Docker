FROM node:latest

WORKDIR /app

COPY . .

RUN npm install -g sass

CMD ["sass", "--watch", "styles.scss:styles.css"]