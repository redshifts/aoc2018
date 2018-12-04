var fs = require('fs');

fs.readFile('DAY3.txt', 'utf8', function (err, contents) {
    let data = contents.split("\n");
    parse(data)
    compute(X1,X2,Y1,Y2)
});
const fabric = Array(1000).fill(0).map(x => Array(1000).fill(0));
var X1 = [];
var Y1 = [];
var X2 = [];
var Y2 = [];
var ids = [];
parse = function(data){
    
    for (let i = 0; i < data.length; i++) {

        var words = data[i].split(/[@,:x]/)
        var id = words[0];

        var x1 = parseInt(words[1]);
        var y1 = parseInt(words[2]);

        var h = parseInt(words[3]);
        var l = parseInt(words[4]);

        var x2 = x1+h;
        var y2= y1+l;

        ids.push(id);
        X1.push(x1);
        X2.push(x2);
        Y1.push(y1);
        Y2.push(y2);
    }
}
var output=0;
compute = function(a,b,c,d){
   for(let i=0;i<a.length;i++){
       for(let j=c[i];j<d[i];j++){
           for(let k=a[i];k<b[i];k++){
               fabric[k][j]++;
           }
       }
   }
   for(let i=0;i<fabric.length;i++){
       for(let j=0;j<fabric[1].length;j++){
           if(fabric[j][i]>=2){
               output++
           }
       }
   }
   console.log(output)
}