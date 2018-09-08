import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    static defaultProps = {
    };

    static propTypes = {
        /** The description for myProp */
        text:PropTypes.string.isRequired,
    };

    state = {};

    render() {
        return (
            <span style={{border:"1px solid black"}}>{this.props.text}</span>
        );
    }
}