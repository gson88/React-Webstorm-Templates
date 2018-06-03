import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ReduxContainer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="ReduxContainer">

      </div>
    );
  }
}

ReduxContainer.propTypes = {
  children: PropTypes.any
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxContainer);
