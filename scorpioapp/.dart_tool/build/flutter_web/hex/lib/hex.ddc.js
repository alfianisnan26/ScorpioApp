define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hex = Object.create(dart.library);
  const $toRadixString = dartx.toRadixString;
  const $toUpperCase = dartx.toUpperCase;
  const $replaceAll = dartx.replaceAll;
  const $toLowerCase = dartx.toLowerCase;
  const $modulo = dartx['%'];
  const $truncate = dartx.truncate;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $indexOf = dartx.indexOf;
  const $_set = dartx._set;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: hex.HexEncoder.prototype,
        [HexEncoder_upperCase]: false
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: hex.HexDecoder.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: hex.HexCodec.prototype
      });
    }
  });
  const HexEncoder_upperCase = dart.privateName(hex, "HexEncoder.upperCase");
  let C0;
  let C1;
  hex.HexCodec = class HexCodec extends convert.Codec$(core.List$(core.int), core.String) {
    get encoder() {
      return C0 || CT.C0;
    }
    get decoder() {
      return C1 || CT.C1;
    }
  };
  (hex.HexCodec.new = function() {
    hex.HexCodec.__proto__.new.call(this);
    ;
  }).prototype = hex.HexCodec.prototype;
  dart.addTypeTests(hex.HexCodec);
  dart.setGetterSignature(hex.HexCodec, () => ({
    __proto__: dart.getGetters(hex.HexCodec.__proto__),
    encoder: convert.Converter$(core.List$(core.int), core.String),
    decoder: convert.Converter$(core.String, core.List$(core.int))
  }));
  dart.setLibraryUri(hex.HexCodec, "package:hex/hex.dart");
  hex.HexEncoder = class HexEncoder extends convert.Converter$(core.List$(core.int), core.String) {
    get upperCase() {
      return this[upperCase$];
    }
    set upperCase(value) {
      super.upperCase = value;
    }
    convert(bytes) {
      ListOfint()._check(bytes);
      let buffer = new core.StringBuffer.new();
      for (let part of bytes) {
        if ((dart.notNull(part) & 255) !== part) {
          dart.throw(new core.FormatException.new("Non-byte integer detected"));
        }
        buffer.write((dart.notNull(part) < 16 ? "0" : "") + part[$toRadixString](16));
      }
      if (dart.test(this.upperCase)) {
        return buffer.toString()[$toUpperCase]();
      } else {
        return buffer.toString();
      }
    }
  };
  (hex.HexEncoder.new = function(opts) {
    let upperCase = opts && 'upperCase' in opts ? opts.upperCase : false;
    this[upperCase$] = upperCase;
    hex.HexEncoder.__proto__.new.call(this);
    ;
  }).prototype = hex.HexEncoder.prototype;
  dart.addTypeTests(hex.HexEncoder);
  const upperCase$ = HexEncoder_upperCase;
  dart.setMethodSignature(hex.HexEncoder, () => ({
    __proto__: dart.getMethods(hex.HexEncoder.__proto__),
    convert: dart.fnType(core.String, [core.Object])
  }));
  dart.setLibraryUri(hex.HexEncoder, "package:hex/hex.dart");
  dart.setFieldSignature(hex.HexEncoder, () => ({
    __proto__: dart.getFields(hex.HexEncoder.__proto__),
    upperCase: dart.finalFieldType(core.bool)
  }));
  hex.HexDecoder = class HexDecoder extends convert.Converter$(core.String, core.List$(core.int)) {
    convert(hex) {
      core.String._check(hex);
      let str = hex[$replaceAll](" ", "");
      str = str[$toLowerCase]();
      if (str.length[$modulo](2) !== 0) {
        str = "0" + str;
      }
      let result = _native_typed_data.NativeUint8List.new((str.length / 2)[$truncate]());
      for (let i = 0; i < dart.notNull(result[$length]); i = i + 1) {
        let firstDigit = "0123456789abcdef"[$indexOf](str[$_get](i * 2));
        let secondDigit = "0123456789abcdef"[$indexOf](str[$_get](i * 2 + 1));
        if (firstDigit === -1 || secondDigit === -1) {
          dart.throw(new core.FormatException.new("Non-hex character detected in " + dart.str(hex)));
        }
        result[$_set](i, (firstDigit << 4 >>> 0) + secondDigit);
      }
      return result;
    }
  };
  (hex.HexDecoder.new = function() {
    hex.HexDecoder.__proto__.new.call(this);
    ;
  }).prototype = hex.HexDecoder.prototype;
  dart.addTypeTests(hex.HexDecoder);
  dart.setMethodSignature(hex.HexDecoder, () => ({
    __proto__: dart.getMethods(hex.HexDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object])
  }));
  dart.setLibraryUri(hex.HexDecoder, "package:hex/hex.dart");
  let C2;
  dart.defineLazy(hex, {
    /*hex._ALPHABET*/get _ALPHABET() {
      return "0123456789abcdef";
    },
    /*hex.HEX*/get HEX() {
      return C2 || CT.C2;
    }
  });
  dart.trackLibraries("packages/hex/hex", {
    "package:hex/hex.dart": hex
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hex.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiB8C;IAAkB;;AAGlB;IAAkB;;;AANxD;;EAAU;;;;;;;;;IAcL;;;;;;YAKc;;AACV,mBAAa;AAC1B,eAAS,OAAQ,MAAK;AACpB,aAAS,aAAL,IAAI,IAAG,SAAQ,IAAI;AACiC,UAAtD,WAAU,6BAAgB;;AAEoC,QAAhE,AAAO,MAAD,OAAyD,CAA1C,aAAL,IAAI,IAAG,KAAK,MAAM,MAAK,AAAK,IAAD,iBAAe;;AAE5D,oBAAG;AACD,cAAO,AAAO,AAAW,OAAZ;;AAEb,cAAO,AAAO,OAAD;;IAEjB;;;QAhB4B;;AAAtB;;EAAwC;;;;;;;;;;;;;YAyBrB;;AAChB,gBAAM,AAAI,GAAD,cAAY,KAAK;AACV,MAAvB,MAAM,AAAI,GAAD;AACT,UAAG,AAAI,AAAO,GAAR,iBAAU,OAAK;AACJ,QAAf,MAAM,AAAI,MAAE,GAAG;;AAEP,mBAAa,uCAAqB,CAAX,AAAI,GAAD,UAAW;AAC/C,eAAQ,IAAI,GAAI,AAAE,CAAD,gBAAG,AAAO,MAAD,YAAU,IAAA,AAAC,CAAA;AAC/B,yBAAuB,6BAAQ,AAAG,GAAA,QAAC,AAAC,CAAA,GAAC;AACrC,0BAAwB,6BAAQ,AAAG,GAAA,QAAC,AAAC,AAAE,CAAF,GAAC,IAAE;AAC5C,YAAI,AAAW,UAAD,KAAI,CAAC,KAAK,AAAY,WAAD,KAAI,CAAC;AACyB,UAA/D,WAAU,6BAAgB,AAAoC,4CAAJ,GAAG;;AAEpB,QAA3C,AAAM,MAAA,QAAC,CAAC,EAAsB,CAAjB,AAAW,UAAD,IAAI,WAAK,WAAW;;AAE7C,YAAO,OAAM;IACf;;;AAnBM;;EAAY;;;;;;;;;MA/CP,aAAS;;;MAGhB,OAAG","file":"hex.ddc.js"}');
  // Exports:
  return {
    hex: hex
  };
});

//# sourceMappingURL=hex.ddc.js.map
