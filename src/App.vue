<template>
  <div id="app">
    <ScrollProvider>
      <Layout>
        <router-view></router-view>
      </Layout>
    </ScrollProvider>
  </div>
</template>

<script>

import Layout from "@/components/Layout";
import ScrollProvider from "@/components/Provider";

export default {
  name: 'App',
  components: {
    ScrollProvider,
    Layout,
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
