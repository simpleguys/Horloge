#!/usr/bin/env node

/**
 * Module dependencies
 */
const horloge = require('commander');

const startTimer = function (opts) {
  if (opts.breakDuration) {
    console.log('Started with --break_duration %s', opts.breakDuration);
  }
  if (opts.workDuration) {
    console.log('Started with --work_duration %s', opts.workDuration);
  }
};

horloge
  .command('start')
  .description('start the Horloge timer.')
  .option('-b, --break-duration <duration>', 'Time in minutes for break sessions')
  .option('-w, --work-duration <duration>', 'Time in minutes for work sessions')
  .action(startTimer);

horloge.parse(process.argv);
