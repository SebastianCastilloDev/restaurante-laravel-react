# configuracion react, tailwind y react-router-dom

npm create vite@latest 
 cd react-restaurant
  npm install
  npm run dev

instalando tailwind
 
 npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p

 en el archivo tailwind.config.js agregamos en el content

  content: [
    "./index.html", // aplicar clases de tailwind al index.html de la raiz del proyecto
    "./src/**/*.{js,jsx}" // es un glob pattern para aplicar clases de tailwind a todos los archivos de todas las carpetas dentro de src con extension js y jsx.
  ]

instalando react router dom

npm install react-router-dom

tecnicas utilizadas
https://reactrouter.com/en/main/components/outlet 

