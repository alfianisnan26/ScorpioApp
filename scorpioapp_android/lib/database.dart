import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'package:Scorp.io/main.dart';
import 'package:torch_compat/torch_compat.dart';
import 'main.dart' as md;
import 'package:qrscan/qrscan.dart' as scanner;
import 'package:screen/screen.dart';

const rDl = "https://scorp-io.firebaseio.com";

bool torch;
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

int _t() {
  var ms = (new DateTime.now()).millisecondsSinceEpoch;
  return (ms / 1000).round();
}

void _setColor(int delay, var color) async {
  while (color != colorScreen) {
    if (delay < _t()) {
      colorScreen = color;
      break;
    }
  }
  return;
}

void _setTorch(int delay, bool state) async {
  while (torch != state) {
    if (delay < _t()) {
      torch = state;
      break;
    }
    if (torch == true)
      TorchCompat.turnOn();
    else
      TorchCompat.turnOff();
  }
  return;
}

void fetchServerState(var server) async {
  serverid = server;
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
          Navigator.push(md.currentcontext, SizeRoute(page: ColorScreen()));
        } else if (resp.state == false) {
          Navigator.pop(md.currentcontext);
          //break;
        }
      }
      if(resp.color.value!=colorScreen) _setColor(resp.color.delay, resp.color.value);
      if(resp.torch.value!=torch) _setTorch(resp.torch.delay, resp.torch.value);
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
    clientState = false;
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
  double brightness;

  void getBright() async {
    brightness = await Screen.brightness;
    Screen.setBrightness(1.0);
  }

  @override
  void initState() {
    getBright();
    torch = false;
    TorchCompat.turnOff();
    Screen.keepOn(true);
    SystemChrome.setEnabledSystemUIOverlays([]);
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
    if (torch = true) {
      torch = false;
      TorchCompat.turnOff();
    }
    _timer.cancel();
    Screen.keepOn(false);
    Screen.setBrightness(brightness);
    SystemChrome.setEnabledSystemUIOverlays(
        [SystemUiOverlay.bottom, SystemUiOverlay.top]);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    colorScreenContext = context;
    Size size = MediaQuery.of(context).size;
    return Scaffold(
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

bool boxLState = false;
bool boxRState = false;
bool boxFState = false;
bool boxBState = false;

class _MyAppState extends State<ConnectedScreen> {
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
    clientid = null;
    serverid = null;
    boxB.clear();
    boxF.clear();
    boxL.clear();
    boxR.clear();
    boxBState = false;
    boxFState = false;
    boxLState = false;
    boxRState = false;
  }

  Widget square(var ret, var usertype) {
    if (usertype == 2) {
      return Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          SizedBox(
              height: 60,
              width: 60,
              child: RaisedButton(
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(30.0)),
                child: Center(
                  child: Icon(
                    Icons.keyboard_arrow_up,
                    color: Colors.white,
                  ),
                ),
                color: acCol,
                onPressed: () {
                  _dismissDialog(context);
                  boxF.clear();
                  boxFState = true;
                  boxF.text = ret;
                  writeuserFriend(
                      serverid, clientid, "F", int.parse(boxF.text));
                },
              )),
          Container(
            width: 20,
          ),
          SizedBox(
              height: 60,
              width: 60,
              child: RaisedButton(
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(30.0)),
                child: Center(
                  child: Icon(
                    Icons.keyboard_arrow_down,
                    color: Colors.white,
                  ),
                ),
                color: acCol,
                onPressed: () {
                  _dismissDialog(context);
                  boxB.clear();
                  boxBState = true;
                  boxB.text = ret;
                  writeuserFriend(
                      serverid, clientid, "B", int.parse(boxB.text));
                },
              )),
        ],
      );
    }
    return Container();
  }

  void scanFriends(var context, int usertype) async {
    String ret = await scanner.scan();

    if (ret.length == 4) {
      showDialog(
          context: context,
          builder: (BuildContext context) {
            return Dialog(
                shape: RoundedRectangleBorder(
                    borderRadius:
                        BorderRadius.circular(12.0)), //this right here
                child: Container(
                    height: (usertype == 2) ? 220.0 : 120.0,
                    width: 200.0,
                    child: Center(
                      child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: <Widget>[
                            Text("Asign Scanned Friend's ID $clientid"),
                            Container(
                              height: 20,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                                SizedBox(
                                    height: 60,
                                    width: 60,
                                    child: RaisedButton(
                                      shape: RoundedRectangleBorder(
                                          borderRadius:
                                              BorderRadius.circular(30.0)),
                                      child: Center(
                                        child: Icon(
                                          Icons.keyboard_arrow_left,
                                          color: Colors.white,
                                        ),
                                      ),
                                      color: acCol,
                                      onPressed: () {
                                        _dismissDialog(context);
                                        boxL.clear();
                                        boxLState = true;
                                        boxL.text = ret;
                                        writeuserFriend(serverid, clientid, "L",
                                            int.parse(boxL.text));
                                      },
                                    )),
                                Container(
                                  width: 20,
                                ),
                                SizedBox(
                                    height: 60,
                                    width: 60,
                                    child: RaisedButton(
                                      shape: RoundedRectangleBorder(
                                          borderRadius:
                                              BorderRadius.circular(30.0)),
                                      child: Center(
                                        child: Icon(
                                          Icons.keyboard_arrow_right,
                                          color: Colors.white,
                                        ),
                                      ),
                                      color: acCol,
                                      onPressed: () {
                                        _dismissDialog(context);
                                        boxR.clear();
                                        boxRState = true;
                                        boxR.text = ret;
                                        writeuserFriend(serverid, clientid, "R",
                                            int.parse(boxR.text));
                                      },
                                    )),
                              ],
                            ),
                            Container(
                              height: (usertype == 2) ? 20 : 0,
                            ),
                            square(ret, usertype),
                            Container(
                              height: 10,
                            ),
                          ]),
                    )));
          });
    }
    return;
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
                      Container(
                        height: 20.0,
                      ),
                      SizedBox(
                          height: 50,
                          child: RaisedButton(
                            color: Colors.red,
                            textColor: Colors.white,
                            shape: RoundedRectangleBorder(
                              borderRadius: new BorderRadius.circular(30.0),
                            ),
                            onPressed: () {
                              if (serverstate == true)
                                _showAlertDialog(context);
                              else {
                                uIDdispose(clientid, serverid);
                                clientid = null;
                                serverid = null;
                                Navigator.pop(context);
                              }
                            },
                            child: const Text("Back"),
                          )),
                    ]),
              ))
            ])));
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
                )),
          ]),
          Container(
            height: 20,
          ),
          SizedBox(
            width: 200,
            height: 50,
            child: RaisedButton(
              elevation: 15,
              shape: RoundedRectangleBorder(
                  borderRadius: new BorderRadius.circular(30)),
              color: Colors.white,
              textColor: primCol,
              onPressed: () => scanFriends(context, usertype),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Image.asset(
                    "assets/img/qr.png",
                    height: 30,
                    color: primCol,
                  ),
                  Text("Scan Friend's ID QR"),
                ],
              ),
            ),
          )
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
                )),
          ]),
          Container(
            height: 20,
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
              onPressed: () => scanFriends(context, usertype),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Image.asset(
                    "assets/img/qr.png",
                    height: 30,
                    color: primCol,
                  ),
                  Text("Scan Friend's ID QR"),
                ],
              ),
            ),
          )
        ],
      );
    }
    return new Center(child: child);
  }
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

void _showQR(var context, String data) async {
  Uint8List res = await scanner.generateBarCode(data);
  showDialog(
      context: context,
      builder: (context) {
        return SimpleDialog(
            shape: RoundedRectangleBorder(
              borderRadius: new BorderRadius.circular(25.0),
            ),
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.all(20),
                child: Image.memory(res),
              ),
            ]);
      });
}
