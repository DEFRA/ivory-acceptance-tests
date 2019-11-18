FROM node:8.11.0
WORKDIR /usr/src
# Install Python.
RUN \
  apt-get update && \
  apt-get install -y python python-dev python-pip python-virtualenv && \
  rm -rf /var/lib/apt/lists/*

# Install Zap Cli
RUN pip install --upgrade zapcli

COPY package*.json ./
RUN npm install --g yarn
RUN rm -f /usr/local/bin/yarn && \
  curl -o- -L https://yarnpkg.com/install.sh | bash && \
  chmod +x ~/.yarn/bin/yarn && \
  ln -s ~/.yarn/bin/yarn /usr/local/bin/yarn
RUN yarn install
COPY . ./
#RUN yarn build


#COPY package.json /tmp
#COPY yarn.lock /tmp
#RUN cd /tmp && yarn install
# Create app directory
#WORKDIR /usr/src/app

#RUN cp -a node_modules /usr/src/app/
#
#COPY . /usr/src/app
RUN chmod +x ZAPtest.sh

CMD [ "./ZAPtest.sh" ]
