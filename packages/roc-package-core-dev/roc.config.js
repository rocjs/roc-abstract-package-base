const join = require('path').join;

// Makes it possible for us to generate documentation for this package.
module.exports = {
    packages: ['roc', join(__dirname, 'lib', 'index.js')]
};
