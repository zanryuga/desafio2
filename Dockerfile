FROM node
RUN npm install -g @nestjs/cli 
USER node
WORKDIR /home/node/app
