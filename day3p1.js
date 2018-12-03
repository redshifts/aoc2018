var fs= require('fs');

fs.readFile('DAY3.txt', 'utf8', function (err, contents) {
    var data = contents.split("\n");
    console.log(data[0]);

    
});