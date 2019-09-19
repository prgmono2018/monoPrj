import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

export default class SaveBtn extends Component {
    constructor (props) {
      super(props);
            this.onSaveClick=this.onSaveClick.bind(this)
    }
    componentDidMount () 
    {

    }

    onSaveClick()
    {
            var bundle = {};
            code[mode] = editor.getSession().getValue();
            bundle.code1 = code[0];
            bundle.code2 = code[1];
            bundle.code3 = code[2];
            bundle.code4 = code[3];
            bundle.width = gameWidth;
            bundle.height = gameHeight;
            bundle.new = this.props.saveNew;
            var prjName = this.props.prjName;

         if (this.props.saveNew==true || this.props.saveNew=="true"|| this.props.label=="Save As"){
                 prjName= prompt("Please enter project name", "");
         }

         bundle.prjName = prjName;

            $.ajax({
                type: "POST",
                url: `${process.env.REACT_APP_EDITOR_SERVER}/${process.env.REACT_APP_SAVE}` ,
                data: bundle,
                success: function(data) {
                    //data = JSON.parse(data);
                    if (data.uuid !== 'error')
                    {
                        alert(data.txt);
                        if (data.op=="insert")
                          this.props.setFatherState("false",prjName,bundle);
                        else
                          this.props.setFatherState("false",prjName,null);
                    }
                }.bind(this),
                error: function(data) {
                    alert(data.responseJSON.txt)
                  //  window.addEventListener('beforeunload', confirmOnPageExit);
                }.bind(this),
                complete: function() {
                        svd = -1;
                }.bind(this)
            }, "text");
    }

    render () {
        return (
            <button onClick={this.onSaveClick} >{this.props.label}</button>
        );
    }
}

SaveBtn.propTypes = {
  label: PropTypes.string,
  prjName: PropTypes.string,
  setFatherState: PropTypes.func,
  saveNew: PropTypes.string
};

