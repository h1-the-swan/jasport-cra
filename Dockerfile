FROM node:16.4.0

# Setup a spot for our code
WORKDIR /usr/local/src/app/ui

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy in the source code
COPY . .

# This tells build scripts and libraries that we're in development, so they
# can include stuff that's helpful for debugging even if it's a tad slower.
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# Build the UI
RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]