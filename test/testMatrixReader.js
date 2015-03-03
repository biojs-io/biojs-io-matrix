var chai = require("chai");
var assert = chai.assert;
var equal = assert.deepEqual;
var fs = require("fs");

var Reader = require("..");
var app;

require("./mochaFix.js");

suite("MatrixReader");

beforeEach(function(){
  app = new Reader();
});

test("compare PAM 250", function(done){
  fs.readFile(__dirname  + "/data/pam_250", "utf8", function(err,body){
    var matrix = app.parse(body);
    var result = body.split("\n").slice(1).join("\n");
    equal(result, app.export());
    done();
  });
});

test("use without an object", function(done){
  fs.readFile(__dirname  + "/data/pam_250", "utf8", function(err,body){
    var matrix = Reader.parse(body);
    var result = body.split("\n").slice(1).join("\n");
    equal(result, Reader.export(matrix));
    done();
  });
});

test("use without an object and parse", function(done){
  fs.readFile(__dirname  + "/data/pam_250", "utf8", function(err,body){
    var matrix = Reader(body);
    var result = body.split("\n").slice(1).join("\n");
    equal(result, Reader.export(matrix));
    done();
  });
});
