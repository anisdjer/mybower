var bower = require('bower');
var mybowerConfig = require('./mybower.json');

for (var module in mybowerConfig) {
    if (mybowerConfig[module].local === true) continue;
    bower.commands.install([module + "=" + mybowerConfig[module].url], {}, {"directory": mybowerConfig[module].directory})
}
