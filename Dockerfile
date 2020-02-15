FROM  httpd:2.4
##RUN env
#WORKDIR /opt/rh/httpd24/root/etc/httpd
#USER root
#RUN chmod -R a+rwx /opt/rh/httpd24/root/etc/httpd/
#COPY conf/httpd.conf /opt/rh/httpd24/root/etc/httpd/conf/httpd.conf
#COPY conf/00-proxy.conf /opt/rh/httpd24/root/etc/httpd/conf.modules.d/00-proxy.conf
##COPY infrastructure/runtime/conf/ssl.conf /opt/rh/httpd24/root/etc/httpd/conf.d/ssl.conf
##COPY infrastructure/runtime/conf/passphrase.sh /opt/rh/httpd24/root/etc/httpd/conf.d/passphrase.sh
#COPY dist/ /opt/rh/httpd24/root/var/www/html/
#RUN chmod -R a+rwx /opt/rh/httpd24/root/etc/httpd/
#USER 1001
COPY dist/talk-frontend /usr/local/apache2/htdocs
EXPOSE 80
#CMD httpd -D FOREGROUND
