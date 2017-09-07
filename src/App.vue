<template>
  <div id="app">
    <router-view name="header"></router-view>
    <b-row>
      <b-col cols="8">
        <div class="container">
          <router-view name="main"></router-view>
        </div>
      </b-col>
      <b-col cols="4">
        <router-view name="sidebar"></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
