// Dependencies
const { log } = require('console');
const fs = require('fs');
const path = require('path');

// Create a folder Sync
// console.log('creating the test folder...');
// fs.mkdirSync(path.join(__dirname, 'test'));
// console.log('test folder created.');

// Create a folder Async
// fs.mkdir(path.join(__dirname, 'test'), err => {
//   if (err) throw err;
//   console.log('creating the test folder...');
//   console.log('test folder created.');
// });

// Create and write to file Async
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
//   if (err) throw err;
//   console.log('File written to...');

//   fs.appendFile(
//     path.join(__dirname, 'test', 'hello.txt'),
//     ' I love nodejs',
//     err => {
//       if (err) throw err;
//       console.log('File written to...');
//     }
//   );
// });

// Read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
// fs.rename(
//   path.join(__dirname, 'test', 'hello.txt'),
//   path.join(__dirname, 'test', 'helloWorld.txt'),
//   err => {
//     if (err) throw err;
//     console.log('File renamed...');
//   }
// );

fs.mkdir(path.join(__dirname, 'test'), err => {
  if (err) throw err;
  console.log('test folder created...');
  fs.writeFile(
    path.join(__dirname, 'test', 'hello.txt'),
    'Hello World!',
    err => {
      if (err) throw err;
      console.log('File written to...');
      fs.appendFile(
        path.join(__dirname, 'test', 'hello.txt'),
        ' I love Nodejs',
        err => {
          if (err) throw err;
          console.log('File appended...');
          fs.readFile(
            path.join(__dirname, 'test', 'hello.txt'),
            'utf8',
            (err, data) => {
              if (err) throw err;
              console.log(data);
              fs.rename(
                path.join(__dirname, 'test', 'hello.txt'),
                path.join(__dirname, 'test', 'helloWorld.txt'),
                err => {
                  if (err) throw err;
                  console.log('File renamed...');
                }
              );
            }
          );
        }
      );
    }
  );
});
