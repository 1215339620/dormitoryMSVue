<template>
  <div class="back">
    <div id="app">
    <router-view></router-view>
  </div>
  </div>
</template>

<style scoped>
#app {
  background-image: url("assets/background.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>