export function renderTable(author,comments,link,score,title){
    var div = document.getElementById("tables");
      div.innerHTML = "";

      // create elements <table> and a <tbody>
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");


      var row = document.createElement("tr");
      var cell = document.createElement("th");
      var cellText = document.createTextNode("Title");
  
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("th");
      var cellText = document.createTextNode("Score");
  
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("th");
      var cellText = document.createTextNode("Comments");
  
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("th");
      var cellText = document.createTextNode("Author");
  
      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);

      for (var j = 0; j < author.length; j++) {
        // table row creation
        var row = document.createElement("tr");
  
        var l = document.createElement('a');
        l.setAttribute('href',link[j]);
        l.setAttribute('target',"_blank");
        if(title[j].length>=50)
        var name=title[j].substring(0,50)+"...";
        else
        name=title[j];
        var linkText = document.createTextNode(name);
        l.appendChild(linkText);
        var cell = document.createElement("td");
        cell.appendChild(l);
  
        row.appendChild(cell);
  
        var cell = document.createElement("td");
        var cellText = document.createTextNode(score[j]);
  
        cell.appendChild(cellText);
        row.appendChild(cell);
  
        var cell = document.createElement("td");
        var cellText = document.createTextNode(comments[j]);
  
        cell.appendChild(cellText);
        row.appendChild(cell);
  
        var l = document.createElement('a');
        l.setAttribute('href','https://www.reddit.com/user/'+author[j]+'/');
        l.setAttribute('target',"_blank");
        
        if(author[j].length>=11)
        var name=author[j].substring(0,12)+"...";
        else
        name=author[j];

        var linkText = document.createTextNode(name);
        l.appendChild(linkText);
        var cell = document.createElement("td");
        cell.appendChild(l);
  
        row.appendChild(cell);
  
        //row added to end of table body
        tblBody.appendChild(row);
      }
  
      // append the <tbody> inside the <table>
      tbl.appendChild(tblBody);
      // put <table> in the <body>
      div.appendChild(tbl);
  }