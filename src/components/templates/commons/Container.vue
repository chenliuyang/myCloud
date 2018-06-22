<template>
  <div id="container">
    <section>

      <div id="main">
        <router-view>
        </router-view>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
