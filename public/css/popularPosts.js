export function popularPosts(d){
    var max=0;
    var maxdata=[];
    
    for(var i=0;i<d.length;i++)
    {
      if(max<d[i].heat)
      {
        max=d[i].heat;
        maxdata=[];
      }
      if(max==d[i].heat)
      {
        maxdata.push({x:d[i].x,y:d[i].y});
      }
    }
  
    
    for(var i=0;i<maxdata.length;i++)
    {
      var para = document.createElement("P");
      para.innerText = maxdata[i].x+" "+maxdata[i].y;
      document.getElementById("time").appendChild(para);
    }
  }