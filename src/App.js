import React from 'react'
import { useState, useEffect } from "react";
//************************************** */
// import * as ROUTES from '../constants/routes';
//************************************** */
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Signin } from "./components/Signin";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { TopNavigation } from './components/topnavigation';



import Home from './components/home';
import Enter from './components/enter';
import  SignInPage  from './components/SignIn/';
import  SignUpPage  from './components/SignUp/';
// import  SignUpLink  from './components/SignUp/';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
 speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
   
    <div>
      
      <Navigation />
      <TopNavigation />

      <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Enetr</Link>
              </li>
              <li>
                <Link to="/SignInPage">Sign In</Link>
              </li>
              <li>
                <Link to="/SignUpPage">Sign Up</Link>
              </li>
            </ul> 
           
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/' element={< Enter />}></Route>
                 <Route exact path='./components/SignIn' element={< SignInPage />}></Route>
                 <Route exact path='./components/SignUp' element={< SignUpPage />}></Route>
          </Routes>
          </div>
       </Router>
       
      
      <Header data={landingPageData.Header} />
      
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Signin data={landingPageData.Signin} />
      <Contact data={landingPageData.Contact} />
      

     


      

      
    </div>
  );
};


     

export default App;
