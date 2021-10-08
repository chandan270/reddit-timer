import {renderHeatmap} from './renderHeatmap.js'
import {popularPosts} from './popularPosts.js'
import {data} from './data.js'

document.getElementById("content").style.display = "none";        //to use loading sign while the data is loading

var after;
var arr=[];
var arr1,arr2,arr3,arr4,arr5;

function collectData(x){
  return {hour:new Date((x.data.created_utc)*1000).getHours(),
          day:new Date((x.data.created_utc)*1000).getDay(),
          title:x.data.title,
          link:"https://www.reddit.com"+x.data.permalink,
          score:x.data.score,
          comments:x.data.num_comments,
          author:x.data.author
  }
}

var d=[];

for(var i=0;i<24;i++)
{
  for(var j=0;j<7;j++)
  {
    if(j==0)
    d.push({x:i,y:"Mon",heat:0,title:[],link:[],score:[],comments:[],author:[]});
    if(j==1)
    d.push({x:i,y:"Tue",heat:0,title:[],link:[],score:[],comments:[],author:[]});
    if(j==2)
    d.push({x:i,y:"Wed",heat:0,title:[],link:[],score:[],comments:[],author:[]});
    if(j==3)
    d.push({x:i,y:"Thu",heat:0,title:[],link:[],score:[],comments:[],author:[]});
    if(j==4)
    d.push({x:i,y:"Fri",heat:0,title:[],link:[],score:[],comments:[],author:[]});
    if(j==5)
    d.push({x:i,y:"Sat",heat:0,title:[],link:[],score:[],comments:[],author:[]});
    if(j==6)
    d.push({x:i,y:"Sun",heat:0,title:[],link:[],score:[],comments:[],author:[]});
  }
}


var topic=document.getElementById("yy").innerText;


//making call to api 5 times as
//the limit per call is 100 posts
//but the requirement was 500 posts 
axios.get('https://www.reddit.com/r/'+topic+'/top/.json?limit=100&t=year').then(response => {                              
                                                                                                                                   
  after=response.data.data.after;                                                                                                   
  arr1=response.data.data.children.map(collectData);

  axios.get('https://www.reddit.com/r/'+topic+'/top/.json?limit=100&t=year&after='+after).then(response => {
    after=response.data.data.after;
    arr2=response.data.data.children.map(collectData);

    axios.get('https://www.reddit.com/r/'+topic+'/top/.json?limit=100&t=year&after='+after).then(response => {
      after=response.data.data.after;
      arr3=response.data.data.children.map(collectData);

      axios.get('https://www.reddit.com/r/'+topic+'/top/.json?limit=100&t=year&after='+after).then(response => {
        after=response.data.data.after;
        arr4=response.data.data.children.map(collectData);

        axios.get('https://www.reddit.com/r/'+topic+'/top/.json?limit=100&t=year&after='+after).then(response => {
          after=response.data.data.after;
          arr5=response.data.data.children.map(collectData);

          arr = arr.concat(arr1, arr2, arr3,arr4,arr5);

          for(var i=0;i<arr.length;i++)
          {
            data(arr[i],d);                   //retrieving the required data from array
          }

          for(var i=0;i<d.length;i++)
          {
            d[i].x=d[i].x+"h";              //modifying the data
          }

          var dataSet = anychart.data.set(d);

          document.getElementById("content").style.display = "block";   //hiding the loading sign and
          document.getElementById("preload").style.display = "none";    //showing the loaded data
          
          renderHeatmap(dataSet);
          popularPosts(d);
        

          })
        })
      })
  })
})
.catch(err => {
document.getElementsByTagName("body")[0].innerHTML="No such subreddit!"; //in case when user enters invalid subreddit
  console.log(err);
});
