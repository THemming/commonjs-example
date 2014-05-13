var Api = require('../../src/my-api/my-api', {
    '../../src/my-api/rest-client': function() {
        this.getName = function() {
            return 'mock rest client';
        };

        this.getJquery = function() {
            return 'mock jquery';
        };
    }
});

describe('api module', function() {
    var api;

    beforeEach(function() {
        api = new Api();
    });

    it('has a name', function() {
        expect(api.getName()).toEqual('my-api');
    });

    it('has a rest instance with a name', function() {
        expect(api.getRest().getName()).toEqual('mock rest client');
    });

    it('rest instance can get jquery reference', function() {
        expect(api.getRest().getJquery()).toEqual('mock jquery');
    });
});