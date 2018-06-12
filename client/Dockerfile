FROM node
ENV APP_PATH /client/
RUN mkdir $APP_PATH
WORKDIR $APP_PATH
RUN mkdir /scripts/
ADD scripts/ $APP_PATH/scripts/
RUN chmod +x $APP_PATH/scripts/*.sh
ENTRYPOINT $APP_PATH/scripts/docker-entrypoint.sh
