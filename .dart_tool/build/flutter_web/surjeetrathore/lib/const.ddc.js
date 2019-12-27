define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const $const = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy($const, {
    /*$const.themeColor*/get themeColor() {
      return new ui.Color.new(4279592384);
    },
    /*$const.textColor*/get textColor() {
      return new ui.Color.new(4285429109);
    },
    /*$const.backColor*/get backColor() {
      return new ui.Color.new(68702707762);
    },
    /*$const.bottomColor*/get bottomColor() {
      return new ui.Color.new(68718338350);
    }
  });
  dart.trackLibraries("packages/surjeetrathore/const", {
    "package:surjeetrathore/const.dart": $const
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["const.dart"],"names":[],"mappings":";;;;;;;;;MAEM,iBAAU;YAAG,kBAAM;;MACnB,gBAAS;YAAG,kBAAM;;MAClB,gBAAS;YAAG,kBAAM;;MAClB,kBAAW;YAAG,kBAAM","file":"const.ddc.js"}');
  // Exports:
  return {
    $const: $const
  };
});

//# sourceMappingURL=const.ddc.js.map
