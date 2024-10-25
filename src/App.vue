<template>
  <div id="app">
    <h1>Componente Padre e Hijo</h1>
    <Parent /> <!-- Usa el componente padre en App.vue -->
  </div>
</template>

<script>
import Parent from './components/Parent.vue'; // Importa el componente padre

export default {
  components: {
    Parent,
  },
};
</script>
