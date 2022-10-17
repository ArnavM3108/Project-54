import React, { Component } from "react";
import { View, Button, Alert } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 30, alignItems: "center" }}>
        <View style={{ width: 200, height: 100, marginTop: 30 }}>
          <Button
            title="Tom and Jerry"
            color="brown"
            onPress={() => {
              alert("Tom and Jerry were originally named Jasper and Jinx!");
            }}
          />
        </View>

        <View style={{ width: 200, height: 100, marginTop: 30 }}>
          <Button
            title="Scooby-Doo"
            color="green"
            onPress={() => {
              alert("There are 12 different versions of this show!");
            }}
          />
        </View>
          
        <View style={{ width: 200, height: 100, marginTop: 30 }}>
          <Button
            title="Avatar"
            color="blue"
            onPress={() => {
              alert("The show was originally meant to take place thousands of years in the future!");
            }}
          />
        </View>

        <View style={{ width: 200, height: 100, marginTop: 30 }}>
          <Button
            title="Pokémon"
            color="yellow"
            onPress={() => {
              alert("There are 905 pokémon!");
            }}
          />
        </View>



        
      </View>
    );
  }
}
