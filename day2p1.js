var fs= require('fs');

fs.readFile('DAY2.txt', 'utf8', function(err, contents) {
    var data = contents.split("\n");
    console.log(data[0]);
    var two=0;
    var three=0;
    
    for(let i=0;i<data.length;i++){
        let inc2=false;
        let inc3=false;
        for(let j=0;j<data[i].length;j++){
            let character= data[i][j];
            let number=0;
            for(let k=0;k<data[i].length;k++){
                if(data[i][k]===character){
                    number++;
                }
            }
            console.log(number);
            if((number===2)&&(inc2===false)){
                two++;
                inc2=true;
            }
            if((number===3)&&(inc3===false)){
                three++;
                inc3=true;
            }
    }
    console.log('*');
    console.log(two*three);
}
});

