import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
          textValue: '',
          userList: [{name: 'andy', key: 1}, {name: 'diana', key: 2}, {name: 'gia', key: 3}, {name: 'aj', key: 4}]
      }
  }



  onChangeTextInput = (inputValue) => {
    this.setState({
      textValue: inputValue,
    })
      console.log(this.state.textValue);
  }

  pressedButton = () => {
      this.setState({
          userList: [...this.state.userList, {name: this.state.textValue, key: Math.random() * (1 * 1000)}]
      })
      console.log(this.state.userList)

  }

  render() {
    return (
      <View  style={styles.container}>
        <View>
          <Text style={styles.textFormat}>Politica</Text>
        </View>
        <View style={styles.userInput}>
          <TextInput style={styles.inputField} value={this.state.textValue} onChangeText={this.onChangeTextInput} placeholder='Enter your text here'/>
          <Button title='Add Text' onPress={this.pressedButton}/>
        </View>
        <View>
        <FlatList
          style={styles.outList}
          data={this.state.userList}
          keyExtractor={this.state.key}
          renderItem={({item, key}) => {
            return <Text> {item.name} </Text>
          }}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40
  },
  textFormat: {
    color: 'red'
  },
  inputField: {
    width: 250,
      padding: 10
  },
  userInput: {
    width: '100%',
    flexDirection: 'row',
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent:'space-between',
      alignItems: 'center'
  },
  outList: {
    // height: 300,
    // width: 300
  }
});
