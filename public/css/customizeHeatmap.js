export function customizeHeatmap(chart){
    chart.stroke("0");
  
    var customColorScale = anychart.scales.linearColor();          
    customColorScale.colors(["#E0E5A3", "#5AAD8C"]);
    
    chart.colorScale(customColorScale);
    var labels = chart.labels();
    labels.fontColor('#ffffff');
    labels.fontWeight(600);
    labels.fontFamily('Montserrat');                             
  
    var axis = chart.xAxis();
    axis.labels().fontColor('#93918f');
    axis.labels().fontFamily('Montserrat');
    axis.labels().fontWeight('600');
  
    var axis = chart.yAxis();
    axis.labels().fontColor('#93918f');
    axis.labels().fontFamily('Montserrat');
    axis.labels().fontWeight('600');                               
  }