#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};
// Text + chalk definitions
const data = {
  'name': chalk.white('Zhenzhen Xu /'),
  'handle': chalk.cyan('bugtaker'),
  'work': chalk.white('An open sourcerer at JSmartX'),
  'twitter': chalk.cyan('https://twitter.com/bugtaker'),
  'github': chalk.cyan('https://github.com/bugtaker'),
  'linkedin': chalk.cyan('https://linkedin.com/in/bugtaker'),
  'web': chalk.cyan('https://www.bugtaker.com'),
  'npx': chalk.white('npx bugtaker'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
};

// Actual strings we're going to output
const head = `${data.name} ${data.handle}`
const work = `${data.labelWork}  ${data.work}`
const twitter = `${data.labelTwitter}  ${data.twitter}`
const github = `${data.labelGitHub}  ${data.github}`
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`
const web = `${data.labelWeb}  ${data.web}`
const card = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = head + '\n\n' + work + '\n' + twitter + '\n' + github + '\n' + linkedin + '\n' + web + '\n\n' + card;

console.log(chalk.green(boxen(output, options)));
