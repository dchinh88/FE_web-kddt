<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header-page />
    <content-page />
    <footer-page />
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ContentPage from '../components/ContentPage.vue'
import FooterPage from '../components/FooterPage.vue'
import HeaderPage from '../components/HeaderPage.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    ContentPage,
    HeaderPage,
    FooterPage
  }
}
</script>
