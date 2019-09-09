import React, { Component } from 'react';


export default class SaveBtn extends Component {
    constructor (props) {
        this.state = {
       
            data:[]
          };
      super(props);
            this.onSaveClick=this.onSaveClick.bind(this)
    }
    componentDidMount () 
    {
        axios.get("http://localhost:7000/getAllProjects",{ headers: { secret_token: localStorage.getItem("secret_token")} }
   
        )
        .then(
          
          json => {
                this.setState({ sliderData: json.data })
          }
        ).catch(error => {
         
            console.log('error code=', error.response.status);
          })
    }

    onSaveClick()
    {
        /*  if (person != null) {
            document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
          }*/
          //save(prjName)
          var bundle = {};
            code[mode] = editor.getSession().getValue();

        // bundle.fork = fork;
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
                url: "http://localhost:7000/save/" ,
                data: bundle,
                success: function(data) {
                    //data = JSON.parse(data);
                    if (data.uuid !== 'error')
                    {
                        alert(data.txt);
                        this.props.setFatherState("false",prjName);
                    }
                }.bind(this),
                error: function(data) {
                    alert(data.responseJSON.txt)
                  //  window.addEventListener('beforeunload', confirmOnPageExit);
                }.bind(this),
                complete: function(data) {
                  //  //$(modeMap[svd]).removeClass('icon-save');
                   // $(modeMap[svd]).addClass('icon-mode' + svd);
                    //$(modeMap[svd] + ' span').text(titleMap[svd]);
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
