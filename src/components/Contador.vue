<template>
    <div>
      <h2>Contador: {{ contador }}</h2>
      <button @click="incrementar">Incrementar</button>
      <button @click="decrementar">Decrementar</button>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['contador']),
    },
    methods: {
      ...mapActions(['incrementar', 'decrementar']),
    }
  };
  </script>
  