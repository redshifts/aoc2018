"use strict";
var fs = require('fs');

fs.readFile('DAY4.txt', 'utf8', function (err, contents) {
    let data = contents.split("\n");
    parse(data)
    compute(timestamps,messages)
    sort(times,timestamps,messages)

    for(let i=0;i<guards.length;i++){
        guards[i]=0;
        console.log(guards[i])
    }

    for(let i=0;i<times.length;i++){
        console.log(times[i]+" "+timestamps[i]+" "+messages[i])
    }
    sleeptime(times,messages)
    maxsleep(guards)
});
var guards = new Array(3500).fill(0);
let timestamps = []
let times = []
let messages = []

parse = function(data){
    for(let i=0;i<data.length;i++){

        let words = data[i].split(/]/)
        words[0] = words[0].replace("[","")
        words[0] = words[0].replace("-",":")
        words[0] = words[0].replace("-",":")
        words[0] = words[0].replace(" ",":")

        //console.log(words[0]) 
        timestamps.push(words[0])
        words[1] = words[1].replace(" ","")
        //console.log(words[1])
        messages.push(words[1])
    }
}

compute = function(ts,m){
    for(let i=0;i<timestamps.length;i++){
        let t= ts[i].split(/[:]/)
        let year = parseInt(t[0])
        let month = parseInt(t[1])
        let day = parseInt(t[2])
        let hour = parseInt(t[3])
        let min = parseInt(t[4])
        let result = min+60*(hour+24*(day+numberOfDays(month)+365*year))
        times.push(result)
    }
}

numberOfDays = function(i){
   let a=[31,28,31,30,31,30,31,31,30,31,30,31]
   let res=0
   for(let j=0;j<i;j++) {
       res=res+a[j]
   }
   return res
}

sort = function(a,b,c){
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {

                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;

                temp = b[i];
                b[i] = b[i+1];
                b[i+1] = temp;

                temp = c[i];
                c[i] = c[i+1];
                c[i+1] = temp;

                swapped = true;
            }
        }
    }while(swapped);
}

sleeptime = function(ts,m){
    for(let i=0;i<=ts.length;ts++){
        
    }
}



function maxsleep(a){
    let max=0;
    let index=0;
    for(let i=0;i<=a.length;i++){
        if(a[i]>max){
            max=a[i]
            index=i
        }
    }
    console.log(max)
    console.log(index)
    return max
}