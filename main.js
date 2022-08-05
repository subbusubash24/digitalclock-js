function startTime(){
var time=new Date();
let h=time.getHours();
let m=time.getMinutes();
let s=time.getSeconds();
let d=time.getDay();
let mn=time.getMonth()+1;
let y=time.getFullYear();
var hour=document.getElementById("hour");
 hour.innerText=h;
 console.log(hour);
 var minute=document.getElementById("minute");
 minute.innerText=m;
 console.log(minute);
 var second=document.getElementById("second");
 second.innerText=s;
 console.log(second);
 var day=document.getElementById("day");
 day.innerText=d;
 console.log(day);
 var month=document.getElementById("month");
 month.innerText=mn;
 console.log(month);
 var year=document.getElementById("year");
 year.innerText=y;
 console.log(year);






 setTimeout(startTime, 1000);
}
startTime()