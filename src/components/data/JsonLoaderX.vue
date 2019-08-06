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
export default {
  name: "JsonLoaderX",

  data() {
    return {
      dataRecords: null
    };
  },
  props: ["targetData"],

  created() {
    console.log("this", this.targetData);

    this.dataRecords = require("@/assets/" + this.targetData + ".json");
    console.log("this", this.dataRecords);
  },
  watch: {
    targetData: function(val) {
      console.log("watch");
      this.dataRecords = require("@/assets/" + this.targetData + ".json");

      this.$forceUpdate();
    }
  }
};
</script>

<style>
.json-loader li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
