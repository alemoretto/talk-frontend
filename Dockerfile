FROM  httpd:2.4
COPY conf/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY dist/talk-frontend /usr/local/apache2/htdocs
RUN chmod 777 -R /usr/local/apache2/logs
EXPOSE 9080


#FROM nginx:1.15
#COPY dist/talk-frontend/ /usr/share/nginx/html
#COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 9080
