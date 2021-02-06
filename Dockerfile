
# Stage 1
# base image
FROM node:12.18-alpine as build-step

# create & set working directory
RUN mkdir -p /app/build
WORKDIR /app

# copy package.json
COPY package.json /app

# install dependencies
RUN npm install --quiet

# copy source files
COPY . /app

# start app
RUN npm run build --quiet



# Stage 2
# Create nginx server and deploy our app
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html

