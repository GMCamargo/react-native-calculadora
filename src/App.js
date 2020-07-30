import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Button from './components/Button'
import Display from './components/Display';

export default () => {

  const [state, setState] = useState('0')

  clearMemory = () => {
    setState('0')
  }
  addDigit = (n) => {
    if (state != '0') { 
      if(n == ',' && state.includes(',')) setState(state)
      else setState(state + n); 
    }
    else setState(n)
  }

  setOperation = op => {

  }
  return (
    <SafeAreaView style={styles.container}>
      <Display value={state} />
      <View style={styles.buttons}>
        {/* First Row*/}
        <Button label='CE' onClick={this.clearMemory} />
        <Button label='C' />
        <Button label='<=' />
        <Button label='/' op onClick={setOperation} />
        {/* Second Row*/}
        <Button label='7' onClick={addDigit} />
        <Button label='8' onClick={addDigit} />
        <Button label='9' onClick={addDigit} />
        <Button label='*' op onClick={setOperation} />
        {/* Thrid Row*/}
        <Button label='4' onClick={addDigit} />
        <Button label='5' onClick={addDigit} />
        <Button label='6' onClick={addDigit} />
        <Button label='-' op onClick={setOperation} />
        {/* Fourth Row*/}
        <Button label='1' onClick={addDigit} />
        <Button label='2' onClick={addDigit} />
        <Button label='3' onClick={addDigit} />
        <Button label='+' op onClick={setOperation} />
        {/* Fifth Row*/}
        <Button label='0' double onClick={addDigit} />
        <Button label=',' onClick={addDigit} />
        <Button label='=' op onClick={setOperation} />
      </View>
    </SafeAreaView>
  )

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
