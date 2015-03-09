var bower = require('bower');
var mybowerConfig = require('./mybower.json');

for (var module in mybowerConfig) {
    if (mybowerConfig[module].local === true) continue;
    bower.commands.install([mybowerConfig[module].url], {}, {"directory": mybowerConfig[module].directory})
}
//console.log(bower.commands.install(['jquery'], {}, {"directory": "test"}))