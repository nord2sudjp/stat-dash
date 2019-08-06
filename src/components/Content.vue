 <template>
  <div class="content">
    <Navbar />
    <div class="row">
      <div class="col-sm-6">
        <div class="card mb-3">
          <PieChart :data="pieChartData" :options="options"></PieChart>
          <div class="card-body">
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card mb-3">
          <LineChart />
          <div class="card-body">
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card mb-3">
          <JsonLoaderX :targetData="targetData"></JsonLoaderX>
        </div>
      </div>
      <div class="col-sm-12">
        <ul>
          <li>
            <a @click="loadMusic">Music</a>
            <a @click="loadMusic1">Music1</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
import Navbar from "@/components/Navbar";
import LineChart from "@/components/chart/LineChart";
import PieChart from "@/components/chart/PieChart";
import JsonLoaderX from "@/components/data/JsonLoaderX";
export default {
  name: "Content",
  components: {
    Navbar,
    LineChart,
    PieChart,
    JsonLoaderX
  },
  created() {
    //console.log("Created");
  },
  data() {
    return {
      targetData: "music",
      // グラフ描画用データ
      pieChartData: {
        // ラベル
        labels: ["天領", "薩摩", "長州", "土佐"],
        // データ詳細
        datasets: [
          {
            label: "藩と人口",
            data: [13740000, 9072000, 7150000, 6148000],
            backgroundColor: [
              "rgba(255, 100, 130, 0.2)",
              "rgba(100, 130, 255, 0.2)",
              "rgba(130, 255, 100, 0.2)",
              "rgba(230, 210, 85, 0.2)"
            ]
          }
        ]
      },
      // グラフオプション
      options: {
        title: {
          display: true,
          text: "藩と人口"
        }
      }
    };
  },
  methods: {
    loadMusic() {
      console.log("loadmusic");
      this.targetData = "music";
      console.log(this.targetData);
      this.$forceUpdate();
    },
    loadMusic1() {
      console.log("loadmusic1");
      this.targetData = "music1";
      console.log(this.targetData);
      this.$forceUpdate();
    }
  }
};
</script>
 
<style>
</style>
 



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}
</style>


