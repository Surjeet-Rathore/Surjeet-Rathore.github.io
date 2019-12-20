import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:surjeetrathore/const.dart';


class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Stack(
      alignment: Alignment.bottomCenter,
      children: <Widget>[
        _buildHome(),
        Container(
          width: MediaQuery.of(context).size.width / 2,
          height: 90,
          color: bottomColor,
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  'CONTACT',
                  style: TextStyle(color: Colors.black, fontSize: 15),
                ),
                SizedBox(
                  height: 10,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Icon(
                      Icons.phone,
                      color: backColor,
                      size: 15,
                    ),
                    SizedBox(
                      width: 5,
                    ),
                    Text(
                      '+91 8951444551',
                      style: TextStyle(color: Colors.black, fontSize: 12),
                    ),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Icon(
                      Icons.email,
                      color: backColor,
                      size: 15,
                    ),
                    SizedBox(
                      width: 5,
                    ),
                    Text(
                      'surjeetrathore1991@gmail.com',
                      style: TextStyle(color: Colors.black, fontSize: 12),
                    ),
                  ],
                )
              ],
            ),
          ),
        )
      ],
    ));
  }

  _buildHome() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Container(
            width: MediaQuery.of(context).size.width / 2,
            height: MediaQuery.of(context).size.height,
            child: Stack(
              fit: StackFit.expand,
              children: <Widget>[
                Image.asset(
                  'assets/surjeet.jpg',
                  fit: BoxFit.cover,
                ),
                Container(
                  width: MediaQuery.of(context).size.width / 2,
                  height: MediaQuery.of(context).size.height,
                  color: Color(0xfff002032).withOpacity(0.7),
                )
              ],
            )),
        Container(
          color: backColor,
          width: MediaQuery.of(context).size.width / 2,
          height: MediaQuery.of(context).size.height,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'HI',
                style: TextStyle(color: Colors.white, fontSize: 20),
              ),
              Text(
                'I\'M SURJEET RATHORE',
                style: TextStyle(color: Colors.white, fontSize: 15),
              ),
              SizedBox(
                height: 10,
              ),
              ScreenTypeLayout(
                desktop: _buildDesktopBody(),
                mobile: _buildMobileBody(),
              )
            ],
          ),
        )
      ],
    );
  }

  _buildDesktopBody() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text(
          'Android Developer',
          style: TextStyle(color: Colors.white, fontSize: 15),
        ),
        SizedBox(
          width: 10,
        ),
        Icon(
          Icons.fiber_manual_record,
          color: Colors.white,
          size: 5,
        ),
        SizedBox(
          width: 10,
        ),
        Text(
          'Flutter Developer',
          style: TextStyle(color: Colors.white, fontSize: 15),
        ),
      ],
    );
  }

  _buildMobileBody() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Icon(
              Icons.fiber_manual_record,
              color: Colors.white,
              size: 5,
            ),
            Text(
              'Android Developer',
              style: TextStyle(color: Colors.white, fontSize: 15),
            ),
          ],
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Icon(
              Icons.fiber_manual_record,
              color: Colors.white,
              size: 5,
            ),
            Text(
              'Flutter Developer',
              style: TextStyle(color: Colors.white, fontSize: 15),
            ),
          ],
        )
      ],
    );
  }
}
