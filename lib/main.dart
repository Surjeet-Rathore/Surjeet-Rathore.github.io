import 'package:flutter/material.dart';
import 'package:surjeetrathore/const.dart';
import 'package:surjeetrathore/home.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Surjeet Rathore',
      theme: ThemeData(
          primaryColor: themeColor, scaffoldBackgroundColor: Colors.white,
          fontFamily: 'Ubuntu'
          ),
      home: Home(),
    );
  }
}
