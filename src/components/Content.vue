 <template>
  <div class="content">
    <Navbar />
    <div class="row">
      <div class="col-sm-12 mb-3 p-2 bg-primary text-white">
        <h2>{{this.statType}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card mb-3">
          <PieChart :data="pieChartData" :options="options" refs="pie"></PieChart>
          <div class="card-body">
            <p class="card-text"></p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card mb-3">
          <BarChart :data="barChartData" :options="options" refs="bar"></BarChart>
          <div class="card-body">
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card mb-3">
          <DetailRecords :xStatType="statType" ref="recs" @loaded="onLoaded"></DetailRecords>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import Navbar from "@/components/Navbar";
import LineChart from "@/components/chart/LineChart";
import PieChart from "@/components/chart/PieChart";
import BarChart from "@/components/chart/BarChart";

import DetailRecords from "@/components/data/DetailRecords";
import * as palette from "google-palette";

export default {
  name: "Content",
  components: {
    Navbar,
    LineChart,
    PieChart,
    BarChart,
    DetailRecords
  },
  data() {
    return {
      /* Data */
      statType: null,
      db: null,
      dbKeys: null,
      dbFields: null,
      dbRecords: null,
      chartLabel: null,
      chartData: null,

      targetData: null,
      /* グラフ描画用データ */
      // Line Chart
      labelsChart: null,
      dataChart: null,
      // Pie Chart
      pieChartData: null,
      barChartData: null,

      // グラフオプション
      options: {
        title: {
          display: true,
          text: ""
        }
      }
    };
  },
  methods: {
    onLoad() {
      console.log("onload");
      this.labelsChart = this.$refs.recs.dataRecords["area"];
      this.dataChart = this.$refs.recs.dataRecords["menseki"];
    },
    onLoaded(db) {
      console.log("onloaded");
      this.db = db;
      this.dbKeys = db["keys"];
      this.dbFields = db["fields"];
      this.dbRecords = db["data"];
      this.chartLabel = [];
      this.chartData = [];
      this.dbRecords.forEach(elm => {
        this.chartLabel.push(elm[this.dbKeys]);
        this.chartData.push(elm[this.dbFields]);
      });

      this.updChart();
      this.updPiechart();
      this.updBarchart();
    },

    updPiechart() {
      let datasets = [
        {
          label: this.statType,
          data: this.chartData,
          backgroundColor: palette("mpn65", this.chartLabel.length).map(
            function(hex) {
              return "#" + hex;
            }
          )
        }
      ];

      this.pieChartData = { labels: this.chartLabel, datasets: datasets };
    },
    updBarchart() {
      let datasets = [
        {
          label: this.statType,
          data: this.chartData,
          backgroundColor: palette("mpn65", this.chartLabel.length).map(
            function(hex) {
              return "#" + hex;
            }
          )
        }
      ];

      this.barChartData = { labels: this.chartLabel, datasets: datasets };
    },
    updChart() {
      let options = {
        title: {
          display: false,
          text: this.statType
        }
      };
      this.options = options;
    }
  },
  created() {
    console.log("Created");
  },
  mounted() {
    console.log("Mounted");
  },
  // 追記
  beforeRouteUpdate(to, from, next) {
    // update - data section
    this.statType = to.params.statType;
    this.$refs.recs.statType = this.statType;
    next();
  }
};
</script>
 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}
</style>


