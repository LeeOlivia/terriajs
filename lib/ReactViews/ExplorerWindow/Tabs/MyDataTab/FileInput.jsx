import React from 'react';
import classNames from 'classnames';

import Styles from './file-input.scss';

// When uploading a file
// use an button element to have consistent stylying
const FileInput = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func,
        accept: React.PropTypes.string
    },

    getInitialState() {
        return {
            value: 'Browse for local data',
            hovered: false
        };
    },

    handleChange(e) {
        this.setState({
            value: e.target.value.split(/(\\|\/)/g).pop()
        });
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    },
    
    render() {
        return (
            <form className={Styles.fileInput}
                  onMouseEnter={() => this.setState({hovered: true})}
                  onMouseLeave={() => this.setState({hovered: false})}>
                <input type='file' onChange={this.handleChange} accept={this.props.accept} className={Styles.input}/>
                <label
                    className={classNames(Styles.btn, {[Styles.btnHover]: this.state.hovered})}>
                    {this.state.value ? this.state.value : 'Browse for local data'}
                </label>
            </form>
        );
    }
});

module.exports = FileInput;
