import React, { Component } from 'react'
import News from './component/News';

import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import News1 from './component/News1';
import LoadingBar from 'react-top-loading-bar'
import Navbar2 from './component/Navbar2';



export default class App extends Component {
  state = {
    loading: false,
    progress:0,
  };
  handleButtonClick=()=>{
    this.setState({loading:true,progress:10})
    setTimeout(() => {
      this.setState({progress:100})
    }, 400);
   
  }
  onLoaderFinished=()=>{
    this.setState({loading:false,progress:0})
  }

  render() {

    return (

      <div>
        <Router>
          <Navbar onButtonClick={this.handleButtonClick}/>
          <LoadingBar
        color='red'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          {/* <Routes>
          <Route exact path="/" element={<News1 country="in" category="business" />} />
          <Route exact path="/business" element={<News1 country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News1 country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News1 country="in" key="general" />} />
            <Route exact path="/health" element={<News1 country="in" category="health" />} />
            <Route exact path="/science" element={<News1 country="in" key="science" />} />
            <Route exact path="/sports" element={<News1 country="in" category="sports" />} />
            <Route exact path="/technology" element={<News1 country="in" category="technology" />} />
          

          </Routes> */}
          {/* <News seProgress={setProgress} category="technology"/> */}
          <Routes>

         
            <Route exact path="/" element={<News setProgerss={this.setProgerss} category="general" />} />
            <Route exact path="/business" element={<News setProgerss={this.setProgerss} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgerss={this.setProgerss} category="entertainment" />} />
            <Route exact path="/general" element={<News setProgerss={this.setProgerss} key="general" />} />
            <Route exact path="/health" element={<News  category="health" />} />
            <Route exact path="/science" element={<News setProgerss={this.setProgerss} key="science" category="science"  />} />
            <Route exact path="/sports" element={<News setProgerss={this.setProgerss} category="sports" />} />
            <Route exact path="/technology" element={<News setProgerss={this.setProgerss} category="technology" />} />
          </Routes>

        </Router>

      </div>


    )
  }
}

