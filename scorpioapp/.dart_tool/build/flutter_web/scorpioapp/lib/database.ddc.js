define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/gestures/arena', 'packages/http/http'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__flutter__src__gestures__arena, packages__http__http) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const js = dart_sdk.js;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const page = packages__flutter__material.src__material__page;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const colors = packages__flutter__material.src__material__colors;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const icons = packages__flutter__material.src__material__icons;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const text_field = packages__flutter__material.src__material__text_field;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const http = packages__http__http.http;
  const main = Object.create(dart.library);
  const database = Object.create(dart.library);
  const $location = dartx.location;
  const $_get = dartx._get;
  const $replaceFirst = dartx.replaceFirst;
  const $toRadixString = dartx.toRadixString;
  const $document = dartx.document;
  const $requestFullscreen = dartx.requestFullscreen;
  let BuildContextToConnectedScreen = () => (BuildContextToConnectedScreen = dart.constFn(dart.fnType(database.ConnectedScreen, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let __ToString = () => (__ToString = dart.constFn(dart.fnType(core.String, [], {leadingHashSign: core.bool}, {})))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let BuildContextToJoinScreen = () => (BuildContextToJoinScreen = dart.constFn(dart.fnType(main.JoinScreen, [framework.BuildContext])))();
  let FutureBuilderOfPost = () => (FutureBuilderOfPost = dart.constFn(async$.FutureBuilder$(database.Post)))();
  let BuildContextToLockScreen = () => (BuildContextToLockScreen = dart.constFn(dart.fnType(main.LockScreen, [framework.BuildContext])))();
  let AsyncSnapshotOfPost = () => (AsyncSnapshotOfPost = dart.constFn(async$.AsyncSnapshot$(database.Post)))();
  let BuildContextAndAsyncSnapshotOfPostToWidget = () => (BuildContextAndAsyncSnapshotOfPostToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AsyncSnapshotOfPost()])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let BuildContextToColorScreen = () => (BuildContextToColorScreen = dart.constFn(dart.fnType(database.ColorScreen, [framework.BuildContext])))();
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 34,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 34,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 55,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 19,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 19,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 25,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 25,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 25,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 25,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLength",
        [_Location_column]: 25,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Software Download"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 21,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Documentation"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 21,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 32,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 32,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 53,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88, C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 13,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 191,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121, C122 || CT.C122], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 194,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Back"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126, C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/main.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 108,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 9,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152, C153 || CT.C153, C154 || CT.C154], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.constList([C157 || CT.C157], widget_inspector._Location);
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C156 || CT.C156,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160, C161 || CT.C161, C162 || CT.C162], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 7,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.constList([C165 || CT.C165, C166 || CT.C166, C167 || CT.C167], widget_inspector._Location);
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C164 || CT.C164,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 42,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170, C171 || CT.C171, C172 || CT.C172, C173 || CT.C173], widget_inspector._Location);
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C169 || CT.C169,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 280,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.constList([C176 || CT.C176], widget_inspector._Location);
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C175 || CT.C175,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 303,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 39,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179, C180 || CT.C180, C181 || CT.C181], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C178 || CT.C178,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 302,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 39,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185, C186 || CT.C186], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 311,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 39,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189, C190 || CT.C190, C191 || CT.C191], widget_inspector._Location);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C188 || CT.C188,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 320,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 39,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.constList([C194 || CT.C194], widget_inspector._Location);
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C193 || CT.C193,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 329,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 39,
        [_Location_line]: 334,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 335,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198, C199 || CT.C199], widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C196 || CT.C196,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 332,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 342,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 39,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.constList([C202 || CT.C202, C203 || CT.C203, C204 || CT.C204], widget_inspector._Location);
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C201 || CT.C201,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 341,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 39,
        [_Location_line]: 351,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.constList([C207 || CT.C207], widget_inspector._Location);
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C206 || CT.C206,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 350,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 64,
        [_Location_line]: 376,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 47,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 47,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 47,
        [_Location_line]: 378,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.constList([C211 || CT.C211, C212 || CT.C212, C213 || CT.C213], widget_inspector._Location);
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C210 || CT.C210,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 45,
        [_Location_line]: 380,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.constList([C216 || CT.C216], widget_inspector._Location);
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C215 || CT.C215,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 379,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 64,
        [_Location_line]: 394,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Lock"
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 47,
        [_Location_line]: 383,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 47,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 47,
        [_Location_line]: 389,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 47,
        [_Location_line]: 396,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.constList([C221 || CT.C221, C222 || CT.C222, C223 || CT.C223, C224 || CT.C224], widget_inspector._Location);
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C220 || CT.C220,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 382,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 41,
        [_Location_line]: 355,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 41,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.constList([C227 || CT.C227, C228 || CT.C228], widget_inspector._Location);
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C226 || CT.C226,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 354,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 49,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.constList([C231 || CT.C231], widget_inspector._Location);
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C230 || CT.C230,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 301,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C233() {
      return C233 = dart.constList([C234 || CT.C234], widget_inspector._Location);
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C233 || CT.C233,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 92,
        [_Location_line]: 409,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 37,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 411,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.constList([C237 || CT.C237, C238 || CT.C238, C239 || CT.C239], widget_inspector._Location);
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C236 || CT.C236,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 408,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 37,
        [_Location_line]: 418,
        [_Location_file]: null
      });
    },
    get C241() {
      return C241 = dart.constList([C242 || CT.C242], widget_inspector._Location);
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C241 || CT.C241,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 417,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 58,
        [_Location_line]: 435,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 41,
        [_Location_line]: 424,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 41,
        [_Location_line]: 428,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 41,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C245() {
      return C245 = dart.constList([C246 || CT.C246, C247 || CT.C247, C248 || CT.C248], widget_inspector._Location);
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C245 || CT.C245,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 423,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 37,
        [_Location_line]: 421,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 37,
        [_Location_line]: 422,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 423,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.constList([C251 || CT.C251, C252 || CT.C252, C253 || CT.C253], widget_inspector._Location);
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C250 || CT.C250,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 420,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 47,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.constList([C256 || CT.C256], widget_inspector._Location);
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C255 || CT.C255,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 407,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.constList([C259 || CT.C259], widget_inspector._Location);
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C258 || CT.C258,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 406,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 443,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 444,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.constList([C262 || CT.C262, C263 || CT.C263], widget_inspector._Location);
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C261 || CT.C261,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 443,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 27,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 27,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C265() {
      return C265 = dart.constList([C266 || CT.C266, C267 || CT.C267], widget_inspector._Location);
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C265 || CT.C265,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 290,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C269() {
      return C269 = dart.constList([C270 || CT.C270, C271 || CT.C271, C272 || CT.C272], widget_inspector._Location);
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C269 || CT.C269,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 286,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C274() {
      return C274 = dart.constList([C275 || CT.C275], widget_inspector._Location);
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C274 || CT.C274,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 285,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.constList([C278 || CT.C278], widget_inspector._Location);
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C277 || CT.C277,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 278,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C280() {
      return C280 = dart.constList([C281 || CT.C281], widget_inspector._Location);
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C280 || CT.C280,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 277,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 95,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 85,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 464,
        [_Location_file]: null
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 7,
        [_Location_line]: 465,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 466,
        [_Location_file]: null
      });
    },
    get C285() {
      return C285 = dart.constList([C286 || CT.C286, C287 || CT.C287, C288 || CT.C288], widget_inspector._Location);
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C285 || CT.C285,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 463,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 477,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 11,
        [_Location_line]: 478,
        [_Location_file]: null
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 479,
        [_Location_file]: null
      });
    },
    get C290() {
      return C290 = dart.constList([C291 || CT.C291, C292 || CT.C292, C293 || CT.C293], widget_inspector._Location);
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C290 || CT.C290,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 476,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLength",
        [_Location_column]: 17,
        [_Location_line]: 494,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 495,
        [_Location_file]: null
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 17,
        [_Location_line]: 496,
        [_Location_file]: null
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 17,
        [_Location_line]: 497,
        [_Location_file]: null
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 498,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 503,
        [_Location_file]: null
      });
    },
    get C295() {
      return C295 = dart.constList([C296 || CT.C296, C297 || CT.C297, C298 || CT.C298, C299 || CT.C299, C300 || CT.C300, C301 || CT.C301], widget_inspector._Location);
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C295 || CT.C295,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 493,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 487,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 491,
        [_Location_file]: null
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 492,
        [_Location_file]: null
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 493,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.constList([C304 || CT.C304, C305 || CT.C305, C306 || CT.C306, C307 || CT.C307], widget_inspector._Location);
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C303 || CT.C303,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 486,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLength",
        [_Location_column]: 17,
        [_Location_line]: 521,
        [_Location_file]: null
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 522,
        [_Location_file]: null
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 17,
        [_Location_line]: 523,
        [_Location_file]: null
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 524,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 17,
        [_Location_line]: 529,
        [_Location_file]: null
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 530,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.constList([C310 || CT.C310, C311 || CT.C311, C312 || CT.C312, C313 || CT.C313, C314 || CT.C314, C315 || CT.C315], widget_inspector._Location);
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C309 || CT.C309,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 520,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 514,
        [_Location_file]: null
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 518,
        [_Location_file]: null
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 519,
        [_Location_file]: null
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 520,
        [_Location_file]: null
      });
    },
    get C317() {
      return C317 = dart.constList([C318 || CT.C318, C319 || CT.C319, C320 || CT.C320, C321 || CT.C321], widget_inspector._Location);
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C317 || CT.C317,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 513,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 485,
        [_Location_file]: null
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 58,
        [_Location_line]: 485,
        [_Location_file]: null
      });
    },
    get C323() {
      return C323 = dart.constList([C324 || CT.C324, C325 || CT.C325], widget_inspector._Location);
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C323 || CT.C323,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 485,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLength",
        [_Location_column]: 17,
        [_Location_line]: 550,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 551,
        [_Location_file]: null
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 17,
        [_Location_line]: 552,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 17,
        [_Location_line]: 553,
        [_Location_file]: null
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 554,
        [_Location_file]: null
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 559,
        [_Location_file]: null
      });
    },
    get C327() {
      return C327 = dart.constList([C328 || CT.C328, C329 || CT.C329, C330 || CT.C330, C331 || CT.C331, C332 || CT.C332, C333 || CT.C333], widget_inspector._Location);
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C327 || CT.C327,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 549,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 543,
        [_Location_file]: null
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 547,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 548,
        [_Location_file]: null
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 549,
        [_Location_file]: null
      });
    },
    get C335() {
      return C335 = dart.constList([C336 || CT.C336, C337 || CT.C337, C338 || CT.C338, C339 || CT.C339], widget_inspector._Location);
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C335 || CT.C335,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 542,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLength",
        [_Location_column]: 17,
        [_Location_line]: 577,
        [_Location_file]: null
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 578,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 17,
        [_Location_line]: 579,
        [_Location_file]: null
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 580,
        [_Location_file]: null
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 17,
        [_Location_line]: 585,
        [_Location_file]: null
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 586,
        [_Location_file]: null
      });
    },
    get C341() {
      return C341 = dart.constList([C342 || CT.C342, C343 || CT.C343, C344 || CT.C344, C345 || CT.C345, C346 || CT.C346, C347 || CT.C347], widget_inspector._Location);
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C341 || CT.C341,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 576,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 570,
        [_Location_file]: null
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 574,
        [_Location_file]: null
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 575,
        [_Location_file]: null
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 576,
        [_Location_file]: null
      });
    },
    get C349() {
      return C349 = dart.constList([C350 || CT.C350, C351 || CT.C351, C352 || CT.C352, C353 || CT.C353], widget_inspector._Location);
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C349 || CT.C349,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 569,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 541,
        [_Location_file]: null
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 58,
        [_Location_line]: 541,
        [_Location_file]: null
      });
    },
    get C355() {
      return C355 = dart.constList([C356 || CT.C356, C357 || CT.C357], widget_inspector._Location);
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C355 || CT.C355,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 541,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 475,
        [_Location_file]: null
      });
    },
    get C359() {
      return C359 = dart.constList([C360 || CT.C360], widget_inspector._Location);
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C359 || CT.C359,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 474,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 604,
        [_Location_file]: null
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 11,
        [_Location_line]: 605,
        [_Location_file]: null
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 606,
        [_Location_file]: null
      });
    },
    get C362() {
      return C362 = dart.constList([C363 || CT.C363, C364 || CT.C364, C365 || CT.C365], widget_inspector._Location);
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C362 || CT.C362,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 603,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLength",
        [_Location_column]: 17,
        [_Location_line]: 621,
        [_Location_file]: null
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 622,
        [_Location_file]: null
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 17,
        [_Location_line]: 623,
        [_Location_file]: null
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 17,
        [_Location_line]: 624,
        [_Location_file]: null
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 625,
        [_Location_file]: null
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 630,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.constList([C368 || CT.C368, C369 || CT.C369, C370 || CT.C370, C371 || CT.C371, C372 || CT.C372, C373 || CT.C373], widget_inspector._Location);
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C367 || CT.C367,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 620,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 614,
        [_Location_file]: null
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 618,
        [_Location_file]: null
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 619,
        [_Location_file]: null
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 620,
        [_Location_file]: null
      });
    },
    get C375() {
      return C375 = dart.constList([C376 || CT.C376, C377 || CT.C377, C378 || CT.C378, C379 || CT.C379], widget_inspector._Location);
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C375 || CT.C375,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 613,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLength",
        [_Location_column]: 17,
        [_Location_line]: 648,
        [_Location_file]: null
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 649,
        [_Location_file]: null
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 17,
        [_Location_line]: 650,
        [_Location_file]: null
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 651,
        [_Location_file]: null
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 17,
        [_Location_line]: 656,
        [_Location_file]: null
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 657,
        [_Location_file]: null
      });
    },
    get C381() {
      return C381 = dart.constList([C382 || CT.C382, C383 || CT.C383, C384 || CT.C384, C385 || CT.C385, C386 || CT.C386, C387 || CT.C387], widget_inspector._Location);
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C381 || CT.C381,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 647,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 641,
        [_Location_file]: null
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 645,
        [_Location_file]: null
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 646,
        [_Location_file]: null
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 647,
        [_Location_file]: null
      });
    },
    get C389() {
      return C389 = dart.constList([C390 || CT.C390, C391 || CT.C391, C392 || CT.C392, C393 || CT.C393], widget_inspector._Location);
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C389 || CT.C389,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 640,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C396() {
      return C396 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 612,
        [_Location_file]: null
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 58,
        [_Location_line]: 612,
        [_Location_file]: null
      });
    },
    get C395() {
      return C395 = dart.constList([C396 || CT.C396, C397 || CT.C397], widget_inspector._Location);
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C395 || CT.C395,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 612,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C400() {
      return C400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 602,
        [_Location_file]: null
      });
    },
    get C399() {
      return C399 = dart.constList([C400 || CT.C400], widget_inspector._Location);
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C399 || CT.C399,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 601,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 671,
        [_Location_file]: null
      });
    },
    get C402() {
      return C402 = dart.constList([C403 || CT.C403], widget_inspector._Location);
    },
    get C401() {
      return C401 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C402 || CT.C402,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 671,
        [_Location_file]: "org-dartlang-app:///packages/scorpioapp/database.dart"
      });
    }
  });
  main.JoinScreen = class JoinScreen extends framework.StatefulWidget {
    createState() {
      return new main._JoinScreen.new();
    }
  };
  (main.JoinScreen.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.JoinScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.JoinScreen.prototype;
  dart.addTypeTests(main.JoinScreen);
  dart.setMethodSignature(main.JoinScreen, () => ({
    __proto__: dart.getMethods(main.JoinScreen.__proto__),
    createState: dart.fnType(main._JoinScreen, [])
  }));
  dart.setLibraryUri(main.JoinScreen, "package:scorpioapp/main.dart");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C4;
  let C5;
  let C6;
  let C7;
  let C3;
  let C2;
  let C10;
  let C9;
  let C8;
  let C13;
  let C14;
  let C15;
  let C12;
  let C11;
  let C18;
  let C17;
  let C16;
  let C21;
  let C22;
  let C23;
  let C20;
  let C19;
  let C26;
  let C25;
  let C24;
  let C29;
  let C28;
  let C27;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C30;
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C32;
  let C31;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C45;
  let C44;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  const Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text, "Text.overflow");
  const Text_softWrap = dart.privateName(text, "Text.softWrap");
  const Text_locale = dart.privateName(text, "Text.locale");
  const Text_textDirection = dart.privateName(text, "Text.textDirection");
  const Text_textAlign = dart.privateName(text, "Text.textAlign");
  const Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C48;
  let C51;
  let C52;
  let C53;
  let C50;
  let C49;
  let C56;
  let C57;
  let C55;
  let C54;
  let C60;
  let C59;
  let C58;
  let C61;
  let C64;
  let C65;
  let C66;
  let C63;
  let C62;
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C72;
  let C71;
  let C76;
  let C77;
  let C78;
  let C75;
  let C74;
  let C81;
  let C80;
  let C79;
  let C84;
  let C83;
  let C82;
  main._JoinScreen = class _JoinScreen extends framework.State$(main.JoinScreen) {
    dispose() {
      this.sIDController.dispose();
      super.dispose();
    }
    initState() {
      this.sIDController.addListener(dart.fn(() => {
        if (this.sIDController.text.length === 4 && dart.equals(main.serverstate, false)) {
          main.serverstate = true;
          main.serverid = core.int.parse(this.sIDController.text);
          this.sIDController.clear();
          navigator.Navigator.pushReplacement(dart.dynamic, core.Object, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new database.ConnectedScreen.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToConnectedScreen())}));
        } else {
          main.serverstate = false;
        }
        this.setState(dart.fn(() => {
        }, VoidToNull()));
      }, VoidToNull()));
      super.initState();
    }
    build(context) {
      let size = media_query.MediaQuery.of(context).size;
      let queryState = core.Uri.base.hasQuery;
      if (dart.equals(queryState, true)) {
        this.sIDController.text = core.String._check(main.serverid);
      }
      return new scaffold.Scaffold.new({body: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Center.new({child: new image.Image.asset("assets/img/light_bg.jpg", {width: size.width, height: size.height, fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Center.new({child: new image.Image.asset("assets/img/logo.png", {width: size.width, height: 100.0, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new basic.Center.new({child: new container.Container.new({child: new image.Image.asset("assets/img/title.png", {width: size.width, height: 200.0, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), new container.Container.new({width: 205.0, child: new basic.Padding.new({padding: C30 || CT.C30, child: new text_form_field.TextFormField.new({controller: this.sIDController, textDirection: ui.TextDirection.ltr, keyboardType: text_input.TextInputType.number, textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontStyle: ui.FontStyle.normal, fontSize: 80.0, color: new ui.Color.fromARGB(255, 21, 46, 102)}), maxLength: 4, decoration: new input_decorator.InputDecoration.new({enabledBorder: new input_border.UnderlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.white})}), border: new input_border.UnderlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.blue})}), hintText: "Input Server ID here", hintStyle: new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic, fontWeight: ui.FontWeight.w500, fontSize: 20.0, color: colors.Colors.black45})}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new basic.Center.new({child: new basic.SizedBox.new({width: 200, child: new raised_button.RaisedButton.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(18.0)}), onPressed: dart.fn(() => {
                      }, VoidToNull()), child: C48 || CT.C48, $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), new basic.Center.new({child: new basic.SizedBox.new({width: 200, child: new raised_button.RaisedButton.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(18.0)}), onPressed: dart.fn(() => {
                        js.context.callMethod("open", [main.mylink]);
                      }, VoidToNull()), child: C61 || CT.C61, $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71})]), $creationLocationd_0dea112b090073317d4: C74 || CT.C74})]), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82});
    }
  };
  (main._JoinScreen.new = function() {
    this.sIDController = new editable_text.TextEditingController.new();
    main._JoinScreen.__proto__.new.call(this);
    ;
  }).prototype = main._JoinScreen.prototype;
  dart.addTypeTests(main._JoinScreen);
  dart.setMethodSignature(main._JoinScreen, () => ({
    __proto__: dart.getMethods(main._JoinScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._JoinScreen, "package:scorpioapp/main.dart");
  dart.setFieldSignature(main._JoinScreen, () => ({
    __proto__: dart.getFields(main._JoinScreen.__proto__),
    sIDController: dart.finalFieldType(editable_text.TextEditingController)
  }));
  let C87;
  let C88;
  let C89;
  let C90;
  let C86;
  let C85;
  let C93;
  let C92;
  let C91;
  let C96;
  let C97;
  let C98;
  let C95;
  let C94;
  let C101;
  let C100;
  let C99;
  let C104;
  let C105;
  let C106;
  let C103;
  let C102;
  let C109;
  let C110;
  let C111;
  let C108;
  let C107;
  let C114;
  let C113;
  let C112;
  let C117;
  let C116;
  let C115;
  let C120;
  let C121;
  let C122;
  let C119;
  let C118;
  let C123;
  let C126;
  let C127;
  let C128;
  let C125;
  let C124;
  let C131;
  let C132;
  let C130;
  let C129;
  let C135;
  let C134;
  let C133;
  let C138;
  let C137;
  let C136;
  let C141;
  let C140;
  let C139;
  main.LockScreen = class LockScreen extends framework.StatelessWidget {
    build(context) {
      main.currentcontext = context;
      let size = media_query.MediaQuery.of(context).size;
      return new scaffold.Scaffold.new({body: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Center.new({child: new image.Image.asset("assets/img/dark_bg.jpg", {width: size.width, height: size.height, fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new image.Image.asset("assets/img/icon.png", {width: 150.0, height: 150.0, $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), new container.Container.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), new container.Container.new({width: size.width, height: 100.0, child: new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("Please Wait", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 25.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), new text.Text.new("Waiting other users to join Constellation", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107})]), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), new raised_button.RaisedButton.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(18.0)}), onPressed: dart.fn(() => {
                      navigator.Navigator.pop(core.Object, context);
                    }, VoidToNull()), child: C123 || CT.C123, $creationLocationd_0dea112b090073317d4: C124 || CT.C124})]), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), $creationLocationd_0dea112b090073317d4: C133 || CT.C133})]), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), $creationLocationd_0dea112b090073317d4: C139 || CT.C139});
    }
  };
  (main.LockScreen.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.LockScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.LockScreen.prototype;
  dart.addTypeTests(main.LockScreen);
  dart.setMethodSignature(main.LockScreen, () => ({
    __proto__: dart.getMethods(main.LockScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.LockScreen, "package:scorpioapp/main.dart");
  let C142;
  let C145;
  let C146;
  let C147;
  let C144;
  let C143;
  main.check = function check() {
    core.Uri.tryParse(html.window[$location].href);
    if (dart.test(core.Uri.base.hasQuery)) {
      main.serverid = core.Uri.base.queryParameters[$_get]("sid");
      main.querystate = true;
    }
    return new main.JoinScreen.new({$creationLocationd_0dea112b090073317d4: C142 || CT.C142});
  };
  main.myApp = function myApp() {
    return new app.MaterialApp.new({title: "Scorp.io | Create your own constellation", theme: theme_data.ThemeData.new({fontFamily: "Roboto", primaryColor: main.primCol, accentColor: main.acCol}), home: framework.Widget._check(main.check()), $creationLocationd_0dea112b090073317d4: C143 || CT.C143});
  };
  main.main = function main$() {
    binding.runApp(framework.Widget._check(main.myApp()));
  };
  main['HexColor|fromHex'] = function HexColor$124fromHex(hexString) {
    let buffer = new core.StringBuffer.new();
    if (hexString.length === 6 || hexString.length === 7) buffer.write("ff");
    buffer.write(hexString[$replaceFirst]("#", ""));
    return new ui.Color.new(core.int.parse(buffer.toString(), {radix: 16}));
  };
  main['HexColor|toHex'] = function HexColor$124toHex($this, opts) {
    let leadingHashSign = opts && 'leadingHashSign' in opts ? opts.leadingHashSign : true;
    return (dart.test(leadingHashSign) ? "#" : "") + $this.alpha[$toRadixString](16) + $this.red[$toRadixString](16) + $this.green[$toRadixString](16) + $this.blue[$toRadixString](16);
  };
  main['HexColor|get#toHex'] = function HexColor$124get$35toHex($this) {
    return dart.fn(opts => {
      let leadingHashSign = opts && 'leadingHashSign' in opts ? opts.leadingHashSign : true;
      return main['HexColor|toHex']($this, {leadingHashSign: leadingHashSign});
    }, __ToString());
  };
  dart.defineLazy(main, {
    /*main.firebaseLink*/get firebaseLink() {
      return "https://scorp-io.firebaseio.com";
    },
    /*main.serverid*/get serverid() {
      return null;
    },
    set serverid(_) {},
    /*main.querystate*/get querystate() {
      return false;
    },
    set querystate(_) {},
    /*main.serverstate*/get serverstate() {
      return false;
    },
    set serverstate(_) {},
    /*main.mylink*/get mylink() {
      return "https://github.com/alfianisnan26/Scorpio";
    },
    /*main.primCol*/get primCol() {
      return main['HexColor|fromHex']("#498CB0");
    },
    set primCol(_) {},
    /*main.acCol*/get acCol() {
      return main['HexColor|fromHex']("#A2C6DE");
    },
    set acCol(_) {},
    /*main.currentcontext*/get currentcontext() {
      return null;
    },
    set currentcontext(_) {}
  });
  const state$ = dart.privateName(database, "ScreenVal.state");
  const testColor$ = dart.privateName(database, "ScreenVal.testColor");
  database.ScreenVal = class ScreenVal extends core.Object {
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
    get testColor() {
      return this[testColor$];
    }
    set testColor(value) {
      super.testColor = value;
    }
    static fromJson(json) {
      return new database.ScreenVal.new({state: core.bool._check(json[$_get]("State")), testColor: core.String._check(json[$_get]("TestColor"))});
    }
  };
  (database.ScreenVal.new = function(opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    let testColor = opts && 'testColor' in opts ? opts.testColor : null;
    this[state$] = state;
    this[testColor$] = testColor;
    ;
  }).prototype = database.ScreenVal.prototype;
  dart.addTypeTests(database.ScreenVal);
  dart.setLibraryUri(database.ScreenVal, "package:scorpioapp/database.dart");
  dart.setFieldSignature(database.ScreenVal, () => ({
    __proto__: dart.getFields(database.ScreenVal.__proto__),
    state: dart.finalFieldType(core.bool),
    testColor: dart.finalFieldType(core.String)
  }));
  const dateS$ = dart.privateName(database, "Post.dateS");
  const maxC$ = dart.privateName(database, "Post.maxC");
  const servName$ = dart.privateName(database, "Post.servName");
  const type$ = dart.privateName(database, "Post.type");
  const uID$ = dart.privateName(database, "Post.uID");
  database.Post = class Post extends core.Object {
    get dateS() {
      return this[dateS$];
    }
    set dateS(value) {
      super.dateS = value;
    }
    get maxC() {
      return this[maxC$];
    }
    set maxC(value) {
      super.maxC = value;
    }
    get servName() {
      return this[servName$];
    }
    set servName(value) {
      super.servName = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get uID() {
      return this[uID$];
    }
    set uID(value) {
      super.uID = value;
    }
    static fromJson(json) {
      return new database.Post.new({dateS: core.int._check(json[$_get]("Date")), maxC: core.int._check(json[$_get]("MaxC")), servName: core.String._check(json[$_get]("ServerName")), type: core.int._check(json[$_get]("Type"))});
    }
  };
  (database.Post.new = function(opts) {
    let dateS = opts && 'dateS' in opts ? opts.dateS : null;
    let maxC = opts && 'maxC' in opts ? opts.maxC : null;
    let servName = opts && 'servName' in opts ? opts.servName : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let uID = opts && 'uID' in opts ? opts.uID : null;
    this[dateS$] = dateS;
    this[maxC$] = maxC;
    this[servName$] = servName;
    this[type$] = type;
    this[uID$] = uID;
    ;
  }).prototype = database.Post.prototype;
  dart.addTypeTests(database.Post);
  dart.setLibraryUri(database.Post, "package:scorpioapp/database.dart");
  dart.setFieldSignature(database.Post, () => ({
    __proto__: dart.getFields(database.Post.__proto__),
    dateS: dart.finalFieldType(core.int),
    maxC: dart.finalFieldType(core.int),
    servName: dart.finalFieldType(core.String),
    type: dart.finalFieldType(core.int),
    uID: dart.finalFieldType(core.int)
  }));
  database.ColorScreen = class ColorScreen extends framework.StatefulWidget {
    createState() {
      return new database._ColorScreen.new();
    }
  };
  (database.ColorScreen.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    database.ColorScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = database.ColorScreen.prototype;
  dart.addTypeTests(database.ColorScreen);
  dart.setMethodSignature(database.ColorScreen, () => ({
    __proto__: dart.getMethods(database.ColorScreen.__proto__),
    createState: dart.fnType(database._ColorScreen, [])
  }));
  dart.setLibraryUri(database.ColorScreen, "package:scorpioapp/database.dart");
  const _timer = dart.privateName(database, "_timer");
  let C148;
  let C151;
  let C152;
  let C153;
  let C154;
  let C150;
  let C149;
  let C157;
  let C156;
  let C155;
  let C160;
  let C161;
  let C162;
  let C159;
  let C158;
  let C165;
  let C166;
  let C167;
  let C164;
  let C163;
  database._ColorScreen = class _ColorScreen extends framework.State$(database.ColorScreen) {
    initState() {
      this.init = false;
      super.initState();
      this.screenColor = database.colorScreen;
      this[_timer] = async.Timer.periodic(new core.Duration.new({milliseconds: 1}), dart.fn(t => this.updateColor(database.colorScreen), TimerTovoid()));
    }
    updateColor(color) {
      this.init = true;
      if (!dart.equals(color, this.screenColor)) {
        this.setState(dart.fn(() => {
          this.screenColor = core.String._check(color);
        }, VoidToNull()));
      }
      if (dart.equals(database.clientState, false)) navigator.Navigator.pushReplacement(dart.dynamic, core.Object, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new main.JoinScreen.new({$creationLocationd_0dea112b090073317d4: C148 || CT.C148}), BuildContextToJoinScreen())}));
    }
    dispose() {
      this[_timer].cancel();
      super.dispose();
    }
    build(context) {
      database.colorScreenContext = context;
      let size = media_query.MediaQuery.of(context).size;
      return new scaffold.Scaffold.new({body: new implicit_animations.AnimatedContainer.new({width: size.width, height: size.height, duration: dart.test(this.init) ? this.time : new core.Duration.new({seconds: 0}), color: main['HexColor|fromHex'](this.screenColor), $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), backgroundColor: colors.Colors.transparent, floatingActionButton: new floating_action_button.FloatingActionButton.new({child: new icon.Icon.new(this.icon, {$creationLocationd_0dea112b090073317d4: C155 || CT.C155}), backgroundColor: main['HexColor|fromHex'](this.screenColor), onPressed: dart.fn(() => {
            this.setState(dart.fn(() => {
              database.fullscreen = !dart.test(database.fullscreen);
              if (dart.equals(database.fullscreen, false)) {
                this.icon = icons.Icons.fullscreen;
                html.window[$document].exitFullscreen();
              } else if (dart.equals(database.fullscreen, true)) {
                this.icon = icons.Icons.fullscreen_exit;
                html.window[$document].documentElement[$requestFullscreen]();
              }
            }, VoidToNull()));
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C158 || CT.C158}), $creationLocationd_0dea112b090073317d4: C163 || CT.C163});
    }
  };
  (database._ColorScreen.new = function() {
    this.screenColor = null;
    this[_timer] = null;
    this.init = null;
    this.time = new core.Duration.new({milliseconds: 500});
    this.icon = icons.Icons.fullscreen_exit;
    database._ColorScreen.__proto__.new.call(this);
    ;
  }).prototype = database._ColorScreen.prototype;
  dart.addTypeTests(database._ColorScreen);
  dart.setMethodSignature(database._ColorScreen, () => ({
    __proto__: dart.getMethods(database._ColorScreen.__proto__),
    updateColor: dart.fnType(dart.void, [dart.dynamic]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(database._ColorScreen, "package:scorpioapp/database.dart");
  dart.setFieldSignature(database._ColorScreen, () => ({
    __proto__: dart.getFields(database._ColorScreen.__proto__),
    screenColor: dart.fieldType(core.String),
    [_timer]: dart.fieldType(async.Timer),
    init: dart.fieldType(core.bool),
    time: dart.finalFieldType(core.Duration),
    icon: dart.fieldType(icon_data.IconData)
  }));
  database.ConnectedScreen = class ConnectedScreen extends framework.StatefulWidget {
    createState() {
      return new database._MyAppState.new();
    }
  };
  (database.ConnectedScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    database.ConnectedScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = database.ConnectedScreen.prototype;
  dart.addTypeTests(database.ConnectedScreen);
  dart.setMethodSignature(database.ConnectedScreen, () => ({
    __proto__: dart.getMethods(database.ConnectedScreen.__proto__),
    createState: dart.fnType(database._MyAppState, [])
  }));
  dart.setLibraryUri(database.ConnectedScreen, "package:scorpioapp/database.dart");
  let C170;
  let C171;
  let C172;
  let C173;
  let C169;
  let C168;
  let C176;
  let C175;
  let C174;
  let C179;
  let C180;
  let C181;
  let C178;
  let C177;
  let C184;
  let C185;
  let C186;
  let C183;
  let C182;
  let C189;
  let C190;
  let C191;
  let C188;
  let C187;
  let C194;
  let C193;
  let C192;
  let C197;
  let C198;
  let C199;
  let C196;
  let C195;
  let C202;
  let C203;
  let C204;
  let C201;
  let C200;
  let C207;
  let C206;
  let C205;
  let C208;
  let C211;
  let C212;
  let C213;
  let C210;
  let C209;
  let C216;
  let C215;
  let C214;
  let C217;
  let C218;
  let C221;
  let C222;
  let C223;
  let C224;
  let C220;
  let C219;
  let C227;
  let C228;
  let C226;
  let C225;
  let C231;
  let C230;
  let C229;
  let C234;
  let C233;
  let C232;
  let C237;
  let C238;
  let C239;
  let C236;
  let C235;
  let C242;
  let C241;
  let C240;
  let C243;
  let C246;
  let C247;
  let C248;
  let C245;
  let C244;
  let C251;
  let C252;
  let C253;
  let C250;
  let C249;
  let C256;
  let C255;
  let C254;
  let C259;
  let C258;
  let C257;
  let C262;
  let C263;
  let C261;
  let C260;
  let C266;
  let C267;
  let C265;
  let C264;
  let C270;
  let C271;
  let C272;
  let C269;
  let C268;
  let C275;
  let C274;
  let C273;
  let C278;
  let C277;
  let C276;
  let C281;
  let C280;
  let C279;
  database._MyAppState = class _MyAppState extends framework.State$(database.ConnectedScreen) {
    initState() {
      database.boxL.addListener(dart.fn(() => {
        if (database.boxL.text.length === 4 && dart.equals(this.boxLState, false)) {
          this.boxLState = true;
          core.print(database.boxL.text);
          database.writeuserFriend(core.int._check(main.serverid), database.clientid, "L", core.int.parse(database.boxL.text));
        } else if (database.boxL.text.length < 4) this.boxLState = false;
      }, VoidToNull()));
      database.boxR.addListener(dart.fn(() => {
        if (database.boxR.text.length === 4 && dart.equals(this.boxRState, false)) {
          this.boxRState = true;
          core.print(database.boxR.text);
          database.writeuserFriend(core.int._check(main.serverid), database.clientid, "R", core.int.parse(database.boxR.text));
        } else if (database.boxR.text.length < 4) this.boxRState = false;
      }, VoidToNull()));
      database.boxF.addListener(dart.fn(() => {
        if (database.boxF.text.length === 4 && dart.equals(this.boxFState, false)) {
          this.boxFState = true;
          core.print(database.boxF.text);
          database.writeuserFriend(core.int._check(main.serverid), database.clientid, "F", core.int.parse(database.boxF.text));
        } else if (database.boxF.text.length < 4) this.boxFState = false;
      }, VoidToNull()));
      database.boxB.addListener(dart.fn(() => {
        if (database.boxB.text.length === 4 && dart.equals(this.boxBState, false)) {
          this.boxBState = true;
          core.print(database.boxB.text);
          database.writeuserFriend(core.int._check(main.serverid), database.clientid, "B", core.int.parse(database.boxB.text));
        } else if (database.boxB.text.length < 4) this.boxBState = false;
      }, VoidToNull()));
      super.initState();
      this.post = database.fetchPost(main.serverid);
    }
    dispose() {
      super.dispose();
    }
    build(context) {
      main.currentcontext = context;
      let size = media_query.MediaQuery.of(context).size;
      return new scaffold.Scaffold.new({body: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Center.new({child: new image.Image.asset("assets/img/dark_bg.jpg", {width: size.width, height: size.height, fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C168 || CT.C168}), $creationLocationd_0dea112b090073317d4: C174 || CT.C174}), new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new (FutureBuilderOfPost()).new({future: this.post, builder: dart.fn((context, snapshot) => {
                      let data = null;
                      if (dart.test(snapshot.hasData) && !dart.test(snapshot.hasError)) {
                        data = snapshot.data.dateS;
                        if (dart.equals(data, new core.DateTime.now().day)) {
                          let sname = snapshot.data.servName;
                          let sID = main.serverid;
                          let uid = database.clientid;
                          return new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("Connected to :", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C177 || CT.C177}), new text.Text.new(dart.str(sname), {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 25.0, fontWeight: ui.FontWeight.w400}), $creationLocationd_0dea112b090073317d4: C182 || CT.C182}), new text.Text.new("Server ID : " + dart.str(sID), {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0, fontWeight: ui.FontWeight.w400}), $creationLocationd_0dea112b090073317d4: C187 || CT.C187}), new container.Container.new({height: 50.0, $creationLocationd_0dea112b090073317d4: C192 || CT.C192}), new text.Text.new("Your UserID :", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C195 || CT.C195}), new text.Text.new(dart.str(uid), {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 80.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C200 || CT.C200}), new container.Container.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C205 || CT.C205}), database.userInput(context, snapshot), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(18.0)}), onPressed: dart.fn(() => {
                                        database.boxR.text = null;
                                        database.boxL.text = null;
                                        database.boxF.text = null;
                                        database.boxB.text = null;
                                        database.deletUID(core.int._check(main.serverid), database.clientid);
                                        main.serverid = null;
                                        database.clientState = false;
                                        navigator.Navigator.pushReplacement(dart.dynamic, core.Object, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new main.JoinScreen.new({$creationLocationd_0dea112b090073317d4: C208 || CT.C208}), BuildContextToJoinScreen())}));
                                      }, VoidToNull()), child: C123 || CT.C123, $creationLocationd_0dea112b090073317d4: C209 || CT.C209}), new container.Container.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C214 || CT.C214}), new raised_button.RaisedButton.new({color: main.primCol, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(18.0)}), onPressed: dart.fn(() => {
                                        navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new main.LockScreen.new({$creationLocationd_0dea112b090073317d4: C217 || CT.C217}), BuildContextToLockScreen())}));
                                      }, VoidToNull()), child: C218 || CT.C218, $creationLocationd_0dea112b090073317d4: C219 || CT.C219})]), $creationLocationd_0dea112b090073317d4: C225 || CT.C225})]), $creationLocationd_0dea112b090073317d4: C229 || CT.C229}), $creationLocationd_0dea112b090073317d4: C232 || CT.C232});
                        }
                      }
                      if (dart.test(snapshot.hasError) || dart.test(snapshot.hasData) && !dart.equals(data, new core.DateTime.now().day)) {
                        let myID = main.serverid;
                        return new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("Can't Connect to Server ID : " + dart.str(myID) + "\nPlease Try Again.", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 25.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C235 || CT.C235}), new container.Container.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C240 || CT.C240}), new container.Container.new({width: 100.0, height: 30.0, child: new raised_button.RaisedButton.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(18.0)}), onPressed: dart.fn(() => {
                                    database.deletUID(core.int._check(main.serverid), database.clientid);
                                    main.serverid = null;
                                    navigator.Navigator.pushReplacement(dart.dynamic, core.Object, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new main.JoinScreen.new({$creationLocationd_0dea112b090073317d4: C243 || CT.C243}), BuildContextToJoinScreen())}));
                                  }, VoidToNull()), child: C123 || CT.C123, $creationLocationd_0dea112b090073317d4: C244 || CT.C244}), $creationLocationd_0dea112b090073317d4: C249 || CT.C249})]), $creationLocationd_0dea112b090073317d4: C254 || CT.C254}), $creationLocationd_0dea112b090073317d4: C257 || CT.C257});
                      }
                      return new text.Text.new("Loading...", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 30.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C260 || CT.C260});
                    }, BuildContextAndAsyncSnapshotOfPostToWidget()), $creationLocationd_0dea112b090073317d4: C264 || CT.C264})]), $creationLocationd_0dea112b090073317d4: C268 || CT.C268}), $creationLocationd_0dea112b090073317d4: C273 || CT.C273})]), $creationLocationd_0dea112b090073317d4: C276 || CT.C276}), $creationLocationd_0dea112b090073317d4: C279 || CT.C279});
    }
  };
  (database._MyAppState.new = function() {
    this.post = null;
    this.boxLState = false;
    this.boxRState = false;
    this.boxFState = false;
    this.boxBState = false;
    database._MyAppState.__proto__.new.call(this);
    ;
  }).prototype = database._MyAppState.prototype;
  dart.addTypeTests(database._MyAppState);
  dart.setMethodSignature(database._MyAppState, () => ({
    __proto__: dart.getMethods(database._MyAppState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(database._MyAppState, "package:scorpioapp/database.dart");
  dart.setFieldSignature(database._MyAppState, () => ({
    __proto__: dart.getFields(database._MyAppState.__proto__),
    post: dart.fieldType(async.Future$(database.Post)),
    boxLState: dart.fieldType(core.bool),
    boxRState: dart.fieldType(core.bool),
    boxFState: dart.fieldType(core.bool),
    boxBState: dart.fieldType(core.bool)
  }));
  let C282;
  let C283;
  let C286;
  let C287;
  let C288;
  let C285;
  let C284;
  let C291;
  let C292;
  let C293;
  let C290;
  let C289;
  let C296;
  let C297;
  let C298;
  let C299;
  let C300;
  let C301;
  let C295;
  let C294;
  let C304;
  let C305;
  let C306;
  let C307;
  let C303;
  let C302;
  let C310;
  let C311;
  let C312;
  let C313;
  let C314;
  let C315;
  let C309;
  let C308;
  let C318;
  let C319;
  let C320;
  let C321;
  let C317;
  let C316;
  let C324;
  let C325;
  let C323;
  let C322;
  let C328;
  let C329;
  let C330;
  let C331;
  let C332;
  let C333;
  let C327;
  let C326;
  let C336;
  let C337;
  let C338;
  let C339;
  let C335;
  let C334;
  let C342;
  let C343;
  let C344;
  let C345;
  let C346;
  let C347;
  let C341;
  let C340;
  let C350;
  let C351;
  let C352;
  let C353;
  let C349;
  let C348;
  let C356;
  let C357;
  let C355;
  let C354;
  let C360;
  let C359;
  let C358;
  let C363;
  let C364;
  let C365;
  let C362;
  let C361;
  let C368;
  let C369;
  let C370;
  let C371;
  let C372;
  let C373;
  let C367;
  let C366;
  let C376;
  let C377;
  let C378;
  let C379;
  let C375;
  let C374;
  let C382;
  let C383;
  let C384;
  let C385;
  let C386;
  let C387;
  let C381;
  let C380;
  let C390;
  let C391;
  let C392;
  let C393;
  let C389;
  let C388;
  let C396;
  let C397;
  let C395;
  let C394;
  let C400;
  let C399;
  let C398;
  let C403;
  let C402;
  let C401;
  database.fetchServerState = function fetchServerState(server) {
    return async.async(dart.void, function* fetchServerState() {
      while (dart.test(database.clientState)) {
        let ret = (yield http.get("https://scorp-io.firebaseio.com" + "/ServerID/" + dart.str(server) + "/Global.json"));
        if (ret.body === "null" || ret.statusCode !== 200) {
          html.window[$document].exitFullscreen();
          if (dart.equals(database.serverstate, true)) {
            database.serverstate = false;
            database.fullscreen = false;
            html.window[$document].exitFullscreen();
            navigator.Navigator.pop(core.Object, framework.BuildContext._check(database.colorScreenContext));
          }
          database.clientState = false;
          navigator.Navigator.pushReplacement(dart.dynamic, core.Object, framework.BuildContext._check(main.currentcontext), new page.MaterialPageRoute.new({builder: dart.fn(context => new main.JoinScreen.new({$creationLocationd_0dea112b090073317d4: C282 || CT.C282}), BuildContextToJoinScreen())}));
          break;
        }
        if (ret.statusCode === 200) {
          let resp = database.ScreenVal.fromJson(MapOfString$dynamic()._check(convert.json.decode(ret.body)));
          if (dart.equals(database.serverstate, true) && database.colorScreen != resp.testColor) {
            database.colorScreen = resp.testColor;
          }
          if (!dart.equals(resp.state, database.serverstate)) {
            if (dart.equals(resp.state, true)) {
              database.serverstate = true;
              database.fullscreen = true;
              html.window[$document].documentElement[$requestFullscreen]();
              navigator.Navigator.push(dart.dynamic, framework.BuildContext._check(main.currentcontext), new page.MaterialPageRoute.new({builder: dart.fn(context => new database.ColorScreen.new({$creationLocationd_0dea112b090073317d4: C283 || CT.C283}), BuildContextToColorScreen())}));
            } else if (dart.equals(resp.state, false)) {
              database.serverstate = false;
              html.window[$document].exitFullscreen();
              database.fullscreen = false;
              navigator.Navigator.pop(core.Object, framework.BuildContext._check(database.colorScreenContext));
            }
          }
        }
      }
      return;
    });
  };
  database.fetchPost = function fetchPost(server) {
    return async.async(database.Post, function* fetchPost() {
      let response = (yield http.get("https://scorp-io.firebaseio.com" + "/ServerID/" + dart.str(server) + ".json"));
      if (response.statusCode === 200) {
        let ret = database.Post.fromJson(MapOfString$dynamic()._check(convert.json.decode(response.body)));
        if (ret.dateS == new core.DateTime.now().day) {
          database.clientid = (yield database.generateUserData(server));
          database.clientState = true;
          database.fetchServerState(server);
        } else
          database.clientid = 0;
        return ret;
      } else {
        dart.throw(core.Exception.new("Failed to load post"));
      }
    });
  };
  database.generateUserData = function generateUserData(server) {
    return async.async(core.int, function* generateUserData() {
      let rnd = null;
      let min = 1000;
      let max = 9000;
      let userID = null;
      while (true) {
        rnd = math.Random.new();
        userID = min + dart.notNull(rnd.nextInt(max - min));
        let response = (yield http.get("https://scorp-io.firebaseio.com" + "/ServerID/" + dart.str(server) + "/User/" + dart.str(userID) + ".json"));
        if (response.body === "null" && response.statusCode === 200) {
          let dateC = new (IdentityMapOfString$int()).from(["Date", database.now.day]);
          yield http.put("https://scorp-io.firebaseio.com" + "/ServerID/" + dart.str(server) + "/User/" + dart.str(userID) + ".json", {body: convert.jsonEncode(dateC)});
          break;
        } else if (response.statusCode !== 200 || response.body !== "null") {
          userID = 0;
          break;
        }
      }
      return userID;
    });
  };
  database.deletUID = function deletUID(sID, uID) {
    http.delete("https://scorp-io.firebaseio.com" + "/ServerID/" + dart.str(sID) + "/User/" + dart.str(uID) + ".json");
  };
  database.writeuserFriend = function writeuserFriend(sID, uID, pos, id) {
    http.patch("https://scorp-io.firebaseio.com" + "/ServerID/" + dart.str(sID) + "/User/" + dart.str(uID) + "/SideUsers.json", {body: convert.jsonEncode(new (IdentityMapOfString$int()).from([pos, id]))});
  };
  database.userInput = function userInput(context, data) {
    let child = null;
    database.usertype = data.data.type;
    if (data.data.type === 0)
      child = new text.Text.new("Please wait until the Scorp.io-server Start the Constellation\n", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C284 || CT.C284});
    else if (data.data.type === 2) {
      child = new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("Ask your Friend's UserID around you to fill the box bellow,\nand don't forget to tell them too.\nLeave it empty if next to you is no one\n", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C289 || CT.C289}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 10.0, vertical: 10.0}), width: 125.0, height: 100.0, child: new text_form_field.TextFormField.new({maxLength: 4, textAlign: ui.TextAlign.center, keyboardType: text_input.TextInputType.number, controller: database.boxL, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 25.0, fontWeight: ui.FontWeight.w700}), decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new(), disabledBorder: new input_border.OutlineInputBorder.new(), labelText: "Left UserID", labelStyle: new text_style.TextStyle.new({color: main.acCol, fontSize: 12.0, fontWeight: ui.FontWeight.w300})}), $creationLocationd_0dea112b090073317d4: C294 || CT.C294}), $creationLocationd_0dea112b090073317d4: C302 || CT.C302}), new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 10.0, vertical: 10.0}), width: 125.0, height: 100.0, child: new text_field.TextField.new({maxLength: 4, textAlign: ui.TextAlign.center, keyboardType: text_input.TextInputType.number, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 25.0, fontWeight: ui.FontWeight.w700}), controller: database.boxR, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new(), disabledBorder: new input_border.OutlineInputBorder.new(), labelText: "Right UserID", labelStyle: new text_style.TextStyle.new({color: main.acCol, fontSize: 12.0, fontWeight: ui.FontWeight.w300})}), $creationLocationd_0dea112b090073317d4: C308 || CT.C308}), $creationLocationd_0dea112b090073317d4: C316 || CT.C316})]), $creationLocationd_0dea112b090073317d4: C322 || CT.C322}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 10.0, vertical: 10.0}), width: 125.0, height: 100.0, child: new text_form_field.TextFormField.new({maxLength: 4, textAlign: ui.TextAlign.center, keyboardType: text_input.TextInputType.number, controller: database.boxF, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 25.0, fontWeight: ui.FontWeight.w700}), decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new(), disabledBorder: new input_border.OutlineInputBorder.new(), labelText: "Front UserID", labelStyle: new text_style.TextStyle.new({color: main.acCol, fontSize: 12.0, fontWeight: ui.FontWeight.w300})}), $creationLocationd_0dea112b090073317d4: C326 || CT.C326}), $creationLocationd_0dea112b090073317d4: C334 || CT.C334}), new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 10.0, vertical: 10.0}), width: 125.0, height: 100.0, child: new text_field.TextField.new({maxLength: 4, textAlign: ui.TextAlign.center, keyboardType: text_input.TextInputType.number, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 25.0, fontWeight: ui.FontWeight.w700}), controller: database.boxB, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new(), disabledBorder: new input_border.OutlineInputBorder.new(), labelText: "Back UserID", labelStyle: new text_style.TextStyle.new({color: main.acCol, fontSize: 12.0, fontWeight: ui.FontWeight.w300})}), $creationLocationd_0dea112b090073317d4: C340 || CT.C340}), $creationLocationd_0dea112b090073317d4: C348 || CT.C348})]), $creationLocationd_0dea112b090073317d4: C354 || CT.C354})]), $creationLocationd_0dea112b090073317d4: C358 || CT.C358});
    } else if (data.data.type === 1) {
      child = new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("Ask your Friend's UserID around you to fill the box bellow,\nand don't forget to tell them too.\nLeave it empty if next to you is no one\n", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C361 || CT.C361}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 10.0, vertical: 10.0}), width: 125.0, height: 100.0, child: new text_form_field.TextFormField.new({maxLength: 4, textAlign: ui.TextAlign.center, keyboardType: text_input.TextInputType.number, controller: database.boxL, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 25.0, fontWeight: ui.FontWeight.w700}), decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new(), disabledBorder: new input_border.OutlineInputBorder.new(), labelText: "Left UserID", labelStyle: new text_style.TextStyle.new({color: main.acCol, fontSize: 12.0, fontWeight: ui.FontWeight.w300})}), $creationLocationd_0dea112b090073317d4: C366 || CT.C366}), $creationLocationd_0dea112b090073317d4: C374 || CT.C374}), new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 10.0, vertical: 10.0}), width: 125.0, height: 100.0, child: new text_field.TextField.new({maxLength: 4, textAlign: ui.TextAlign.center, keyboardType: text_input.TextInputType.number, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 25.0, fontWeight: ui.FontWeight.w700}), controller: database.boxR, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new(), disabledBorder: new input_border.OutlineInputBorder.new(), labelText: "Right UserID", labelStyle: new text_style.TextStyle.new({color: main.acCol, fontSize: 12.0, fontWeight: ui.FontWeight.w300})}), $creationLocationd_0dea112b090073317d4: C380 || CT.C380}), $creationLocationd_0dea112b090073317d4: C388 || CT.C388})]), $creationLocationd_0dea112b090073317d4: C394 || CT.C394})]), $creationLocationd_0dea112b090073317d4: C398 || CT.C398});
    }
    return new basic.Center.new({child: child, $creationLocationd_0dea112b090073317d4: C401 || CT.C401});
  };
  dart.defineLazy(database, {
    /*database.rDl*/get rDl() {
      return "https://scorp-io.firebaseio.com";
    },
    /*database.usertype*/get usertype() {
      return null;
    },
    set usertype(_) {},
    /*database.now*/get now() {
      return new core.DateTime.now();
    },
    set now(_) {},
    /*database.rnd*/get rnd() {
      return math.Random.new();
    },
    set rnd(_) {},
    /*database.rnd2*/get rnd2() {
      return math.Random.new(database.now.millisecondsSinceEpoch);
    },
    set rnd2(_) {},
    /*database.clientid*/get clientid() {
      return null;
    },
    set clientid(_) {},
    /*database.serverid*/get serverid() {
      return null;
    },
    set serverid(_) {},
    /*database.clientState*/get clientState() {
      return false;
    },
    set clientState(_) {},
    /*database.serverstate*/get serverstate() {
      return false;
    },
    set serverstate(_) {},
    /*database.colorScreenContext*/get colorScreenContext() {
      return null;
    },
    set colorScreenContext(_) {},
    /*database.colorScreen*/get colorScreen() {
      return "#000000";
    },
    set colorScreen(_) {},
    /*database.fullscreen*/get fullscreen() {
      return false;
    },
    set fullscreen(_) {},
    /*database.boxL*/get boxL() {
      return new editable_text.TextEditingController.new();
    },
    /*database.boxR*/get boxR() {
      return new editable_text.TextEditingController.new();
    },
    /*database.boxF*/get boxF() {
      return new editable_text.TextEditingController.new();
    },
    /*database.boxB*/get boxB() {
      return new editable_text.TextEditingController.new();
    }
  });
  dart.trackLibraries("packages/scorpioapp/database", {
    "package:scorpioapp/main.dart": main,
    "package:scorpioapp/database.dart": database
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart","database.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuC+B;IAAa;;;;;;EAC5C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"database.ddc.js"}');
  // Exports:
  return {
    main: main,
    database: database
  };
});

//# sourceMappingURL=database.ddc.js.map
