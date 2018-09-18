import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class WorkShop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Mytext message="Genex InfoTech" />
      </View>
    );
  }
}

class Mytext extends Component {
  render() {
    return <Text style={styles.welcome}>Welcome {this.props.message}</Text>;
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
    fontSize: 40,
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
