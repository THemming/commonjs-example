var $ = require('./vendor-libs').jQuery;

function RestClient() {
    this.name = 'rest-client module';
}

RestClient.prototype.getName = function() {
    return this.name;
};

RestClient.prototype.getJquery = function() {
    return $;
};

module.exports = RestClient;