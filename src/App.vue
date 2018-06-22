<template>
  <div id="app" >
    <Header></Header>
    <Nav></Nav>
    <Container>
      <router-view>lllllllll</router-view>
      <!--<div>了了了了</div>-->
    </Container>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/templates/commons/Header.vue'
  import Container from './components/templates/commons/Container.vue'
  import Footer from './components/templates/commons/Footer.vue'
  import  Nav from './components/templates/commons/Nav.vue'
export default {
  name: 'app',
  components: {
    Header,
    Container,
    Footer,
    Nav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>

</style>
