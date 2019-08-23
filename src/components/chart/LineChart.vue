<script>
import { Line } from "vue-chartjs";

export default {
  name: "LineChart",
  extends: Line,
  props: ["xLabels", "xData"],
  data() {
    return {
      chartData: {
        labels: this.xLabels,
        datasets: [
          {
            label: "sample",
            borderColor: "#0000ff",
            data: this.xData,
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Line chart"
        },
        legend: {
          display: false
        }
      }
    };
  },
  mounted: function() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    labelsChart: function(val) {
      this.renderChart(this.chartData, this.options);
    }
  }
};
</script>