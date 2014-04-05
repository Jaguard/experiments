/* global describe, it, expect */

"use strict";

var helper = require("./helper");

describe("helper module", function(){
  describe("#str", function(){
    it("should not be null", function(){
      expect(helper.str).not.toBe(null);
    });
  });
  describe("#echo", function(){
    it("should not be null", function(){
      expect(helper.echo).not.toBe(null);
    });
  });
});
