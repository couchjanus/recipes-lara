<template>
  <div>
    <h1>Vue Router Demo App</h1>

    <p>
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">Hello World</router-link> |
      <router-link :to="{ name: 'users.index' }">Users</router-link>
    </p>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
