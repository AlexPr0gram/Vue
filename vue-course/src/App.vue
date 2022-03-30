<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default ({
  computed: {
    layout() {
      return console.log(this.$route.meta)
    }
  }
})
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
