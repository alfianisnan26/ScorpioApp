import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'dart:html' as html;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'main.dart' as md;

const rDl = "https://scorp-io.firebaseio.com";

Future<Post> post;
int usertype;
var now = new DateTime.now();
Random rnd = new Random();
Random rnd2 = new Random(now.millisecondsSinceEpoch);
int clientid;
var serverid;
bool clientState = false;
bool serverstate = false;
var colorScreenContext;
String colorScreen = "#000000";
Post globalret;
int offset = 0;

int _t() {
    var ms = (new DateTime.now()).millisecondsSinceEpoch;
    return ((ms / 1000).round());
}

void _setColor(int delay, var color) async{
  while(color!=colorScreen){
    if(delay < (_t() + offset)){
      colorScreen = color;
      break;
    }
  }
  return;
}

Future<void> updateoffset() async{
  var out = await http.get("https://showcase.linx.twenty57.net:8081/UnixTime/tounix?date=now");
  var ms = (new DateTime.now()).millisecondsSinceEpoch;
  int s = ((ms / 1000).round());
  offset = int.parse(out.body) - s;
  print("out ${int.parse(out.body)} | s $s offset $offset");
  return;
}

void fetchServerState(var server) async {
  serverid = server;
  html.window.document.documentElement.requestFullscreen();
  while (clientState) {
    final ret = await http.get("$rDl/ServerID/$server/Global.json");
    if (ret.body == "null" || ret.statusCode != 200) {
      if (serverstate == true) {
        serverstate = false;
        Navigator.popUntil(colorScreenContext,
            ModalRoute.withName(Navigator.defaultRouteName));
        break;
      }
      clientState = false;
      Navigator.popUntil(
          md.currentcontext, ModalRoute.withName(Navigator.defaultRouteName));
      break;
    }
    if (ret.statusCode == 200) {
      var resp = ScreenVal.fromJson(json.decode((ret.body)));
      if (resp.state != serverstate) {
        serverstate = resp.state;
        if (resp.state == true) {
          await updateoffset();
          Navigator.push(md.currentcontext, SizeRoute(page: ColorScreen()));
        } else if (resp.state == false) {
          Navigator.pop(md.currentcontext);
          //break;
        }
      }
      if(resp.color.value!=colorScreen) _setColor(resp.color.delay, resp.color.value);
    }
  }
  return;
}

Future<Post> fetchPost(var server) async {
  final response = await http.get("$rDl/ServerID/$server.json");
  if (response.statusCode == 200) {
    var ret = Post.fromJson(json.decode(response.body));
    if (ret.dateS == DateTime.now().day) {
      clientid = await generateUserData(server);
      clientState = true;
      globalret = ret;
      usertype = ret.type;
      Navigator.pushReplacement(md.currentcontext,
          MaterialPageRoute(builder: (context) => ConnectedScreen()));
      fetchServerState(server);
    } else
      return ret;
  } else {
    throw Exception('Failed to load post');
  }
}

Future<int> generateUserData(var server) async {
  Random rnd;
  int min = 1000;
  int max = 9000;
  int userID;
  while (userID == null) {
    rnd = new Random();
    userID = min + rnd.nextInt(max - min);
    final response = await http.get("$rDl/ServerID/$server/User/$userID.json");
    if (response.body == "null" && response.statusCode == 200) {
      var dateC = {'Date': now.day};
      await http.put("$rDl/ServerID/$server/User/$userID.json",
          body: jsonEncode(dateC));
      break;
    } else if (response.statusCode != 200 || response.body != "null") {
      userID = null;
      break;
    }
  }
  if (clientid != null) userID = clientid;
  return userID;
}

void writeuserFriend(var sID, var uID, String pos, int id) {
  http.patch("$rDl/ServerID/$sID/User/$uID/SideUsers.json",
      body: jsonEncode({pos: id}));
}

class ColorData{
  final String value;
  final int delay;
  ColorData({this.delay,this.value});
  factory ColorData.fromJson(Map<String,dynamic> json){
    return ColorData(value: json['Value'],delay: json['Delay']);
  }
}

class TorchData{
  final bool value;
  final int delay;
  TorchData({this.delay,this.value});
  factory TorchData.fromJson(Map<String,dynamic> json){
    return TorchData(value: json['Value'],delay: json['Delay']);
  }
}

class ScreenVal {
  final bool state;
  final ColorData color;
  final TorchData torch;
  ScreenVal({this.state, this.color,this.torch});
  factory ScreenVal.fromJson(Map<String, dynamic> json) {
    return ScreenVal(state: json['State'], color: ColorData.fromJson(json['Color']), torch: TorchData.fromJson(json['Torch']));
  }
}

class Post {
  final int dateS;
  final int maxC;
  final String servName;
  final int type;
  final int uID;

  Post({this.dateS, this.maxC, this.servName, this.type, this.uID});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      dateS: json['Date'],
      maxC: json['MaxC'],
      servName: json['ServerName'],
      type: json['Type'],
    );
  }
}

class ColorScreen extends StatefulWidget {
  @override
  _ColorScreen createState() => _ColorScreen();
}

class _ColorScreen extends State<ColorScreen> {
  String screenColor;
  Timer _timer;
  bool init;
  final time = Duration(milliseconds: 500);

  @override
  void initState() {
    init = false;
    super.initState();
    screenColor = colorScreen;
    _timer = Timer.periodic(
        Duration(milliseconds: 1), (Timer t) => updateColor(colorScreen));
  }

  void updateColor(var color) {
    init = true;
    if (color != screenColor) {
      setState(() {
        screenColor = color;
      });
    }
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    colorScreenContext = context;
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.fullscreen, color: Colors.white),
        backgroundColor: md.HexColor.fromHex(screenColor),
        onPressed: () =>
            html.window.document.documentElement.requestFullscreen(),
      ),
      body: AnimatedContainer(
        width: size.width,
        height: size.height,
        duration: (init) ? time : Duration(seconds: 0),
        color: md.HexColor.fromHex(screenColor),
      ),
      backgroundColor: Colors.transparent,
    );
  }
}

class ConnectedScreen extends StatefulWidget {
  ConnectedScreen({Key key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

final boxL = TextEditingController();
final boxR = TextEditingController();
final boxF = TextEditingController();
final boxB = TextEditingController();

class _MyAppState extends State<ConnectedScreen> {
  bool boxLState = false;
  bool boxRState = false;
  bool boxFState = false;
  bool boxBState = false;
  @override
  void initState() {
    boxL.addListener(() {
      if (boxL.text.length == 4 && boxLState == false) {
        boxLState = true;
        print(boxL.text);
        writeuserFriend(serverid, clientid, "L", int.parse(boxL.text));
      } else if (boxL.text.length < 4) boxLState = false;
    });
    boxR.addListener(() {
      if (boxR.text.length == 4 && boxRState == false) {
        boxRState = true;
        print(boxR.text);
        writeuserFriend(serverid, clientid, "R", int.parse(boxR.text));
      } else if (boxR.text.length < 4) boxRState = false;
    });
    boxF.addListener(() {
      if (boxF.text.length == 4 && boxFState == false) {
        boxFState = true;
        print(boxF.text);
        writeuserFriend(serverid, clientid, "F", int.parse(boxF.text));
      } else if (boxF.text.length < 4) boxFState = false;
    });
    boxB.addListener(() {
      if (boxB.text.length == 4 && boxBState == false) {
        boxBState = true;
        print(boxB.text);
        writeuserFriend(serverid, clientid, "B", int.parse(boxB.text));
      } else if (boxB.text.length < 4) boxBState = false;
    });
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
    uIDdispose(clientid, serverid);
    clientid=null;
    serverid=null;
    boxB.clear();
    boxF.clear();
    boxL.clear();
    boxR.clear();
    boxBState=false;
    boxFState=false;
    boxLState=false;
    boxRState=false;
  }

  Future<bool> _onWillPop() {
    if (serverstate == true) {
      return showDialog(
              context: context,
              builder: (context) {
                return new AlertDialog(
                  title: Text('Constellation is Running'),
                  content: Text('Are you sure you want to leave?'),
                  actions: <Widget>[
                    FlatButton(
                        onPressed: () {
                          Navigator.of(context).pop(false);
                        },
                        child: Text('Cancel')),
                    FlatButton(
                      onPressed: () {
                        uIDdispose(clientid, serverid);
                        clientid = null;
                        serverid = null;
                        clientState = false;
                        Navigator.of(context).pop(true);
                      },
                      child: Text(
                        'Exit',
                        style: TextStyle(
                          color: Colors.red,
                        ),
                      ),
                    ),
                    FlatButton(
                      onPressed: () {
                        Navigator.of(context).pop(false);
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => ColorScreen()));
                      },
                      child: Text(
                        'Screen Color',
                        style: TextStyle(
                          color: Color.fromARGB(255, 21, 46, 102),
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    )
                  ],
                );
              }) ??
          false;
    } else
      Navigator.pop(context);
    return Future.value(true);
  }

  @override
  Widget build(BuildContext context) {
    md.currentcontext = context;
    Size size = MediaQuery.of(context).size;
    return new WillPopScope(
        onWillPop: _onWillPop,
        child: new Scaffold(
            floatingActionButton: FloatingActionButton(
              onPressed: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => md.LockScreen()));
              },
              child: Icon(Icons.lock_outline),
              backgroundColor: Colors.white,
              foregroundColor: md.primCol,
            ),
            body: Stack(children: <Widget>[
              Center(
                child: new Image.asset("assets/img/dark_bg.jpg",
                    width: size.width, height: size.height, fit: BoxFit.cover),
              ),
              Center(
                  child: SingleChildScrollView(
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text(
                        "Click to show QR Code",
                        style: TextStyle(
                            color: Color.fromRGBO(255, 255, 255, 50),
                            fontWeight: FontWeight.w100),
                      ),
                      Container(
                        height: 15.0,
                      ),
                      FlatButton(
                          onPressed: () => _showQR(
                              context,
                              "https://scorp-io.firebaseapp.com/join/" +
                                  serverid),
                          color: Colors.transparent,
                          child: Column(children: <Widget>[
                            Text(
                              "Connected to :",
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 15,
                                fontWeight: FontWeight.w100,
                              ),
                            ),
                            Text(
                              "${globalret.servName}",
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 25,
                                fontWeight: FontWeight.w400,
                              ),
                            ),
                            Text(
                              "Server ID : $serverid",
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 15,
                                fontWeight: FontWeight.w400,
                              ),
                            ),
                          ])),
                      Container(
                        height: 30.0,
                      ),
                      FlatButton(
                          onPressed: () =>
                              _showQR(context, clientid.toString()),
                          color: Colors.transparent,
                          child: Column(children: <Widget>[
                            Text(
                              "Your UserID :",
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 15,
                                fontWeight: FontWeight.w100,
                              ),
                            ),
                            Text(
                              "$clientid",
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 80,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ])),
                      Container(
                        height: 30.0,
                      ),
                      userInput(context),
                      Container(height: 20.0,),
                      RaisedButton(
                        color: Colors.red,
                        textColor: Colors.white,
                        shape: RoundedRectangleBorder(
                          borderRadius: new BorderRadius.circular(18.0),
                        ),
                        onPressed: () {
                          if(serverstate==true)_showAlertDialog(context);
                          else{
                            uIDdispose(clientid, serverid);
                            clientid = null;
                            serverid = null;
                            Navigator.pop(context);
                          }
                        },
                        child: const Text("Back"),
                      ),
                    ]),
              ))
            ])));
  }
}

Widget userInput(BuildContext context) {
  Widget child;
  if (usertype == 0)
    child = Text(
      "Please wait until the Scorp.io-server Start the Constellation\n",
      textAlign: TextAlign.center,
      style: TextStyle(
        color: Colors.white,
        fontSize: 15,
        fontWeight: FontWeight.w100,
      ),
    );
  else if (usertype == 2) {
    //Linear
    child = Column(
      children: <Widget>[
        Text(
          "Ask your Friend's UserID around you to fill the box bellow,\nand don't forget to tell them too.\nLeave it empty if next to you is no one\n",
          textAlign: TextAlign.center,
          style: TextStyle(
            color: Colors.white,
            fontSize: 15,
            fontWeight: FontWeight.w100,
          ),
        ),
        Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
          Container(
              padding: EdgeInsets.symmetric(
                horizontal: 10.0,
                vertical: 10.0,
              ),
              width: 125.0,
              height: 100.0,
              child: TextFormField(
                maxLength: 4,
                textAlign: TextAlign.center,
                keyboardType: TextInputType.number,
                controller: boxL,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 25.0,
                  fontWeight: FontWeight.w700,
                ),
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    disabledBorder: OutlineInputBorder(),
                    labelText: "Left UserID",
                    labelStyle: TextStyle(
                      color: md.acCol,
                      fontSize: 12.0,
                      fontWeight: FontWeight.w300,
                    )),
              )),
          Container(
              padding: EdgeInsets.symmetric(
                horizontal: 10.0,
                vertical: 10.0,
              ),
              width: 125.0,
              height: 100.0,
              child: TextField(
                maxLength: 4,
                textAlign: TextAlign.center,
                keyboardType: TextInputType.number,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 25.0,
                  fontWeight: FontWeight.w700,
                ),
                controller: boxR,
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    disabledBorder: OutlineInputBorder(),
                    labelText: "Right UserID",
                    labelStyle: TextStyle(
                      color: md.acCol,
                      fontSize: 12.0,
                      fontWeight: FontWeight.w300,
                    )),
              ))
        ]),
        Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
          Container(
              padding: EdgeInsets.symmetric(
                horizontal: 10.0,
                vertical: 10.0,
              ),
              width: 125.0,
              height: 100.0,
              child: TextFormField(
                maxLength: 4,
                textAlign: TextAlign.center,
                keyboardType: TextInputType.number,
                controller: boxF,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 25.0,
                  fontWeight: FontWeight.w700,
                ),
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    disabledBorder: OutlineInputBorder(),
                    labelText: "Front UserID",
                    labelStyle: TextStyle(
                      color: md.acCol,
                      fontSize: 12.0,
                      fontWeight: FontWeight.w300,
                    )),
              )),
          Container(
              padding: EdgeInsets.symmetric(
                horizontal: 10.0,
                vertical: 10.0,
              ),
              width: 125.0,
              height: 100.0,
              child: TextField(
                maxLength: 4,
                textAlign: TextAlign.center,
                keyboardType: TextInputType.number,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 25.0,
                  fontWeight: FontWeight.w700,
                ),
                controller: boxB,
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    disabledBorder: OutlineInputBorder(),
                    labelText: "Back UserID",
                    labelStyle: TextStyle(
                      color: md.acCol,
                      fontSize: 12.0,
                      fontWeight: FontWeight.w300,
                    )),
              ))
        ])
      ],
    );
  } else if (usertype == 1) {
    //Square
    child = Column(
      children: <Widget>[
        Text(
          "Ask your Friend's UserID around you to fill the box bellow,\nand don't forget to tell them too.\nLeave it empty if next to you is no one\n",
          textAlign: TextAlign.center,
          style: TextStyle(
            color: Colors.white,
            fontSize: 15,
            fontWeight: FontWeight.w100,
          ),
        ),
        Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
          Container(
              padding: EdgeInsets.symmetric(
                horizontal: 10.0,
                vertical: 10.0,
              ),
              width: 125.0,
              height: 100.0,
              child: TextFormField(
                maxLength: 4,
                textAlign: TextAlign.center,
                keyboardType: TextInputType.number,
                controller: boxL,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 25.0,
                  fontWeight: FontWeight.w700,
                ),
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    disabledBorder: OutlineInputBorder(),
                    labelText: "Left UserID",
                    labelStyle: TextStyle(
                      color: md.acCol,
                      fontSize: 12.0,
                      fontWeight: FontWeight.w300,
                    )),
              )),
          Container(
              padding: EdgeInsets.symmetric(
                horizontal: 10.0,
                vertical: 10.0,
              ),
              width: 125.0,
              height: 100.0,
              child: TextField(
                maxLength: 4,
                textAlign: TextAlign.center,
                keyboardType: TextInputType.number,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 25.0,
                  fontWeight: FontWeight.w700,
                ),
                controller: boxR,
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    disabledBorder: OutlineInputBorder(),
                    labelText: "Right UserID",
                    labelStyle: TextStyle(
                      color: md.acCol,
                      fontSize: 12.0,
                      fontWeight: FontWeight.w300,
                    )),
              ))
        ]),
      ],
    );
  }
  return new Center(child: child);
}

// Define a custom Form widget.

class TestScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Text("HelloWorld");
  }
}

void _dismissDialog(var context) {
  Navigator.pop(context);
}

void _showAlertDialog(var context) {
  showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text('Constellation is Running'),
          content: Text('Are you sure you want to leave?'),
          actions: <Widget>[
            FlatButton(
                onPressed: () {
                  _dismissDialog(context);
                },
                child: Text('Cancel')),
            FlatButton(
              onPressed: () {
                uIDdispose(clientid, serverid);
                clientid = null;
                serverid = null;
                clientState = false;
                _dismissDialog(context);
                Navigator.popUntil(md.currentcontext,
                    ModalRoute.withName(Navigator.defaultRouteName));
              },
              child: Text(
                'Exit',
                style: TextStyle(
                  color: Colors.red,
                ),
              ),
            ),
            FlatButton(
              onPressed: () {
                _dismissDialog(context);
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => ColorScreen()));
              },
              child: Text(
                'Screen Color',
                style: TextStyle(
                  color: Color.fromARGB(255, 21, 46, 102),
                  fontWeight: FontWeight.bold,
                ),
              ),
            )
          ],
        );
      });
}

void uIDdispose(int uid, var server) {
  http.put("$rDl/ServerID/$server/User/$uid.json", body: "null");
}

class SizeRoute extends PageRouteBuilder {
  final Widget page;
  SizeRoute({this.page})
      : super(
          pageBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
          ) =>
              page,
          transitionsBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
            Widget child,
          ) =>
              Align(
            child: SizeTransition(
              sizeFactor: animation,
              child: child,
            ),
          ),
        );
}

void _showQRoption(var context) {
  var h = 50.0;
  var w = 300.0;
  showDialog(
      context: context,
      builder: (context) {
        return SimpleDialog(
            shape: RoundedRectangleBorder(
              borderRadius: new BorderRadius.circular(25.0),
            ),
            title: Text(
              'Options',
              textAlign: TextAlign.center,
            ),
            children: <Widget>[
              Column(children: <Widget>[
                SizedBox(
                  height: h,
                  width: w,
                  child: Padding(
                    padding:
                        const EdgeInsets.only(left: 10, right: 10, top: 10),
                    child: RaisedButton(
                      child: Text(
                        "Show my UserID QR",
                        style: TextStyle(color: Colors.white),
                      ),
                      shape: RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(20.0),
                      ),
                      onPressed: () {
                        _dismissDialog(context);
                        _showQR(context, clientid.toString());
                      },
                      color: md.primCol,
                    ),
                  ),
                ),
                SizedBox(
                  height: h,
                  width: w,
                  child: Padding(
                    padding: const EdgeInsets.only(
                      left: 10,
                      right: 10,
                      top: 10,
                    ),
                    child: RaisedButton(
                      child: Text(
                        "Show ServerID QR",
                        style: TextStyle(color: Colors.white),
                      ),
                      shape: RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(20.0),
                      ),
                      onPressed: () {
                        String linkIn =
                            "https://scorp-io.firebaseapp.com/join/";
                        _dismissDialog(context);
                        _showQR(context, linkIn + serverid);
                      },
                      color: md.primCol,
                    ),
                  ),
                )
              ])
            ]);
      });
}

void _showQR(var context, String data) async {
  Size size = MediaQuery.of(context).size;
  showDialog(
      context: context,
      builder: (context) {
        return SimpleDialog(
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
            children: <Widget>[
              SizedBox(
                height: 350,
                width: 350,
                child: Padding(
                  padding: const EdgeInsets.all(30),
                  child: Image.network(
                    "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=$data",
                  ),
                ),
              ),
            ]);
      });
}