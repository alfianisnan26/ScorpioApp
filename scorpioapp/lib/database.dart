import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'dart:html' as html;
import "package:hex/hex.dart";
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'main.dart' as md;

const rDl = "https://scorp-io.firebaseio.com";

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
bool fullscreen = false;

void fetchServerState(var server) async {
  //_ColorScreen cs;
  while(clientState){
    final ret = await http.get("$rDl/ServerID/$server/Global.json");
    if(ret.body == "null"|| ret.statusCode!=200 ){
      html.window.document.exitFullscreen();
      if(serverstate == true){
        serverstate = false;
        fullscreen = false;
        html.window.document.exitFullscreen();
        Navigator.pop(colorScreenContext);
      }
      clientState = false;
      Navigator.pushReplacement(md.currentcontext, MaterialPageRoute(builder: (context) => md.JoinScreen()));
      break;
    }
    if(ret.statusCode == 200){
      var resp = ScreenVal.fromJson(json.decode((ret.body)));
      if(serverstate == true && colorScreen != resp.testColor){
        colorScreen = resp.testColor;
      }
      if(resp.state != serverstate){
        if(resp.state == true){
          serverstate = true;
          fullscreen = true;
          html.window.document.documentElement.requestFullscreen();
          Navigator.push(md.currentcontext, MaterialPageRoute(builder: (context) => ColorScreen()));
        }
        else if(resp.state == false){
          serverstate = false;
          html.window.document.exitFullscreen();
          fullscreen = false;
          Navigator.pop(colorScreenContext);
        }
      }
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
      fetchServerState(server);
    } else
      clientid = 0;
    return ret;
  } else {
    // If that call was not successful, throw an error.
    throw Exception('Failed to load post');
  }
}

Future<int> generateUserData(var server) async {
  Random rnd;
  int min = 1000;
  int max = 9000;
  int userID;
  while (true) {
    rnd = new Random();
    userID = min + rnd.nextInt(max - min);
    final response = await http.get("$rDl/ServerID/$server/User/$userID.json");
    if (response.body == "null" && response.statusCode == 200) {
      var dateC = {'Date': now.day};
      await http.put("$rDl/ServerID/$server/User/$userID.json",
          body: jsonEncode(dateC));
      break;
    } else if (response.statusCode != 200 || response.body != "null") {
      userID = 0;
      break;
    }
  }

  return userID;
}

void deletUID(int sID, int uID) {
  http.delete("$rDl/ServerID/$sID/User/$uID.json");
}

void writeuserFriend(int sID, int uID, String pos, int id) {
  http.patch("$rDl/ServerID/$sID/User/$uID/SideUsers.json",
      body: jsonEncode({pos: id}));
}

class ScreenVal{
  final bool state;
  final String testColor;
  ScreenVal({this.state,this.testColor});
  factory ScreenVal.fromJson(Map<String,dynamic> json){
    return ScreenVal(
      state: json['State'],
      testColor: json['TestColor']
    );
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

class ColorScreen extends StatefulWidget{
  @override
  _ColorScreen createState() => _ColorScreen();
}

class _ColorScreen extends State<ColorScreen> {

  String screenColor;
  Timer _timer;
  bool init;
  final time = Duration(milliseconds: 500);

  @override
  void initState(){
    init = false;
    super.initState();
    screenColor = colorScreen;
    _timer = Timer.periodic(Duration(milliseconds:1), (Timer t) => updateColor(colorScreen));
    
  }

  void updateColor(var color){
    init = true;
    if(color!=screenColor){
      setState(() {
        screenColor = color;
      });
    }
    if(clientState == false) Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => md.JoinScreen()));
  }

  @override
  void dispose(){
    _timer.cancel();
    super.dispose();
  }

  var icon = Icons.fullscreen_exit;

  @override
  Widget build(BuildContext context) {
    colorScreenContext = context;
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      body: AnimatedContainer(
        width: size.width,
        height: size.height,
        duration: (init)?time:Duration(seconds: 0),
        color: md.HexColor.fromHex(screenColor),
      ),
      backgroundColor: Colors.transparent,
      floatingActionButton: FloatingActionButton(
        child: Icon(icon),
        backgroundColor: md.HexColor.fromHex(screenColor),
        onPressed: (){
          setState(() {
            fullscreen = !fullscreen;
            if(fullscreen == false){
              icon = Icons.fullscreen;
              html.window.document.exitFullscreen();
            }else if(fullscreen == true){
              icon = Icons.fullscreen_exit;
              html.window.document.documentElement.requestFullscreen();
            }
          });
        },
      ),
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
  Future<Post> post;
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
        writeuserFriend(md.serverid, clientid, "L", int.parse(boxL.text));
      } else if (boxL.text.length < 4) boxLState = false;
    });
    boxR.addListener(() {
      if (boxR.text.length == 4 && boxRState == false) {
        boxRState = true;
        print(boxR.text);
        writeuserFriend(md.serverid, clientid, "R", int.parse(boxR.text));
      } else if (boxR.text.length < 4) boxRState = false;
    });
    boxF.addListener(() {
      if (boxF.text.length == 4 && boxFState == false) {
        boxFState = true;
        print(boxF.text);
        writeuserFriend(md.serverid, clientid, "F", int.parse(boxF.text));
      } else if (boxF.text.length < 4) boxFState = false;
    });
    boxB.addListener(() {
      if (boxB.text.length == 4 && boxBState == false) {
        boxBState = true;
        print(boxB.text);
        writeuserFriend(md.serverid, clientid, "B", int.parse(boxB.text));
      } else if (boxB.text.length < 4) boxBState = false;
    });
    super.initState();
    post = fetchPost(md.serverid);
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    md.currentcontext = context;
    Size size = MediaQuery.of(context).size;
    return Scaffold(
        body: Stack(children: <Widget>[
                Center(
                  child: new Image.asset("assets/img/dark_bg.jpg",
                      width: size.width,
                      height: size.height,
                      fit: BoxFit.cover),
                ),
                Center(
                  child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        FutureBuilder<Post>(
                          future: post,
                          builder: (context, snapshot) {
                            var data;
                            if (snapshot.hasData && !snapshot.hasError) {
                              data = snapshot.data.dateS;
                              if (data == DateTime.now().day) {
                                var sname = snapshot.data.servName;
                                var sID = md.serverid;
                                var uid = clientid;
                                return Center(
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
                                      "$sname",
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 25,
                                        fontWeight: FontWeight.w400,
                                      ),
                                    ),
                                    Text(
                                      "Server ID : $sID",
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 15,
                                        fontWeight: FontWeight.w400,
                                      ),
                                    ),
                                    Container(
                                      height: 50.0,
                                    ),
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
                                      "$uid",
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 80,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    Container(
                                      height: 30.0,
                                    ),
                                    userInput(context, snapshot),
                                    Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.center,
                                        children: <Widget>[
                                          RaisedButton(
                                              shape: RoundedRectangleBorder(
                                                borderRadius:
                                                    new BorderRadius.circular(
                                                        18.0),
                                              ),
                                              onPressed: () {
                                                boxR.text = null;
                                                boxL.text = null;
                                                boxF.text = null;
                                                boxB.text = null;
                                                deletUID(md.serverid, clientid);
                                                md.serverid = null;
                                                clientState = false;
                                                Navigator.pushReplacement(
                                                    context,
                                                    MaterialPageRoute(
                                                        builder: (context) =>
                                                            md.JoinScreen()));
                                              },
                                              child: const Text("Back")),
                                          Container(
                                            width: 10,
                                          ),
                                          RaisedButton(
                                              color: md.primCol,
                                              shape: RoundedRectangleBorder(
                                                borderRadius:
                                                    new BorderRadius.circular(
                                                        18.0),
                                              ),
                                              onPressed: () {
                                                Navigator.push(
                                                    context,
                                                    MaterialPageRoute(
                                                        builder: (context) =>
                                                            md.LockScreen()));
                                              },
                                              child: const Text("Lock"))
                                        ])
                                  ]),
                                );
                              }
                            }
                            if (snapshot.hasError ||
                                (snapshot.hasData &&
                                    data != DateTime.now().day)) {
                              var myID = md.serverid;
                              return Center(
                                child: Column(children: <Widget>[
                                  Text(
                                    "Can't Connect to Server ID : $myID\nPlease Try Again.",
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 25,
                                      fontWeight: FontWeight.w200,
                                    ),
                                  ),
                                  Container(
                                    height: 20,
                                  ),
                                  Container(
                                    width: 100,
                                    height: 30.0,
                                    child: RaisedButton(
                                        shape: RoundedRectangleBorder(
                                          borderRadius:
                                              new BorderRadius.circular(18.0),
                                        ),
                                        onPressed: () {
                                          deletUID(md.serverid, clientid);
                                          md.serverid = null;
                                          Navigator.pushReplacement(
                                              context,
                                              MaterialPageRoute(
                                                  builder: (context) =>
                                                      md.JoinScreen()));
                                        },
                                        child: const Text("Back")),
                                  )
                                ]),
                              );
                            }
                            // By default, show a loading spinner.
                            return Text("Loading...",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 30.0,
                              fontWeight: FontWeight.w200,
                            ),
                            );
                          },
                        ),
                      ]),
                )
              ])
            );
  }
}

Widget userInput(BuildContext context, AsyncSnapshot<Post> data) {
  Widget child;
  usertype = data.data.type;
  if (data.data.type == 0)
    child = Text(
      "Please wait until the Scorp.io-server Start the Constellation\n",
      textAlign: TextAlign.center,
      style: TextStyle(
        color: Colors.white,
        fontSize: 15,
        fontWeight: FontWeight.w100,
      ),
    );
  else if (data.data.type == 2) {
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
  } else if (data.data.type == 1) {
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
