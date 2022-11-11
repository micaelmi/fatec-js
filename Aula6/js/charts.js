// GRÁFICOS =============================================
const createChartButton = document.getElementById("createChart");
const chart = document.getElementById("chart");
let direction = "horizontal"

createChartButton.addEventListener("click", createChart);

function drawChart() {
    var data = readStorage("SalesReport");
        var dataContent = [["Sellers","Value"]];
        for (var item in data) {
             dataContent.push(data[item]);
        }
        
      
      var data = google.visualization.arrayToDataTable(dataContent);
      
        var options = {
          width: (window.screen.width*0.8),
          height : 300,
          
          bars:direction,
          
          chart: {
            title: 'Vendas Totais',
            subtitle: 'Vendas anuais'            
          }
        };
        var local = document.getElementById("showChart");
        var chart = new google.charts.Bar(local);

        chart.draw(data, google.charts.Bar.convertOptions(options));
}

function createChart() {
    console.log("Criando gráfico")
  let selectors = document.querySelector(".radio");
  do {
    if (selectors.checked) {
      direction = selectors.id;
      break;
    }
    selectors = selectors.nextElementSibling;
  } while (selectors);

  google.charts.load("current", { packages: ["bar"] });
  google.charts.setOnLoadCallback(drawChart);
}