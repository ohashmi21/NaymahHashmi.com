<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="nav-header">
      <h1>Naymah Admin Site</h1>
    </div>
    <ul>
      <li>
        <RouterLink to="/projects"><a class="active" href="#home">Projects</a></RouterLink>
      </li>
      <li>
        <RouterLink to="/about"><a href="#news">About</a></RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

.nav-header {
  background-color: #333;
  text-align: center;
  padding: 0;
  color: white;
  font-size: 1em;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

li {
  margin: 0 10px;
}

li a {
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;

}

li a:hover {
  background-color: #111;
}
</style>
