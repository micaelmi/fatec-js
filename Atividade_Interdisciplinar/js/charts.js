const local = document.getElementById("charts");
let direction = "horizontal"


function drawChart() {
  var data = readStorage("covidData");
  var dataContent = [["Cod", "Ocupação", "Quantidade de Casos"]];
  for (var item in data) {
    dataContent.push(data[item]);
  }
  for (var item in dataContent) {
    dataContent[item].shift();
    if (item > 0) {
      dataContent[item][1] = +dataContent[item][1]
    }
  }


  console.log("Data Content")
  console.log(dataContent[0])
  console.log(dataContent[1])
  console.log(dataContent[2])


  var data = google.visualization.arrayToDataTable(dataContent);

  var options = {
    width: (window.screen.width * 0.8),
    height: 900,

    bars: direction,

    chart: {
      title: 'Total de Casos por profissão da saúde',
      subtitle: 'Quantidade de profissionais infectados no Brasil'
    }
  };
  var chart = new google.charts.Bar(local);

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function createChart() {
  console.log("Criando gráfico")

  google.charts.load("current", { packages: ["bar"] });
  google.charts.setOnLoadCallback(drawChart);
}