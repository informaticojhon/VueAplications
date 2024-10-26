## Proyecto de Desarrollo de Aplicaciones Front-End con Vue.js

El objetivo de este desafío es crear una aplicación front-end usando el framework Vue.js. Durante este proyecto, se espera aplicar conocimientos fundamentales de desarrollo web y las características principales de Vue, como la gestión de estado con Vuex, el enrutamiento con Vue Router, la realización de pruebas unitarias con Jest y el despliegue en Firebase Hosting.

Este proyecto está diseñado para simular un flujo de desarrollo real, desde la creación de componentes hasta el despliegue de la aplicación, asegurando un enfoque práctico y completo para la creación de aplicaciones web modernas.

## Estructura del Proyecto

La aplicación se organiza en varias carpetas principales:

### src/components/: Contiene componentes reutilizables de la aplicación, como TheWelcome.vue.
### src/views/: Contiene vistas que representan páginas completas, como HomeView.vue y AboutView.vue.
### src/store/: Gestiona el estado global de la aplicación usando Vuex.
### src/router/: Configuración de las rutas de la aplicación con Vue Router.
### public/: Archivos estáticos y el archivo index.html donde Vue monta la aplicación.

## Funcionalidades

🔄Gestión de Estado con Vuex:
Implementación de un contador en el estado global que puede incrementarse o decrementarse.
Pruebas unitarias para verificar que el estado inicial del contador y su funcionalidad se gestionan correctamente.

🧭Navegación con Vue Router:
Configuración de rutas para navegar entre diferentes vistas de la aplicación.
Pruebas unitarias para asegurar la existencia de componentes de control de cada vista.

🛠️Comunicación entre Componentes:
Uso de dos componentes (Parent.vue y Child.vue) donde el componente hijo envía un mensaje al componente padre.
Pruebas unitarias para verificar la funcionalidad de comunicación entre componentes.

🚀Despliegue con Firebase Hosting:
Generación de un build de producción y despliegue en Firebase Hosting, permitiendo el acceso público a la aplicación.

## Requisitos Previos

🖥️ Node.js y npm instalados.
🌐Vue CLI instalado globalmente para crear y gestionar el proyecto Vue.
🌍 Firebase CLI instalado para desplegar en Firebase Hosting.

## Tecnologías Utilizadas
Vue.js 3: Framework de JavaScript para construir interfaces de usuario.
Vuex: Librería para la gestión del estado global en aplicaciones Vue.
Vue Router: Sistema de enrutamiento para manejar las vistas y navegación en la aplicación.
Jest: Framework de pruebas unitarias para JavaScript.
Firebase Hosting: Servicio para alojar aplicaciones web de Firebase.



