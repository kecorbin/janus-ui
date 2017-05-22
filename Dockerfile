FROM nginx

COPY ./env_setup.sh /root
RUN chmod +x /root/env_setup.sh


EXPOSE 80

COPY ./dist /usr/share/nginx/html


CMD ["/root/env_setup.sh"]
