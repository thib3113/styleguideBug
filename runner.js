#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const argv = require('yargs').argv;


const docz = spawn(path.resolve(`./node_modules/.bin/docz${process.platform === 'win32' ? '.cmd' : ''}`), ['build'],
    { cwd: path.resolve('.') });

docz.stdout.on('data', (data) => {
    if(data.toString().match(/Your application is running/ig)){
        console.log("builded");
        if(argv.test){
            //if test mode, the test succeed
            process.exit(0);
        }
    }
    if(data.toString().match(/fail/ig)){
        console.error(`docz: ${data}`);
    }
    // console.log(`stdout : ${data}`);
});

docz.stderr.on('data', (data) => {
    console.error(`docz: ${data}`);
});

docz.on('close', (code) => {
    if(code > 0){
        console.error(`docz exited with code ${code}`);
        process.exit(code);
    }
});

//if test, no express
if (!argv.test) {
}