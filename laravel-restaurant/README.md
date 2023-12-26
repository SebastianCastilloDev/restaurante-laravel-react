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


acceso a la base de datos desde la terminal
mysql -u sail -p -h 127.0.0.1 -P 3307

Modelo Categoria
```
sail artisan make:model Categoria --migration --controller
```

en el archivo de la migracion agregaremos dos campos: nombre e icono
```php
Schema::create('categorias', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('icono');
            $table->timestamps();
        });
```

Finalmente ejecutamos 
```
sail artisan migrate
```

Seeder
sail artisan make:seeder CategoriaSeeder

 sail artisan db:seed 

sail artisan make:resource CategoriaCollection
sail artisan make:resource CategoriaResource  
sail artisan make:model Producto --resource --api --migration

sail artisan make:controller AuthController
sail artisan make:request RegistroRequest



para listar las rutas de la aplicacion
sail artisan route:list

sail artisan make:request LoginRequest

sail artisan make:model Pedido --migration --api --resource
sail artisan migrate

sail artisan make:model PedidoProducto --migration
sail artisan migrate

sail artisan make:migration add_admin_column_to_users_table
sail artisan migrate

sail artisan make:resource PedidoCollection
