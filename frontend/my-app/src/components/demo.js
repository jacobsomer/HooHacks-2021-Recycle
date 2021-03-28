import react, {Component} from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import * as jpeg from 'jpeg-js';
import ImageUploader from 'react-images-upload';
import {Button} from 'react-bootstrap';

// Load the model.

const model = async()=>{
    await mobilenet.load();
}
let net;
async function app() {
    console.log('Loading mobilenet..');
  
    // Load the model.
    net = await mobilenet.load();
    console.log('Successfully loaded model');
  
    // Make a prediction through the model on our image.
    const imgEl = document.getElementById('img');
    const result = await net.classify(imgEl);
    console.log(result);
  }

export default class Demo extends Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { isTfReady:false,
                    isModelReady: false,
                    predictions: null,
                    file: null};
        model();
        this.handleChange = this.handleChange.bind(this)
        
      }
      async componentDidMount() {
        await tf.ready()
        this.setState({
          isTfReady: true
        })
    
        this.model = await mobilenet.load()
        this.setState({ isModelReady: true })

      }



      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
        app();
      }
      render() {
        return (
        <div>
            <input type="file" onChange={this.handleChange}/>
            <img id="img" crossOrigin="anonymous" src={this.state.file} width="227" height="227"/>
          </div>
        );
      }
}