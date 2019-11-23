import 'package:flutter/material.dart';
import 'dart:core';
import 'dart:html' as html;
import 'database.dart';
import 'dart:js' as js;

const firebaseLink = "https://scorp-io.firebaseio.com";

var serverid;
bool querystate = false;
bool serverstate = false;
const mylink = "https://github.com/alfianisnan26/Scorpio";

check() {
  Uri.tryParse(html.window.location.href);
  if (Uri.base.hasQuery) {
    serverid = Uri.base.queryParameters['sid'];
    querystate = true;
  }
  return JoinScreen();
}

var primCol = HexColor.fromHex('#498CB0');
var acCol = HexColor.fromHex('#A2C6DE');

myApp() {
  return new MaterialApp(
      title: 'Scorp.io | Create your own constellation',
      theme: ThemeData(
          fontFamily: 'Roboto', primaryColor: primCol, accentColor: acCol),
      home: check());
}

void main() {
  runApp(myApp());
}

class JoinScreen extends StatefulWidget {
  @override
  _JoinScreen createState() => _JoinScreen();
}

class _JoinScreen extends State<JoinScreen> {
  // Create a text controller and use it to retrieve the current value
  // of the TextField.
  final sIDController = TextEditingController();

  @override
  void dispose() {
    // Clean up the controller when the widget is disposed.
    sIDController.dispose();
    super.dispose();
  }

  @override
  void initState() {
    sIDController.addListener(() {
      if (sIDController.text.length == 4 && serverstate == false) {
        serverstate = true;
        serverid = int.parse(sIDController.text);
        sIDController.clear();
        Navigator.pushReplacement(context,
            MaterialPageRoute(builder: (context) => ConnectedScreen()));
      } else {
        serverstate = false;
      }
      setState(() {});
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    const double bWs = 200;
    bool queryState = Uri.base.hasQuery;
    if (queryState == true) {
      sIDController.text = serverid;
    }
    return new Scaffold(
        body: Stack(
      children: <Widget>[
        Center(
          child: new Image.asset("assets/img/light_bg.jpg",
              width: size.width, height: size.height, fit: BoxFit.cover),
        ),
        Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Center(
                child: Image.asset(
                  "assets/img/logo.png",
                  width: size.width,
                  height: 100.0,
                ),
              ),
              Center(
                child: Container(
                    child: Image.asset(
                  "assets/img/title.png",
                  width: size.width,
                  height: 200.0,
                )),
              ),
              Container(
                  width: 205.0,
                  child: Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: TextFormField(
                        controller: sIDController,
                        textDirection: TextDirection.ltr,
                        keyboardType: TextInputType.number,
                        textAlign: TextAlign.center,
                        style: new TextStyle(
                            fontWeight: FontWeight.bold,
                            fontStyle: FontStyle.normal,
                            fontSize: 80.0,
                            color: Color.fromARGB(255, 21, 46, 102)),
                        maxLength: 4,
                        decoration: InputDecoration(
                          enabledBorder: new UnderlineInputBorder(
                              borderSide: new BorderSide(color: Colors.white)),
                          border: new UnderlineInputBorder(
                              borderSide: new BorderSide(color: Colors.blue)),
                          hintText: "Input Server ID here",
                          hintStyle: TextStyle(
                            fontStyle: FontStyle.italic,
                            fontWeight: FontWeight.w500,
                            fontSize: 20,
                            color: Colors.black45,
                          ),
                        ),
                      ))),
              Center(
                child: SizedBox(
                  width: bWs,
                  child: RaisedButton(
                    shape: RoundedRectangleBorder(
                      borderRadius: new BorderRadius.circular(18.0),
                    ),
                    onPressed: () {
                       
                    },
                    child: const Text("Software Download"),
                  ),
                ),
              ),
              Center(
                child: SizedBox(
                  width: bWs,
                  child: RaisedButton(
                    shape: RoundedRectangleBorder(
                      borderRadius: new BorderRadius.circular(18.0),
                    ),
                    onPressed: () {
                      js.context.callMethod("open", [mylink]);
                    },
                    child: const Text("Documentation"),
                  ),
                ),
              ),
            ])
      ],
    ));
  }
}

var currentcontext;
class LockScreen extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    currentcontext = context;
    Size size = MediaQuery.of(context).size;
    return Scaffold(
        body: Stack(children: <Widget>[
      Center(
        child: new Image.asset("assets/img/dark_bg.jpg",
            width: size.width, height: size.height, fit: BoxFit.cover),
      ),
      Center(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          new Image.asset(
            "assets/img/icon.png",
            width: 150.0,
            height: 150.0,
          ),
          Container(
            height: 20.0,
          ),
          Container(
              width: size.width,
              height: 100.0,
              child: Center(
                child: Column(children: <Widget>[
                  Text(
                    "Please Wait",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 25,
                      fontWeight: FontWeight.w200,
                    ),
                  ),
                  Text(
                    "Waiting other users to join Constellation",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 15,
                      fontWeight: FontWeight.w200,
                    ),
                  ),
                ]),
              )),
          RaisedButton(
              shape: RoundedRectangleBorder(
                borderRadius: new BorderRadius.circular(18.0),
              ),
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Text("Back")),
        ],
      ))
    ]));
  }
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