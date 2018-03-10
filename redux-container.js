import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ${NAME} extends Component{
    constructor(props){
        super(props);
    }
}

${NAME}.propTypes = {

};

function mapDispatchToProps(dispatch){
    return bindActionCreators({ }, dispatch);
}

function mapStateToProps({ }){
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(${NAME});
