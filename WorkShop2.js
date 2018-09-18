import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class WorkShop2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Blink message="Genex InfoTech" interval={1000} />
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true };

    setInterval(() => {
      this.setState(oldstate => {
        return { isVisible: !oldstate.isVisible };
      });
    }, this.props.interval);

  }

  render() {
    let display = this.state.isVisible ? this.props.message : '';
    return <Text style={styles.welcome}>{display}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 25,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    fontSize: 20,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
