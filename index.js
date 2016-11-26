#!/usr/bin/env node
'use strict';

/**
 * Module dependencies
 */
const horloge = require('commander');

const startTimer = function(opts){
  if(opts.break_duration) console.log("Started with --break_duration");
  if(opts.work_duration) console.log("Started with --work_duration");
};

horloge
  .command('start')
  .description('start the Horloge timer.')
  .option('-b, --break_duration <duration>','Time in minutes for break sessions')
  .option('-w, --work_duration <duration>','Time in minutes for work sessions')
  .action(startTimer);

horloge.parse(process.argv);
