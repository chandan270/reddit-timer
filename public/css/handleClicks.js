import {renderTable} from './renderTable.js';

export function handleClicks(chart){
    chart.listen("pointClick", function(e){
      var author = e.point.get("author");
      var comments=e.point.get("comments");
      var link=e.point.get("link");
      var score=e.point.get("score");
      var title=e.point.get("title");
      renderTable(author,comments,link,score,title);
      
  
      });
  }