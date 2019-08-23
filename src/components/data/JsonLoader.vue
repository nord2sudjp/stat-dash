<template>
  <div class="json-loader container">
    <h2>Json Loader {{ this.targetData }}</h2>
    <ul class="recs list-group">
      <li v-for="rec in dataRecords" class="list-group-item">
        <div>{{rec.album}}</div>
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
