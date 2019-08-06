<template>
  <div id="app" class="wrapper">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar
    //Navbar
  },
  created() {
    console.log("APP Created");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}
</style>
