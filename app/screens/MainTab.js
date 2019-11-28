import React from 'react';
import { Button, 
          Dimensions, 
          SafeAreaView, 
          StyleSheet, 
          Text, 
          TouchableOpacity,
          ScrollView, 
          View } from 'react-native';
import { connect } from 'react-redux';

import { increaseCounter, decreaseCounter } from '../redux/actions/counterActions';


const Counter = (props) => {
    return (
      <>
      <SafeAreaView style={styles.container}>

        <Text style={styles.counterTitle}>Counter</Text>

        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => props.reduxIncreaseCounter()}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          <Text style={styles.counterText}>{props.counter}</Text>

          <TouchableOpacity onPress={() => props.reduxDecreaseCounter()}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
      </>
    )  
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer.counter,
})

const mapDispatchToProps = (dispatch) => {
    return {
      reduxIncreaseCounter: () => dispatch(increaseCounter()),
      reduxDecreaseCounter: () => dispatch(decreaseCounter()),
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  loginButton: {
    marginTop: 20,
    paddingTop: 20,
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInText: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});