<script setup lang="ts">
  import { ref } from 'vue';

  const esRegistro = ref(false);

  const cambiarModo = () => {
    esRegistro.value = !esRegistro.value;
  };
</script>

<template>
  <div class="main-container">
    <div class="item">
      <h2 v-if="esRegistro">Welcome to first time here guy</h2>
      <h2 v-else>Hello everyone to NovelWorld :)</h2>
    </div>

    <form class="item">
      <div class="label">
        <label>Usuario:</label>
        <input type="text" name="user" placeholder="input u user">
      </div><br><br>

      <div class="label">
        <label>Password:</label>
        <input type="password" name="password" placeholder="input u password">
      </div><br>

      <button>Ingresar</button>
    </form>

    <div>
      <p><a href="#" @click.prevent="cambiarModo">{{esRegistro ? 'If you have a account already :DD' : 'If you do not register, ¿what wait it? :,D'}}</a></p>
    </div>
  </div>
</template>

<style scoped>
  
  .main-container{ 
    padding: 4em 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
  }

  .item {
    flex: 1;
  }

  .label {
    display:flex;
    flex-direction:row;
    gap: 10px;
  }

  input {
    radius: rounded;
    border: none;
    background: black;
  }

  input:hover {
    background: #887;
    color:black;
  }

  input:focus {
    border: none;
    outline: none;
    margin: 0;
  }

  button {
    border: none;
    outline: none;
  }

  button:hover {
    background: black;
    color: white;
    outline: none;
    border: none;
  }

  a {
    text-decoration: underline;
    color: #3bb0d1;
    cursor: pointer;
  }

  a:hover {
    color: #1c7894ff;
  }

</style>