import 'package:flutter/services.dart';

import 'database.dart' as db;
import 'package:flutter/material.dart';
import 'dart:core';
import 'dart:html' as html;
import 'dart:js' as js;

const firebaseLink = "https://scorp-io.firebaseio.com";

var serverid;
bool querystate = false;
bool serverstate = false;
const mylink = "https://github.com/alfianisnan26/ScorpioApp";

check() {
  Uri.tryParse(html.window.location.href);
  if (Uri.base.hasQuery) {
    serverid = Uri.base.queryParameters['sid'];
    querystate = true;
  }
}

var primCol = HexColor.fromHex('#498CB0');
var acCol = HexColor.fromHex('#A2C6DE');

myApp() {
  check();
  return new MaterialApp(
      title: 'Scorp.io | Create your own constellation',
      home: JoinScreen(),
      theme: ThemeData(
          fontFamily: 'Roboto', primaryColor: primCol, accentColor: acCol));
}

void main() {
  runApp(myApp());
}

class JoinScreen extends StatefulWidget {
  @override
  _JoinScreen createState() => _JoinScreen();
}

class _JoinScreen extends State<JoinScreen> {
  final sIDController = TextEditingController();
  bool state = false;

  void ackAlert(BuildContext context, var serv) async {
    db.post = db.fetchPost(serv);
    return showDialog(
        context: context,
        builder: (BuildContext context) {
          return Dialog(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12.0)), //this right here
              child: Container(
                  height: 150.0,
                  width: 250.0,
                  child: Center(
                      child: FutureBuilder<db.Post>(
                          future: db.post,
                          builder: (context, snapshot) {
                            if (snapshot.hasData && !snapshot.hasError) {
                              if (snapshot.data.dateS == DateTime.now().day) {
                                _dismissDialog(context);
                                Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) =>
                                            db.ConnectedScreen()));
                                db.fetchServerState(serv);
                                state = true;
                              }
                            }
                            if (snapshot.hasError ||
                                (snapshot.hasData &&
                                    snapshot.data.dateS !=
                                        DateTime.now().day)) {
                              //db.deletUID(serverid, db.clientid);
                              serverid = null;
                              return Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: <Widget>[
                                  Text(
                                    "Server Not Found\n",
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                      fontSize: 15.0,
                                      fontWeight: FontWeight.w500,
                                      color: Colors.black,
                                    ),
                                  ),
                                  Text(
                                    "Cannot connect to the ServerID : $serv\n"
                                    "Please try again. Make sure that you entered ServerID correctly",
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                      fontSize: 15.0,
                                      fontWeight: FontWeight.w300,
                                      color: Colors.black,
                                    ),
                                  )
                                ],
                              );
                            }
                            return CircularProgressIndicator();
                          }))));
        });
  }

  @override
  void dispose() {
    // Clean up the controller when the widget is disposed.
    state = false;
    sIDController.dispose();
    super.dispose();
  }

  @override
  void initState() {
    sIDController.addListener(() {
      if (sIDController.text.length == 4 && serverstate == false) {
        ackAlert(context, sIDController.text);
        sIDController.clear();
        serverstate = true;
      } else if (sIDController.text.length != 4) {
        serverstate = false;
      }
      setState(() {});
    });
    super.initState();
    querystate = Uri.base.hasQuery;
    if (querystate) {
      WidgetsBinding.instance.addPostFrameCallback((_) async {
        ackAlert(context, serverid);
      });
      querystate = false;
    }
  }

  @override
  Widget build(BuildContext context) {
    currentcontext = context;
    Size size = MediaQuery.of(context).size;
    bool pot = (size.height > size.width) ? true : false;
    const double bWs = 200;
    return Scaffold(
        body: Stack(
      children: <Widget>[
        Center(
          child: new Image.asset("assets/img/light_bg.jpg",
              width: size.width, height: size.height, fit: BoxFit.cover),
        ),
        Center(
            child: SingleChildScrollView(
                child: (pot)
                    ? Column(
                        children: <Widget>[
                          title(size),
                          form(bWs, sIDController, context, ackAlert, size)
                        ],
                      )
                    : Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          title(size),
                          form(bWs, sIDController, context, ackAlert, size)
                        ],
                      )))
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

void _showSimpleDialog(var context) {
  showDialog(
      context: context,
      builder: (context) {
        return SimpleDialog(
          title: Text('Choose a package to download'),
          children: <Widget>[
            SimpleDialogOption(
              onPressed: () {
                _dismissDialog(context);
              },
              child: const Text('Desktop Server (Installer .exe)'),
            ),
            SimpleDialogOption(
              onPressed: () {
                _dismissDialog(context);
              },
              child: const Text('Desktop Server (.zip)'),
            ),
            SimpleDialogOption(
              onPressed: () {
                _dismissDialog(context);
              },
              child: const Text('Android Client App (.apk)'),
            ),
            SimpleDialogOption(
              onPressed: () {
                _dismissDialog(context);
              },
              child: const Text('iOS Client App (.ipa)'),
            ),
          ],
        );
      });
}

void _dismissDialog(var context) {
  Navigator.pop(context);
}

Widget title(Size size) {
  return Column(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
    Image.asset(
      "assets/img/logo.png",
      width: 300.0,
      height: 100.0,
    ),
    Container(
        child: Image.asset(
      "assets/img/title.png",
      width: 300.0,
      height: 200.0,
    )),
  ]);
}

Widget form(var bWs, var sIDController, var context, var ackAlert, Size size) {
  return Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: <Widget>[
      Container(
          width: 220.0,
          child: TextFormField(
            onFieldSubmitted: (term) {
              if (sIDController.text.length == 4) {
                ackAlert(context, sIDController.text);
                sIDController.clear();
              }
            },
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
          )),
      SizedBox(
        width: bWs,
        child: RaisedButton(
          color: primCol,
          textColor: Colors.white,
          disabledColor: Color.fromRGBO(150, 150, 150, 100),
          disabledTextColor: Color.fromRGBO(50, 50, 50, 100),
          shape: RoundedRectangleBorder(
            borderRadius: new BorderRadius.circular(18.0),
          ),
          onPressed: serverstate
              ? () {
                  ackAlert(context, sIDController.text);
                  sIDController.clear();
                }
              : null,
          child: const Text("Join"),
        ),
      ),
      SizedBox(
        width: bWs,
        child: RaisedButton(
          shape: RoundedRectangleBorder(
            borderRadius: new BorderRadius.circular(18.0),
          ),
          onPressed: () {
            _showSimpleDialog(context);
          },
          child: const Text("Software Download"),
        ),
      ),
      SizedBox(
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
    ],
  );
}
