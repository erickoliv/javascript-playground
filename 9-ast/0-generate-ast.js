var babel = require("@babel/core");
import { transform } from "@babel/core/transform";
import * as babel from "@babel/core";

const code = 'const n = 1';

babel.transform(code, options, function(err, result) {
  const { code, map, ast };

  console.log(code);
});