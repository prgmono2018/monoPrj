import React, { Component } from 'react';
import '../css/common.css';
import Footer from './footer'
import SaveBtn from './saveBn'
import OpenNewDoc from './openNewDoc'
import axios from 'axios';
import '../css/tabs.css';

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            saveNew:true,
            prjName:null,
            refresh:true,
            data:[]
        };

        this.setDocumentStatus = this.setDocumentStatus.bind(this);
        //this.setRefresh = this.setRefresh.bind(this);
    }

    //editor.getSession().setValue("hhhhhhhhhhhhhhhhhhhhh")
  
    componentDidMount () {
        //var popup = document.getElementById("myPopup");
        //popup.innerHTML="Loading......"
       // popup.classList.toggle("show");
        axios.get("http://localhost:7000/getAllProjects"
        )
        .then(
         
        json => {
            //popup.innerHTML="";
            this.setState({data:json.data.docs});
           // popup.innerHTML=this.printPrjList(json.data.docs);
          }
         
        ).catch(error => {
         
            console.log('error code=', error.response.status);
          })


    /*    const script1 = document.createElement("script");
        script1.src = "./js/confirmOnPageExit.js";
        //script1.async = true;
        script1.innerHTML = "var confirmOnPageExit = function (e)  {e = e || window.event; var message = 'Any text will block the navigation'; if (e) {e.returnValue = message;}return message;};window.addEventListener('beforeunload', confirmOnPageExit);";
        script1.onload = () => this.scriptLoaded();
        document.body.appendChild(script1);*/

    }
    setDocumentStatus(saveNew,prjName,doc){
        if(doc!=null){
         this.setState({ saveNew:saveNew,prjName:prjName,data:this.state.data.concat(doc) });
        }else{
            this.setState({ saveNew:saveNew,prjName:prjName});
        }
    }
    render () {
        return (
            <>
            <SaveBtn setFatherState={this.setDocumentStatus} saveNew={this.state.saveNew} prjName={this.state.prjName} label="Save"/>
            <SaveBtn setFatherState={this.setDocumentStatus} saveNew={true} prjName={this.state.prjName} label="Save As"/>
            <OpenNewDoc setFatherState={this.setDocumentStatus} data={this.state.data}  label="Save As"/>
            <div className="sandbox-area"></div>

            <div id="main">

                <div className="row">
                    <div className="col-sm-9">
                        <div id="content" style={{width: '96%'}}>

                        
        <div className="container" style={{marginTOP: '6px'}}>
            <section>
                <div className="tabs tabs-style-tzoid">
                    <nav>
                        <ul>
                            <li id="tab0" className="tab-current"><a id="preload"  title="Preload - Ctrl+1"><span>preload</span></a></li>
                            <li id="tab1"><a id="create"  title="Create - Ctrl+2"><span>create</span></a></li>
                            <li id="tab2"><a id="update"  title="Update - Ctrl+3"><span>update</span></a></li>
                            <li id="tab3"><a id="render"  title="Render - Ctrl+4"><span>render</span></a></li>
                            <li id="tab4"><a id="game"  title="Play - Ctrl+Enter"><span>PLAY</span></a></li>
                            <li id="tab5"><a id="help"  title="Help - Ctrl+5"><span>Help</span></a></li>
                        </ul>
                    </nav>

                    <div className="content-wrap">
             

                        <pre id="editor" style={{display: 'block',fontSize: '15px', height: '470px'}} className=" ace_editor ace-cobalt ace_dark"></pre>


                        <div id="sandbox-container">
                            <iframe sandbox="allow-scripts" id="sandboxed" src="src/client/common/frame.html" style={{width: '800px', height: '600px'}} ></iframe>
                            <br/>
                            <strong>Game Size: </strong> 
                            <input type="text" id="gameSizeW" name="width" value="800"/> x 
                            <input type="text" id="gameSizeH" name="height" value="600"/>
                            <input type="button" id="updateSize" value="update"/>
                            <p>You may need to click the game to give it input focus<br/>
                            Press CTRL+ENTER to return to the code. This may not work if the game has input focus.</p>
                        </div>
                    </div>

                </div>
            </section>

        </div>

<div className="ide-settings">

    <label>Editor Font Size:</label>
    <a id="ide-font-inc" className="btn"><span className="octicon octicon-plus"></span></a>
    <a id="ide-font-dec" className="btn"><span className="octicon octicon-dash"></span></a>

</div>
                                                                                   
                        </div>
                    </div>
                </div>
            </div>

 

       <Footer/>
</>
        );
    }
}
