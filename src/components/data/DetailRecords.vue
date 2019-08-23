<template>
  <div class="json-loader container">
    <h2 class="h2">{{ this.statType }}</h2>
    <div class="rec">
      <table class="table">
        <tr v-for="rec in dataRecords">
          <th>{{rec.area}}</th>
          <td>{{rec["year"]}}</td>
          <td>{{rec[targetFields]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRecords",

  data() {
    return {
      statType: null,
      targetFile: null,
      keyFields: null,
      targetFields: null,
      dataRecords: null,
      db: {
        面積: { file: "shizen", keys: "area", fields: "menseki" },
        可住面積: { file: "shizen", keys: "area", fields: "kajuu" },
        人口: { file: "jinkou", keys: "area", fields: "jinkou" },
        人口_男: { file: "jinkou", keys: "area", fields: "otoko" },
        人口_女: { file: "jinkou", keys: "area", fields: "onna" }
      }
    };
  },
  props: ["xStatType"],
  watch: {
    xStatType: function(val) {
      this.loadData();
    }
  },
  methods: {
    loadData() {
      console.log("load");
      this.statType = this.xStatType;
      this.targetFile = this.db[this.statType].file;
      this.dataRecords = require("@/assets/" + this.targetFile + ".json");
      this.targetFields = this.db[this.statType].fields;
      this.keyFields = this.db[this.statType].keys;
      var matchData = this.dataRecords.filter(function(item, index) {
        if (item.year == "2015年度") return true;
      });
      this.dataRecords = matchData;
      this.$emit("loaded", {
        keys: this.keyFields,
        fields: this.targetFields,
        data: this.dataRecords
      });
      //obj.onLoad();
    }
  }
};
</script>

<style>
.json-loader li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.rec {
  max-height: 300px;
  overflow: auto;
}
.rec::-webkit-scrollbar {
  width: 10px;
}

.rec::-webkit-scrollbar-track {
  background: #ddd;
}

.rec::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>
