function dayToNum(day)
{
  if(day=="Mon")
  return 0;
  if(day=="Tue")
  return 1;
  if(day=="Wed")
  return 2;
  if(day=="Thu")
  return 3;
  if(day=="Fri")
  return 4;
  if(day=="Sat")
  return 5;
  if(day=="Sun")
  return 6;

}

export function data(element,d){
    
  for(var i=0;i<168;i++)
  {
    if(d[i].x==element.hour&&dayToNum(d[i].y)==element.day)
    {
        d[i].heat++;
        d[i].title.push(element.title);
        d[i].link.push(element.link);
        d[i].score.push(element.score);
        d[i].comments.push(element.comments);
        d[i].author.push(element.author);
    }
  }
}
