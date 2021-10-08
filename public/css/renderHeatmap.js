import { handleClicks } from "./handleClicks.js";
import {customizeHeatmap} from './customizeHeatmap.js';

var chart;
export function renderHeatmap(dataSet)
{
  console.log(dataSet);
  anychart.onDocumentReady(function () {
          
    chart = anychart.heatMap(dataSet);

    customizeHeatmap(chart);
    
    
    chart.container("container");
    
    chart.draw();
    
    handleClicks(chart);

});
}