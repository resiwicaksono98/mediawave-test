import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline"
  },
  title: {
    text: "Jakarta Covid-19 2024",
    align: "left"
  },
  subtitle: {
    text: "Covid-19 Cases by Sub District",
    align: "left"
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    accessibility: {
      description: "Months of the year"
    }
  },
  yAxis: {
    title: {
      text: "Penduduk Terkena COVID-19"
    },
    labels: {
      format: "{value}"
    }
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: "#666666",
        lineWidth: 1
      }
    }
  },
  series: [
    {
      name: "Jakarta",
      marker: {
        symbol: "square"
      },
      data: [150, 240, 100, 88, 102, 40, 51, 89]
    }
  ]
};

export default function HighCart() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
