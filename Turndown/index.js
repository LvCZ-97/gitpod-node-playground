const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

const turndownService = new TurndownService();
const htmlString = fs.readFileSync(path.join(__dirname, 'test.html'), 'utf-8');

const markdown = turndownService.turndown(htmlString);

console.log(markdown);