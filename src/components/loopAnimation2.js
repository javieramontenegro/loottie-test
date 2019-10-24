import React, { Component } from 'react'
import Lottie from 'react-lottie'

import Data2 from '../data/data_2.json'

class LoopAnimation2 extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: Data2,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
     
    };

    return(
      <div>
       
       
        <Lottie options={defaultOptions}
              height={400}
              width={400}
        />
      </div>
    )
  }
}

export default LoopAnimation2;