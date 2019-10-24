import React, { Component } from 'react'
import Lottie from 'react-lottie'
import Data from '../data/data.json'


class LoopAnimation extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: Data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
     
    };

    return(
      <div>
        <h1>prueba</h1>
       
        <Lottie options={defaultOptions}
              height={400}
              width={400}
        />
      </div>
    )
  }
}

export default LoopAnimation;