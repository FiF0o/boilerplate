FROM phusion/passenger-customizable
#####################################################
# Installing node and ruby deps within pulled layer #
#####################################################

# HOME var required for shell scripts below
ENV HOME /root
RUN /pd_build/ruby-2.3.3.sh
RUN /pd_build/nodejs.sh
# Needs python, C deps running on alpine... sharp, python, gcc, node-gyp

ENV WORKSPACE /website
#ADD . $WORKSPACE
COPY . $WORKSPACE

WORKDIR $WORKSPACE

# TODO Have another container managing the deps
RUN npm run deps:ruby && npm i

# TODO Have another container for the web server


# use docker-compose.yml
CMD npm run start