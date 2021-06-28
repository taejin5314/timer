const args = process.argv.slice(2);

for (const elm of args) {
  if (!isNaN(Number(elm)) && Number(elm) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * Number(elm));
  }
}