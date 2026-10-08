const {readFile, writeFile} = require('fs');

readFile('./content/otherfolder/1.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result)
})    