<template>
    <div>
      <input v-model="texto" placeholder="Escribe algo" />
      <button @click="enviarTexto">Enviar Texto</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        texto: '', // Inicializa el texto vacío
      };
    },
    methods: {
      enviarTexto() {
        this.$emit('enviarTexto', this.texto); // Emite el texto al componente padre
      },
    },
  };
  </script>
  