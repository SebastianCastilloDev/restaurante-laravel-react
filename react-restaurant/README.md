# Descripción del proyecto:

Este proyecto consiste en el desarrollo del frontend de una aplicación web con ReactJS en el frontend y Laravel en el backend.

## Configurando React

En consola escribimos las siguientes instrucciones para instalar react con vite y seguimos las instrucciones del instalador. Como lenguaje de programacion, debemos escoger Javascript.

```
npm create vite@latest 
cd react-restaurant
npm install
npm run dev
```



## Instalando tailwind
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

en el archivo tailwind.config.js agregamos en el content
```json
content: [
  "./index.html", // aplicar clases de tailwind al index.html de la raiz del proyecto
  "./src/**/*.{js,jsx}" // es un glob pattern para aplicar clases de tailwind a todos los archivos de todas las carpetas dentro de src con extension js y jsx.
]
```

## Instalando react router dom

```
npm install react-router-dom
```

Para agregar la funcionalidad de tener una seccion independiente de main que permita construir un resumen del pedido, utilizaremos Outlet:

https://reactrouter.com/en/main/components/outlet 

