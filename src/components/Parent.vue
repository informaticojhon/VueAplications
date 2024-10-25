<template>
    <div>
      <h2>Texto desde el componente hijo: {{ mensaje }}</h2>
      <Child @enviarTexto="actualizarMensaje"/>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue'; // Importa el componente hijo
  
  export default {
    components: { Child }, // Registra el componente hijo
    data() {
      return {
        mensaje: '', // Inicializa el estado del mensaje
      };
    },
    methods: {
      actualizarMensaje(texto) {
        this.mensaje = texto; // Actualiza el mensaje recibido del componente hijo
      },
    },
  };
  </script>
  