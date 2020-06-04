import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, TextInput, Button, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      lastName: "",
      name: "",
      labs: "",
      students: [
        {name:"Zlata", lastName:"Yanytska", labs:"6"},
        {name:"Anna", lastName:"Yanytska", labs:"8"},
      ]
    }
  }

  onNameChange = (newName) => {
    this.setState({
      name: newName
    })
  }

  onLastnameChange = (newlastName) => {
    this.setState({
      lastName: newlastName
    })
  }
  onLabsChange = (newLabs) => {
    this.setState({
      labs: newLabs
    })
  }

  onFormReset = () => {
    this.setState({
      lastName: "",
      name: "",
      labs: "",
    }
    )
  }

  addNewStudent = () => {
    const addNewStudent = {
      name: this.state.name,
      lastName: this.state.lastName,
      labs: this.state.labs
    };

    this.setState({
      students: [...this.state.students, addNewStudent]
    });
    this.onFormReset()
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TextInput
          placeholder="Enter name"
          onChangeText={this.onNameChange}
          value={this.state.name}
        />
        <TextInput
          placeholder="Enter lastname"
          onChangeText={this.onLastnameChange}
          value={this.state.lastname}
        />
        <TextInput
          placeholder="Enter labs"
          onChangeText={this.onLabsChange}
          value={this.state.labs}
        />
        <Button
          title="Add student"
          onPress={this.addNewStudent}
        />
        <Button
          title="Reset form"
          onPress={this.onFormReset}
        />
        <Text>Боржники по лабах з бд</Text>
        {this.state.students.map(student => {
          return (
            <View>
              <Text>{student.name} {student.lastName} {student.labs}</Text>
             
            </View>);
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

