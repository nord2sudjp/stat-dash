<template>
  <div class="json-loader container">
    <h2>Json Loader {{ this.targetData }}</h2>
    <ul class="musics list-group">
      <li v-for="music in dataRecords" class="list-group-item">
        <div>{{music.album}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
//import musics from "@/assets/musics.json";
import axios from "axios";
export default {
  name: "JsonLoader",
  data() {
    return {
      dataRecords: null
    };
  },

  created() {
    //this.targetData = require("@/assets/music.json");

    // axios
    // .get("/assets/music.json")
    // .then(response => {
    //   this.musics = response.data;
    // })
    // .catch(error => {
    //   console.log(error);
    // });

    this.targetData = this.$route.params.targetData;
    console.log("this", this.$route.params.targetData);

    this.dataRecords = require("@/assets/" + this.targetData + ".json");
    console.log("this", this.dataRecords);
  }
};
</script>

<style>
.json-loader li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
