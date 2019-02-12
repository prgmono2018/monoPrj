import React, {Component} from 'react'
import uploadcare from 'uploadcare-widget'

class Uploader extends Component {
  componentDidMount() {
    const {files, tab, settings, onDone, onOpen} = this.props
    console.log("file="+files);
    this.panel = uploadcare.openPanel(this.placeholder, files, tab, settings)

    typeof onOpen === 'function' && onOpen(this.panel)

    if (typeof onDone === 'function') {
     // console.log("on done="+files);
      this.panel.done(files => {
        if (files) {
          onDone(files.files ? files.files() : [files])
        }
        else {
          onDone(null)
        }
      })
    }
  }

  componentWillUnmount() {
    this.panel.reject()
  }

  render() {
    return <div ref={el => this.placeholder = el} />
  }
}

export default Uploader
