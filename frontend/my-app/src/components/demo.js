import react, {Component} from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import * as jpeg from 'jpeg-js';
import ImageUploader from 'react-images-upload';
import {Button} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import Logo from '../images/download.jpg';
// Load the model.

const model = async()=>{
    await mobilenet.load();
}
let net;


export default class Demo extends Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { isTfReady:false,
                    isModelReady: false,
                    predictions: null,
                    file: null,
                    output:null,
                pressed:false};
        model();
        this.handleChange = this.handleChange.bind(this)
        this.app = this.app.bind(this)
        
      }
      async componentDidMount() {
        await tf.ready()
        this.setState({
          isTfReady: true
        })
    
        this.model = await mobilenet.load()
        this.setState({ isModelReady: true })

      }

      async app() {
        console.log('Loading mobilenet..');
      
        // Load the model.
        net = await mobilenet.load();
        console.log('Successfully loaded model');
      
        // Make a prediction through the model on our image.
        const imgEl = document.getElementById('img');
        const result = await net.classify(imgEl);
        this.setState({output:`
            prediction: ${result[0].className}\n
            probability: ${result[0].probability}
            `});
        console.log(result);
      }

      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0]),
          pressed:true,
        })
        this.app();
        
      }

      
      render() {
        return (
        <div style={{position:'relative'}}>
            {this.state.isModelReady?( <>{!this.state.pressed? (<>
                <div style={{position:'relative',top:'30vh'}}>
                    <img  id="img" src={Logo} width="227" height="227"/>
    
                </div>
                <Button style={{position:'relative',top:'40vh'}}>
                        <input type="file" onChange={this.handleChange}/>
                        
                    </Button>
                    
                    <h3 style={{position:'relative',color:'#fff',top:'60vh'}}>prediction: water bottle probability: 0.41660186648368835</h3>
            </>
            
            ):(
                <>
            <div style={{position:'relative',top:'30vh'}}>
            <img  id="img" crossOrigin="anonymous" src={this.state.file} width="227" height="227"/>

            </div>
                
            <Button style={{position:'relative',top:'40vh'}}>
                <input type="file" onChange={this.handleChange}/>
                
            </Button>
            
            <h3 style={{position:'relative',color:'#fff',top:'60vh'}}>{this.state.output}</h3>
            </>)}  </>):(<div style={{position:'absolute',color:'#fff',left:'45vw',top:'30vh',hieght:'300px'}} ><h1 style={{color:'#fff',top:'10vh'}}></h1><Spinner  animation="border"/>
                </div>)}
            
          </div>
        );
      }
}