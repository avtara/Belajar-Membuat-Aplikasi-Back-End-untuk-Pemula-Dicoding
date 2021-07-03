const fs = require('fs');

const data = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data);

const fileReadCallback = (error,data) => {
    if(error){
        console.log('Gagal membaca Berkas');
        return;
    }
    console.log(data);
};

fs.readFile(`Todo.txt`,'UTF-8',fileReadCallback);