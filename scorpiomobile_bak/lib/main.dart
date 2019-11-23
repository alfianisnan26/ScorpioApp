import 'package:flutter/material.dart';
import 'global.dart' as g;
import 'backend.dart';
import 'dart:js' as js;

myApp(){
  String data = checkQuery();
  if(data!=null){
      g.sID = int.parse(data);
  }
  return new MaterialApp(
      title: 'Scorp.io | Create your own constellation',
      theme: ThemeData(
        accentColor: g.acCol,
        primaryColor: g.primCol,
        fontFamily: 'Roboto',
      ),
      home: MyHomePage(),
    );
}

void main(){
  runApp(myApp());
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final sIDController = TextEditingController();
  bool sIDstate = false;
  final double bWs = 200;

  void ackAlert(BuildContext context, var serv) async {
    //db.post = db.fetchPost(serv);
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
                    child: Text("HelloWorld $serv"),
                    /*
                      child: FutureBuilder<db.Post>(
                          future: db.post,
                          builder: (context, snapshot) {
                            if (snapshot.hasData && !snapshot.hasError) {
                              if (snapshot.data.dateS == DateTime.now().day) {
                                Navigator.pop(context);
                                state = true;
                              }
                            }
                            if (snapshot.hasError || (snapshot.hasData && snapshot.data.dateS != DateTime.now().day)) {
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
                          })*/
                  )));
        });
  }

  @override
  void dispose() {
    sIDController.dispose();
    super.dispose();
  }

  @override
  void initState() {
    sIDController.addListener(() {
      if (sIDController.text.length == 4 && sIDstate == false) {
        sIDstate = true;
        //ackAlert(context, sIDController.text);
      }
      if (sIDstate == true && sIDController.text.length < 4) {
        sIDstate = false;
      }
      setState(() {});
    });
    
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    if(g.sID!=null){
      sIDController.text = g.sID.toString();
      //g.sID = null;
    }
    return Scaffold(
        body: Stack(
      children: <Widget>[
        Center(
          child: Image.asset("assets/img/light_bg.jpg",
              width: size.width, height: size.height, fit: BoxFit.cover),
        ),
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Image.asset(
              "assets/img/logo.png",
              width: size.width,
              height: 100.0,
              fit: BoxFit.fitHeight,
            ),
            Image.asset("assets/img/title.png",
                width: size.width, height: 200, fit: BoxFit.fitHeight),
            Container(
                width: 220.0,
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
                          color: g.darkCol),
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
                    js.context.callMethod("open", [g.myLink]);
                  },
                  child: const Text("Documentation"),
                ),
              ),
            ),
          ],
        )
      ],
    ));
  }
}
