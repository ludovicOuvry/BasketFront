FROM node

WORKDIR /app

COPY . /app

RUN npm install
RUN npm install -g @angular/cli@1.7.1

CMD yarn && ng serve --host=0.0.0.0
