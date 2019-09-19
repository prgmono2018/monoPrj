import React, { Component } from 'react';
import '../css/common.css';
import Footer from './footer'
import SaveBtn from './saveBn'
import OpenNewDoc from './openNewDoc'
import axios from 'axios';
import '../css/tabs.css';
import IframeComponent from "./IframeComponent";

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
   
    }

    //editor.getSession().setValue("hhhhhhhhhhhhhhhhhhhhh")
  
    componentDidMount () {
         axios.get(`${process.env.REACT_APP_EDITOR_SERVER}/${process.env.REACT_APP_GETALL}`)
        .then(
         
        json => {
            this.setState({data:json.data.docs});
          }
         
        ).catch(error => {
         
            //console.log('error code=', error.response.status);
          })

          
         
          //setTimeout(function(){document.querySelector('#donateBanner').style.display="none"}, 1300);

    }
    setDocumentStatus(saveNew,prjName,doc){
        if(doc!=null){
         this.setState({ saveNew:saveNew,prjName:prjName,data:this.state.data.concat(doc) });
        }else{
            this.setState({ saveNew:saveNew,prjName:prjName});
        }
    }
    render () {
        const helpIframe = '<iframe id="chains" src="https://phaser.io/learn/chains/slim" style="display:none" ></iframe>';

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
             
                        <IframeComponent iframe={helpIframe} />
                        <pre id="editor" style={{display: 'block',fontSize: '15px', height: '470px'}} className=" ace_editor ace-cobalt ace_dark"></pre>


                        <div id="sandbox-container">
                            <iframe sandbox="allow-scripts" id="sandboxed" src="src/client/common/frame.html" style={{width: '800px', height: '600px'}} ></iframe>
                            <br/>
                            <strong>Game Size: </strong> 
                            <input type="text" id="gameSizeW" name="width" defaultValue="800"/> x 
                            <input type="text" id="gameSizeH" name="height" defaultValue="600"/>
                            <input type="button" id="updateSize" defaultValue="update"/>
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
