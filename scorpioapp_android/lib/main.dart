import 'package:flutter/services.dart';
import 'database.dart' as db;
import 'package:flutter/material.dart';
import 'package:flutter_speed_dial/flutter_speed_dial.dart';
import 'dart:core';
import 'package:url_launcher/url_launcher.dart';
import 'package:qrscan/qrscan.dart' as scanner;
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

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
        floatingActionButton: SpeedDial(
            backgroundColor: Colors.white,
            foregroundColor: primCol,
            overlayColor: Colors.black,
            overlayOpacity: 0.5,
            animatedIcon: AnimatedIcons.menu_close,
            children: [
              SpeedDialChild(
                backgroundColor: acCol,
                child: Icon(Icons.file_download),
                label: "Download",
                onTap: () => _dlc(context)
              ),
              SpeedDialChild(
                backgroundColor: acCol,
                child: Icon(Icons.exit_to_app),
                label: "Launch WebApp",
                onTap: () => _launchURL("https://scorp-io.web.app"),
              ),
              SpeedDialChild(
                backgroundColor: primCol,
                child: Icon(Icons.code),
                label: "Documentation",
                onTap: () => _launchURL(mylink),
              ),
              SpeedDialChild(
                  backgroundColor: Colors.green,
                  child: Icon(Icons.help_outline),
                  label: "Help",
                  onTap: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => HelpPage()));
                  }),
              SpeedDialChild(
                  backgroundColor: Colors.green,
                  child: Icon(Icons.info_outline),
                  label: "About",
                  onTap: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => AboutPage()));
                  }),
            ]),
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
          Container(
            height: 30,
          ),
          SizedBox(
            width: 180,
            height: 50,
            child: RaisedButton(
              elevation: 15,
              shape: RoundedRectangleBorder(
                  borderRadius: new BorderRadius.circular(30)),
              color: Colors.white,
              textColor: primCol,
              onPressed: () => _scan(),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Image.asset(
                    "assets/img/qr.png",
                    height: 30,
                    color: primCol,
                  ),
                  Text("Scan Server ID QR"),
                ],
              ),
            ),
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
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: Icon(Icons.lock_open),
          backgroundColor: Colors.white,
          foregroundColor: primCol,
        ),
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

_launchURL(String url) async {
  if (await canLaunch(url)) {
    await launch(url);
  } else {
    throw 'Could not launch $url';
  }
}

class HelpPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Help"),
      ),
      body: Text("This is Help Page"),
    );
  }
}

class AboutPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
        appBar: AppBar(
          title: const Text("About"),
        ),
        body: SingleChildScrollView(
          child: Container(
            width: size.width,
            child: Padding(
              padding: EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                new Image.asset(
                "assets/img/icon.png",
                width: 150.0,
                height: 150.0,),
                SizedBox(height: 10,),
                Text("Scorp.io",
                  style: TextStyle(fontSize: 40, fontWeight: FontWeight.bold, color: primCol),
                ),
                Text("Create your own constellation",
                  style: TextStyle(color: acCol, fontSize: 15)
                ),
                SizedBox(height: 20,),
                Text(
                  "Scorp.io is an application developed by Alfian Badrul Isnan "
                  "and Idham Ramadito in the project of advanced programming "
                  "subject, Computer Engineering, Engineering Faculty of Universitas Indonesia.\n\n"
                  "Scorp.io was formed with the idea of Internet of Things "
                  "based on the development of industry 4.0. The application "
                  "provides clients on the Android platform and web base, "
                  "User can download from our website.\n\n"
                  "Scorp.io uses Firebase's Real-Time Database by Google, "
                  "application development on the Android and Web platforms uses Google's Flutter.\n\n"
                  "This application is suitable for forming large group configurations, making beautiful and uniformly controlled "
                  "formations in a desktop server with Real-Time database.\n\n"
                  "Do not hesitate to give feedback on us so that our apps "
                  "can develop better.",
                  style: TextStyle(fontSize: 15.0),
                ),
              ]),
            ),
          ),
        ));
  }
}

Future<void> _dlc(var context) async {
  showDialog(
      context: context,
      builder: (BuildContext context) {
        return SimpleDialog(
          title: const Text('Select package'),
          children: <Widget>[
            SimpleDialogOption(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                Text("Windows Server (.zip 700 KB)"),
                Icon(FontAwesomeIcons.windows),
              ],),
              onPressed: () => _launchURL("https://scorp-io.web.app/assets/dlc/Scorpio.zip"),
            ),
            SimpleDialogOption(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                Text("Android Client (bundle) (.apk 19.2 MB)"),
                Icon(FontAwesomeIcons.android),
              ],),
              onPressed: () => _launchURL("https://scorp-io.web.app/assets/dlc/Scorpio.apk"),
            ),
            SimpleDialogOption(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                Text("Android Client (armeabi) (.apk 7,7 MB)"),
                Icon(FontAwesomeIcons.android),
              ],),
              onPressed: () => _launchURL("https://scorp-io.web.app/assets/dlc/Scorpio_arm.apk"),
            ),
            SimpleDialogOption(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                Text("Android Client (arm64) (.apk 8,0 MB)"),
                Icon(FontAwesomeIcons.android)
              ],),
              onPressed: () => _launchURL("https://scorp-io.web.app/assets/dlc/Scorpio_64.apk"),
            ),
            SimpleDialogOption(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                Text("Android Client (x86_64) (.apk 8,1 MB)"),
                Icon(FontAwesomeIcons.android),
              ],),
              onPressed: () =>_launchURL("https://scorp-io.web.app/assets/dlc/Scorpio_x86_64.apk"),
            ),
            SizedBox(height: 40, child: Center(child: Text("To download manually,\nyou can open s.id/scorpiodlc",
              textAlign:TextAlign.center)))
          ],
        );
      });
}
