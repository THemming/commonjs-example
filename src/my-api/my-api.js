var RestClient = require('./rest-client');

function Api() {
    this.name = 'my-api';
    this.rest = new RestClient();
}

Api.prototype = {
    getName: function() {
        return this.name;
    },

    getRest: function() {
        return this.rest;
    }
};

module.exports = Api;

window.api = new Api();