import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Button from './components/Button'
import Display from './components/Display';

export default class App extends Component {

  state = {
    displayValue: '0'
  }

  clearMemory = () =>{
    this.setState({displayValue: '0'})
  }
  addDigit = (n) => {
    if(this.state.displayValue != '0') this.setState({ displayValue: this.state.displayValue + '' + n });
    else this.setState({ displayValue: n })
  }

  setOperation = op =>{
    
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          {/* First Row*/}
          <Button label='CE' onClick = {this.clearMemory} />
          <Button label='C' />
          <Button label='<=' />
          <Button label='/' op onClick={() => this.setOperation('/')}/>
          {/* Second Row*/}
          <Button label='7' onClick={() => this.addDigit(7)} />
          <Button label='8' onClick={() => this.addDigit(8)}/>
          <Button label='9' onClick={() => this.addDigit(9)}/>
          <Button label='*' op onClick={() => this.setOperation('*')}/>
          {/* Thrid Row*/}
          <Button label='4' onClick={() => this.addDigit(4)}/>
          <Button label='5' onClick={() => this.addDigit(5)}/>
          <Button label='6' onClick={() => this.addDigit(6)}/>
          <Button label='-' op onClick={() => this.setOperation('-')}/>
          {/* Fourth Row*/}
          <Button label='1' onClick={() => this.addDigit(1)}/>
          <Button label='2' onClick={() => this.addDigit(2)}/>
          <Button label='3' onClick={() => this.addDigit(3)}/>
          <Button label='+' op onClick={() => this.setOperation('+')}/>
          {/* Fifth Row*/}
          <Button label='0' double onClick={() => this.addDigit(0)}/>
          <Button label=',' onClick={() => this.addDigit(',')}/>
          <Button label='=' op onClick={() => this.setOperation('=')}/>
        </View>
      </SafeAreaView>
    )
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  }
});
