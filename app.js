import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { getCompetitions } from './actions/futbol'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles
  
  return (
    <View style={container}>
      <Text style={text}>Redux Example</Text>
      <TouchableHighlight style={button} onPress={() => props.getCompetitions()}>
        <Text style={buttonText}>Load People</Text>
      </TouchableHighlight>

    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

function mapStateToProps (state) {
  return {
    competitions: state.competitions
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCompetitionse: () => dispatch(getCompetitions())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
