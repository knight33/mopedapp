import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <View>
        <Text> mopeds are the best</Text>
      </View>
    );
  }
}

App.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
