/* global describe, it, expect */

"use strict";

var experiments = require("../lib/experiments");

describe("experiments module", function(){
  describe("#hello()", function(){
    it("should return a hello", function(){
      expect(experiments.hello("Jaguard")).toBe("Hello Jaguard");
    });
  });
});
