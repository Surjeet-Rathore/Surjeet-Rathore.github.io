import 'package:flutter/material.dart';
import 'package:surjeetrathore/const.dart';
import 'package:surjeetrathore/home.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Surjeet Rathore',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          primaryColor: themeColor, scaffoldBackgroundColor: Colors.white,
          fontFamily: 'Ubuntu'
          ),
      home: Home(),
    );
  }
}
