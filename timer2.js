require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Enter 1-9 for timer(or press b to beep!) end: ctrl+c');
process.stdin.on('keypress', (chunk, key) => {
  if (key && key.name === "c" && key.ctrl) {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  if (key.name === 'b') process.stdout.write('\r\x07');
  else {
    if (Number(key.name)) {
      console.log(` => setting timer for ${key.name} seconds...`);
      setTimeout(() => {
        process.stdout.write('\r\x07');
      }, Number(key.name) * 1000);
    } else {
      process.stdout.write('\r');
    }
  }
});