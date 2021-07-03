const fs = require('fs');

const writeableStream = fs.createWriteStream('output.txt');

writeableStream.write('Ini merupakan text pertama!\n');
writeableStream.write('Ini merupakan text kedua!\n');
writeableStream.end();