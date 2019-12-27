define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/surjeetrathore/const', 'packages/flutter/src/rendering/animated_size', 'packages/responsive_builder/responsive_builder'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__surjeetrathore__const, packages__flutter__src__rendering__animated_size, packages__responsive_builder__responsive_builder) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const icons = packages__flutter__material.src__material__icons;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const $const = packages__surjeetrathore__const.$const;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const responsive_builder = packages__responsive_builder__responsive_builder.responsive_builder;
  const home = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 19,
        line: 28,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 19,
        line: 29,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 17,
        line: 27,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 19,
        line: 32,
        file: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C5 || CT.C5,
        name: null,
        column: 17,
        line: 31,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 29,
        line: 38,
        file: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 23,
        line: 39,
        file: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 23,
        line: 40,
        file: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C8 || CT.C8,
        name: null,
        column: 21,
        line: 37,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 23,
        line: 43,
        file: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 21,
        line: 42,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 23,
        line: 46,
        file: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 23,
        line: 47,
        file: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C16 || CT.C16,
        name: null,
        column: 21,
        line: 45,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 19,
        line: 35,
        file: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 36,
        file: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C20 || CT.C20,
        name: null,
        column: 17,
        line: 34,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 29,
        line: 55,
        file: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 23,
        line: 56,
        file: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 23,
        line: 57,
        file: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C24 || CT.C24,
        name: null,
        column: 21,
        line: 54,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 23,
        line: 60,
        file: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C29 || CT.C29,
        name: null,
        column: 21,
        line: 59,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 25,
        line: 64,
        file: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "overflow",
        column: 25,
        line: 65,
        file: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 25,
        line: 66,
        file: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C32 || CT.C32,
        name: null,
        column: 30,
        line: 63,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 63,
        file: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C37 || CT.C37,
        name: null,
        column: 21,
        line: 62,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 19,
        line: 52,
        file: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 53,
        file: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C40 || CT.C40,
        name: null,
        column: 17,
        line: 51,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 15,
        line: 24,
        file: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 26,
        file: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C44 || CT.C44,
        name: null,
        column: 20,
        line: 23,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 23,
        file: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C48 || CT.C48,
        name: null,
        column: 18,
        line: 22,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 11,
        line: 19,
        file: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 11,
        line: 20,
        file: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 11,
        line: 21,
        file: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 22,
        file: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C51 || CT.C51,
        name: null,
        column: 9,
        line: 18,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 7,
        line: 15,
        file: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 16,
        file: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C57 || CT.C57,
        name: null,
        column: 15,
        line: 14,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 9,
        line: 14,
        file: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C61 || CT.C61,
        name: null,
        column: 12,
        line: 13,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "name",
        column: 19,
        line: 90,
        file: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 19,
        line: 91,
        file: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C64 || CT.C64,
        name: null,
        column: 23,
        line: 89,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 19,
        line: 94,
        file: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 19,
        line: 95,
        file: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 19,
        line: 96,
        file: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C68 || CT.C68,
        name: null,
        column: 17,
        line: 93,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 15,
        line: 87,
        file: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 88,
        file: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C73 || CT.C73,
        name: null,
        column: 20,
        line: 86,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 84,
        file: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 13,
        line: 85,
        file: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 86,
        file: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C77 || CT.C77,
        name: null,
        column: 9,
        line: 83,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 17,
        line: 109,
        file: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 17,
        line: 110,
        file: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C82 || CT.C82,
        name: null,
        column: 15,
        line: 108,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 17,
        line: 113,
        file: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 17,
        line: 114,
        file: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C86 || CT.C86,
        name: null,
        column: 15,
        line: 112,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 17,
        line: 117,
        file: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C90 || CT.C90,
        name: null,
        column: 15,
        line: 116,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "desktop",
        column: 17,
        line: 120,
        file: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mobile",
        column: 17,
        line: 121,
        file: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C93 || CT.C93,
        name: null,
        column: 15,
        line: 119,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 13,
        line: 105,
        file: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 13,
        line: 106,
        file: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 107,
        file: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C97 || CT.C97,
        name: null,
        column: 18,
        line: 104,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 11,
        line: 101,
        file: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 11,
        line: 102,
        file: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 11,
        line: 103,
        file: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 104,
        file: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C102 || CT.C102,
        name: null,
        column: 9,
        line: 100,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 7,
        line: 81,
        file: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 82,
        file: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C108 || CT.C108,
        name: null,
        column: 12,
        line: 80,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 11,
        line: 135,
        file: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 11,
        line: 136,
        file: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C112 || CT.C112,
        name: null,
        column: 9,
        line: 134,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 11,
        line: 139,
        file: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C116 || CT.C116,
        name: null,
        column: 9,
        line: 138,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 17,
        line: 142,
        file: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 11,
        line: 143,
        file: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 11,
        line: 144,
        file: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121, C122 || CT.C122], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C119 || CT.C119,
        name: null,
        column: 9,
        line: 141,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 11,
        line: 147,
        file: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C124 || CT.C124,
        name: null,
        column: 9,
        line: 146,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 11,
        line: 150,
        file: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 11,
        line: 151,
        file: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128, C129 || CT.C129], widget_inspector._Location);
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C127 || CT.C127,
        name: null,
        column: 9,
        line: 149,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 7,
        line: 132,
        file: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 133,
        file: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C131 || CT.C131,
        name: null,
        column: 12,
        line: 131,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 21,
        line: 165,
        file: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 15,
        line: 166,
        file: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 15,
        line: 167,
        file: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136, C137 || CT.C137, C138 || CT.C138], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C135 || CT.C135,
        name: null,
        column: 13,
        line: 164,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 15,
        line: 170,
        file: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 15,
        line: 171,
        file: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C140 || CT.C140,
        name: null,
        column: 13,
        line: 169,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 11,
        line: 162,
        file: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 163,
        file: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C144 || CT.C144,
        name: null,
        column: 9,
        line: 161,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 21,
        line: 179,
        file: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 15,
        line: 180,
        file: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 15,
        line: 181,
        file: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C148 || CT.C148,
        name: null,
        column: 13,
        line: 178,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 15,
        line: 184,
        file: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 15,
        line: 185,
        file: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C153 || CT.C153,
        name: null,
        column: 13,
        line: 183,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 11,
        line: 176,
        file: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 177,
        file: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C157 || CT.C157,
        name: null,
        column: 9,
        line: 175,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 7,
        line: 159,
        file: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 160,
        file: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C161 || CT.C161,
        name: null,
        column: 12,
        line: 158,
        file: "org-dartlang-app:///packages/surjeetrathore/home.dart"
      });
    }
  });
  home.Home = class Home extends framework.StatefulWidget {
    createState() {
      return new home._HomeState.new();
    }
  };
  (home.Home.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.Home.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.Home.prototype;
  dart.addTypeTests(home.Home);
  dart.setMethodSignature(home.Home, () => ({
    __proto__: dart.getMethods(home.Home.__proto__),
    createState: dart.fnType(home._HomeState, [])
  }));
  dart.setLibraryUri(home.Home, "package:surjeetrathore/home.dart");
  const _buildHome = dart.privateName(home, "_buildHome");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  let C14;
  let C13;
  let C12;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C27;
  let C24;
  let C23;
  let C30;
  let C29;
  let C28;
  let C33;
  let C34;
  let C35;
  let C32;
  let C31;
  let C38;
  let C37;
  let C36;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C48;
  let C47;
  let C52;
  let C53;
  let C54;
  let C55;
  let C51;
  let C50;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C61;
  let C60;
  let C65;
  let C66;
  let C64;
  let C63;
  let C69;
  let C70;
  let C71;
  let C68;
  let C67;
  let C74;
  let C75;
  let C73;
  let C72;
  let C78;
  let C79;
  let C80;
  let C77;
  let C76;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C88;
  let C86;
  let C85;
  let C91;
  let C90;
  let C89;
  const _buildDesktopBody = dart.privateName(home, "_buildDesktopBody");
  const _buildMobileBody = dart.privateName(home, "_buildMobileBody");
  let C94;
  let C95;
  let C93;
  let C92;
  let C98;
  let C99;
  let C100;
  let C97;
  let C96;
  let C103;
  let C104;
  let C105;
  let C106;
  let C102;
  let C101;
  let C109;
  let C110;
  let C108;
  let C107;
  let C113;
  let C114;
  let C112;
  let C111;
  let C117;
  let C116;
  let C115;
  let C120;
  let C121;
  let C122;
  let C119;
  let C118;
  let C125;
  let C124;
  let C123;
  let C128;
  let C129;
  let C127;
  let C126;
  let C132;
  let C133;
  let C131;
  let C130;
  let C136;
  let C137;
  let C138;
  let C135;
  let C134;
  let C141;
  let C142;
  let C140;
  let C139;
  let C145;
  let C146;
  let C144;
  let C143;
  let C149;
  let C150;
  let C151;
  let C148;
  let C147;
  let C154;
  let C155;
  let C153;
  let C152;
  let C158;
  let C159;
  let C157;
  let C156;
  let C162;
  let C163;
  let C161;
  let C160;
  home._HomeState = class _HomeState extends framework.State$(home.Home) {
    build(context) {
      return new scaffold.Scaffold.new({body: new basic.Stack.new({alignment: alignment.Alignment.bottomCenter, children: JSArrayOfWidget().of([framework.Widget._check(this[_buildHome]()), new container.Container.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 2, height: 90.0, color: $const.bottomColor, child: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("CONTACT", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 15.0}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.phone, {color: $const.backColor, size: 15.0, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new text.Text.new("+91 8951444551", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 12.0}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.email, {color: $const.backColor, size: 15.0, $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new basic.Flexible.new({child: new text.Text.new("surjeetrathore1991@gmail.com", {overflow: paragraph.TextOverflow.ellipsis, style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 12.0}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36})]), $creationLocationd_0dea112b090073317d4: C39 || CT.C39})]), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50})]), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60});
    }
    [_buildHome]() {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new container.Container.new({width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) / 2, height: media_query.MediaQuery.of(this.context).size.height, child: new basic.Stack.new({fit: stack.StackFit.expand, children: JSArrayOfWidget().of([new image.Image.asset("assets/surjeet.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), new container.Container.new({width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) / 2, height: media_query.MediaQuery.of(this.context).size.height, color: new ui.Color.new(68702707762).withOpacity(0.7), $creationLocationd_0dea112b090073317d4: C67 || CT.C67})]), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), new container.Container.new({color: $const.backColor, width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) / 2, height: media_query.MediaQuery.of(this.context).size.height, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("HI", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), new text.Text.new("I'M SURJEET RATHORE", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0}), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), new responsive_builder.ScreenTypeLayout.new({desktop: framework.Widget._check(this[_buildDesktopBody]()), mobile: framework.Widget._check(this[_buildMobileBody]()), $creationLocationd_0dea112b090073317d4: C92 || CT.C92})]), $creationLocationd_0dea112b090073317d4: C96 || CT.C96}), $creationLocationd_0dea112b090073317d4: C101 || CT.C101})]), $creationLocationd_0dea112b090073317d4: C107 || CT.C107});
    }
    [_buildDesktopBody]() {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("Android Developer", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), new icon.Icon.new(icons.Icons.fiber_manual_record, {color: colors.Colors.white, size: 5.0, $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C123 || CT.C123}), new text.Text.new("Flutter Developer", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0}), $creationLocationd_0dea112b090073317d4: C126 || CT.C126})]), $creationLocationd_0dea112b090073317d4: C130 || CT.C130});
    }
    [_buildMobileBody]() {
      return new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.fiber_manual_record, {color: colors.Colors.white, size: 5.0, $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), new text.Text.new("Android Developer", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0}), $creationLocationd_0dea112b090073317d4: C139 || CT.C139})]), $creationLocationd_0dea112b090073317d4: C143 || CT.C143}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.fiber_manual_record, {color: colors.Colors.white, size: 5.0, $creationLocationd_0dea112b090073317d4: C147 || CT.C147}), new text.Text.new("Flutter Developer", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152})]), $creationLocationd_0dea112b090073317d4: C156 || CT.C156})]), $creationLocationd_0dea112b090073317d4: C160 || CT.C160});
    }
  };
  (home._HomeState.new = function() {
    home._HomeState.__proto__.new.call(this);
    ;
  }).prototype = home._HomeState.prototype;
  dart.addTypeTests(home._HomeState);
  dart.setMethodSignature(home._HomeState, () => ({
    __proto__: dart.getMethods(home._HomeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildHome]: dart.fnType(dart.dynamic, []),
    [_buildDesktopBody]: dart.fnType(dart.dynamic, []),
    [_buildMobileBody]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(home._HomeState, "package:surjeetrathore/home.dart");
  dart.trackLibraries("packages/surjeetrathore/home", {
    "package:surjeetrathore/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAM8B;IAAY;;;;;;EAC1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,kCACG,gCACa,4CACH,8CAChB,qBACA,oCAC2C,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,WACnC,aACD,2BACA,6BACE,yCACgC,yCAEnB,sBAChB,kBACE,mBACO,qCAAwB,+BAAiB,+DAElD,gCACU,6DAEV,sCACuC,yCACnB,sBAChB,kBACQ,2BACC,wBACD,6DAER,+BACS,8DAET,kBACE,0BACO,qCAAwB,+BAAiB,4HAItD,sCACuC,yCACnB,sBAChB,kBACQ,2BACC,wBACD,+DAER,+BACS,8DAET,+BACS,kBACL,2CACuB,wCAChB,qCAAwB,+BAAiB;IAWtE;;AAGE,YAAO,uCACgC,+CACnB,sBAChB,oCAC6C,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,WACxB,AAAY,AAAK,0BAAd,kCACf,0BACS,iCACI,sBACV,sBACJ,4BACY,+EAEd,oCAC2C,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,WACxB,AAAY,AAAK,0BAAd,kCACf,AAAmB,iBAAb,yBAAyB,mLAIhD,oCACS,yBACkC,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,WACxB,AAAY,AAAK,0BAAd,kCACf,0CACkC,mDACF,yCACnB,sBAChB,kBACE,cACO,qCAAwB,+BAAiB,iEAElD,kBACE,+BACO,qCAAwB,+BAAiB,iEAElD,gCACU,+DAEV,8EACW,4DACD;IAOtB;;AAGE,YAAO,uCACgC,yCACnB,sBAChB,kBACE,6BACO,qCAAwB,+BAAiB,mEAElD,+BACS,iEAET,kBACQ,yCACQ,2BACR,gEAER,+BACS,iEAET,kBACE,6BACO,qCAAwB,+BAAiB;IAIxD;;AAGE,YAAO,0CACgC,yCACnB,sBAChB,sCACuC,yCACnB,sBAChB,kBACQ,yCACQ,2BACR,gEAER,kBACE,6BACO,qCAAwB,+BAAiB,gIAItD,sCACuC,yCACnB,sBAChB,kBACQ,yCACQ,2BACR,gEAER,kBACE,6BACO,qCAAwB,+BAAiB;IAM5D;;;;;EACF","file":"home.ddc.js"}');
  // Exports:
  return {
    home: home
  };
});

//# sourceMappingURL=home.ddc.js.map
