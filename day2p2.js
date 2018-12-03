var fs = require('fs');

fs.readFile('DAY2.txt', 'utf8', function (err, contents) {
    var data = contents.split("\n");
    console.log(data[0]);

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            var diff = 0;
            for (let k = 0; k < data[i].length; k++){
                if(data[i][k] !== data[j][k]){
                    diff++;
                }
            }
            if(diff===1){
                console.log(diff)
                console.log(data[i])
                console.log(data[j])
            }
        }
        
    }
});