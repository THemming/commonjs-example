describe('my-api module', function () {

    var API_MODULE_PATH = '../../src/my-api/my-api';

    describe('without mocks', function () {

        var api;
        var Api = require(API_MODULE_PATH);

        beforeEach(function () {
            api = new Api();
        });

        it('has a name', function () {
            expect(api.getName()).toEqual('my-api');
        });

        it('has a rest instance with a name', function () {
            expect(api.getRest().getName()).toEqual('rest-client module');
        });

        it('rest instance can get jquery reference', function () {
            expect(api.getRest().getJquery()).toEqual(jasmine.any(Function));
        });

    });

    describe('with mocks', function () {

        var api;
        var ApiWithMocks = require(API_MODULE_PATH, {
            '../../src/my-api/rest-client': function () {
                this.getName = function () {
                    return 'mock rest client';
                };
                this.getJquery = function () {
                    return 'mock jquery';
                };
            }
        });

        beforeEach(function () {
            api = new ApiWithMocks();
        });

        it('has a name', function () {
            expect(api.getName()).toEqual('my-api');
        });

        it('has a rest instance with a name', function () {
            expect(api.getRest().getName()).toEqual('mock rest client');
        });

        it('rest instance can get jquery reference', function () {
            expect(api.getRest().getJquery()).toEqual('mock jquery');
        });

    });

    describe('with deep mock', function () {

        var api;
        var ApiWithMocks = require(API_MODULE_PATH, {
            '../../src/my-api/vendor-libs': {
                jQuery: 'deep mock jquery'
            }
        });

        beforeEach(function () {
            api = new ApiWithMocks();
        });

        it('has a rest instance with a name', function () {
            expect(api.getRest().getName()).toEqual('rest-client module');
        });

        it('rest instance can get jquery reference', function () {
            expect(api.getRest().getJquery()).toEqual('deep mock jquery');
        });

    });

});