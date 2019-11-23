import 'dart:core';
import 'package:flutter/services.dart';
import 'package:flutter/material.dart';
import 'global.dart' as g;
import 'main.dart' as main;
import 'dart:html' as html;


String checkQuery() {
  Uri.tryParse(html.window.location.href);
  if (Uri.base.hasQuery) {
    String data = Uri.base.queryParameters['sid'];
    return data;
  }
  return null;
}

extension HexColor on Color {
  /// String is in the format "aabbcc" or "ffaabbcc" with an optional leading "#".
  static Color fromHex(String hexString) {
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff');
    buffer.write(hexString.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }

  /// Prefixes a hash sign if [leadingHashSign] is set to `true` (default is `true`).
  String toHex({bool leadingHashSign = true}) => '${leadingHashSign ? '#' : ''}'
      '${alpha.toRadixString(16)}'
      '${red.toRadixString(16)}'
      '${green.toRadixString(16)}'
      '${blue.toRadixString(16)}';
}