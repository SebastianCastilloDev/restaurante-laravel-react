# iniciando con laravel

    curl -s "https://laravel.build/example-app" | bash

    cd laravel-restaurant

creando un alias
    nano ~./.zshrc
    alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'

Base de datos
En mysqlworkbench generamos una nueva 
conexionDB_CONNECTION=mysql
    DB_HOST=mysql
    DB_PORT=3306
    DB_DATABASE=laravel_restaurant
    DB_USERNAME=sail
    DB_PASSWORD=password
    FORWARD_DB_PORT=3307 // Este se agrega para dedicar este puerto especialmente a este proyecto

