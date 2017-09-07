<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div class="container">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
