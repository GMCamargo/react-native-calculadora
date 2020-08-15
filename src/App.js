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
  const [clearDisplay, setClearDisplay] = useState(false)
  const [operation, setStateOperation] = useState(null)
  const [values, setValues] = useState([0, 0])
  const [current, setCurrent] = useState(0)

  clearMemory = () => {
    setState('0')
    setClearDisplay(false)
    setStateOperation(null)
    setValues([0, 0])
    setCurrent(0)
  }
  addDigit = (n) => {
    if (n == ',' && state.includes(',')) return

    const clear = state == '0' || clearDisplay
    const currentValue = clear ? '' : state
    const a = currentValue + n
    setState(a)
    setClearDisplay(false)

    if (n !== '.') {
      const newValue = parseFloat(a) 
      const newValues = [...values]
      newValues[current] = newValue      
      setValues(newValues)
    }


  }

  setOperation = op => {

    if (current === 0) {
      setStateOperation(op)
      setCurrent(1)
      setClearDisplay(true)
    } else {
      const equals = op === '='
      const myvalues = [...values]
      
      //console.warn(myvalues[0], myvalues[1])

      try {
        myvalues[0] = eval(`${myvalues[0]} ${operation} ${myvalues[1]}`)
        //console.warn(`${myvalues[0]} ${operation} ${myvalues[1]}`)
      } catch (e) {
        //console.warn('error')
        myvalues[0] = values[0]
      }

      myvalues[1] = 0
  
      setState(myvalues[0])
      setStateOperation(equals ? null : op)
      setCurrent(equals ? 0 : 1)
      setClearDisplay(!equals)
      setValues([myvalues[0],myvalues[1]])
    }



  }
  return (
    <SafeAreaView style={styles.container}>
      <Display value={state} />
      <View style={styles.buttons}>
        {/* First Row*/}
        <Button label='CE' onClick={this.clearMemory} triple />
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
        <Button label='.' onClick={addDigit} />
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
