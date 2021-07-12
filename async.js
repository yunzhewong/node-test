const {readFile, writeFile} = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, res)=> {
  if (err){
    console.log(err);
    return
  }

  const first = res;
  readFile('./content/second.txt', 'utf8', (err, res) => {
    if (err) {
      console.log(err);
      return
    }

    const second = res;
    writeFile('./content/result-sync.txt','hello', (err,res) => {
      if (err) {
        console.log(err);
        return
      }

      console.log('end');
    });
  })
})

console.log('starting next task');
