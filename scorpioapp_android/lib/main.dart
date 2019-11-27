import 'package:flutter/services.dart';
import 'database.dart' as db;
import 'package:flutter/material.dart';
import 'dart:core';
import 'dart:typed_data';
import 'package:url_launcher/url_launcher.dart';
import 'package:qrscan/qrscan.dart' as scanner;

const firebaseLink = "https://scorp-io.firebaseio.com";

var serverid;
bool serverstate = false;
const mylink = "https://github.com/alfianisnan26/ScorpioApp";

var primCol = HexColor.fromHex('#498CB0');
var acCol = HexColor.fromHex('#A2C6DE');

myApp() {
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
  }

  Future _scan() async {
    String barcode = await scanner.scan();
    if (barcode != null && barcode.length > 38) {
      ackAlert(context, barcode.substring(38));
    }
  }

  bool torch = false;
  @override
  Widget build(BuildContext context) {
    currentcontext = context;
    Size size = MediaQuery.of(context).size;
    bool pot = (size.height > size.width) ? true : false;
    const double bWs = 200;
    return Scaffold(
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            _scan();
          },
          child: Image.asset(
            "assets/img/qr.png",
            height: 30,
          ),
          backgroundColor: primCol,
          foregroundColor: Colors.white,
        ),
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

  Widget title(Size size) {
    return Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
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

  Widget form(
      var bWs, var sIDController, var context, var ackAlert, Size size) {
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
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
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
                    _launchURL(mylink);
                  },
                  child: const Text("Documentation"),
                ),
              ),
              SizedBox(
                width: bWs,
                child: RaisedButton(
                  color: acCol,
                  shape: RoundedRectangleBorder(
                    borderRadius: new BorderRadius.circular(18.0),
                  ),
                  onPressed: () {
                    _launchURL("https://scorp-io.web.app");
                  },
                  child: const Text("Open Web Apps"),
                ),
              ),
            ],
          )
        ]);
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
                _launchURL("https://drive.google.com/uc?export=download&id=1V2kPPwdJSJ331XSkI2SvtXl5FQ9me50h");
              },
              child: const Text('Desktop Server (.zip)'),
            ),
            SimpleDialogOption(
              onPressed: () {
                _dismissDialog(context);
                _launchURL("https://drive.google.com/uc?export=download&id=1nur1n7GBRXv-NWVPuTEilZJpy94-Qu-a");
              },
              child: const Text('Android Client App (.apk)'),
            ),
          ],
        );
      });
}

void _dismissDialog(var context) {
  Navigator.pop(context);
}

_launchURL(String url) async {
  if (await canLaunch(url)) {
    await launch(url);
  } else {
    throw 'Could not launch $url';
  }
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String barcode = '';
  Uint8List bytes = Uint8List(200);

  @override
  initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Qrcode Scanner Example'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              SizedBox(
                width: 200,
                height: 200,
                child: Image.memory(bytes),
              ),
              Text('RESULT  $barcode'),
              RaisedButton(onPressed: _scan, child: Text("Scan")),
              RaisedButton(onPressed: _scanPhoto, child: Text("Scan Photo")),
              RaisedButton(
                  onPressed: _generateBarCode, child: Text("Generate Barcode")),
            ],
          ),
        ),
      ),
    );
  }

  Future _scan() async {
    String barcode = await scanner.scan();
    setState(() => this.barcode = barcode);
  }

  Future _scanPhoto() async {
    String barcode = await scanner.scanPhoto();
    setState(() => this.barcode = barcode);
  }

  Future _generateBarCode() async {
    Uint8List result = await scanner
        .generateBarCode('https://github.com/leyan95/qrcode_scanner');
    this.setState(() => this.bytes = result);
  }
}
