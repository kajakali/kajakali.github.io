import React, { Component } from 'react';
import Box from '@material-ui/core/Box';



 class DoneThings extends Component {
   state = {
     showThingsIveDone: true,
   };

/*    login = (event) => {
     event.preventDefault();

     if (this.state.username && this.state.password) {
       this.props.dispatch({
         type: 'LOGIN',
         payload: {
           username: this.state.username,
           password: this.state.password,
         },
       });
     } else {
       this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
     }
   } // end login

   handleInputChangeFor = propertyName => (event) => {
     this.setState({
       [propertyName]: event.target.value,
     });
   } */

   render() {
    const boxstyle = {
        color: "white",
        backgroundColor: "#a478fc",
        width: '400px',
        height: '400px',
        display: 'inline-block',
        padding: "10px",
        margin: "5px",
        overflow: "none",
      };
     return (
       <div>
           <h1>Frieda Jacobson</h1>
           <p>https://www.linkedin.com/in/frieda-jacobson-483123140/
           https://github.com/kajakali
           </p>
           {this.state.showThingsIveDone
           ?         
           <Box>
                <h2>Things I've Done</h2>
           <Box style={{textAlign: 'center'}}>
           <Box style={boxstyle}>
                <h3>AmeriCorps*NCCC</h3>
               <img style={{width: 380}} src='https://cdn.freebiesupply.com/logos/thumbs/2x/americorps-nccc-logo.png' alt='AmeriCorps NCCC' />
           </Box>
           <Box style={boxstyle}>
                <h3>CVN 72 USS Abraham Lincoln</h3>
               <img style={{width: 380}} src='https://www.navy.mil/management/photodb/webphoto/web_170511-N-SA173-199.jpg' alt='CVN 72 does high speed turns' />
           </Box>
           <Box style={boxstyle}>
                <h3>Metropolitan State University Chemistry Degree</h3>
               <img src='https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=380
               &q=80' alt='major league baseballs' />
           </Box>
           </Box>
          
           <button onClick={() => this.setState({showThingsIveDone: false})}>Things I Like</button>
         </Box>
            
           :
           <Box>
            <h2>Things I Like</h2>
            <Box style={{textAlign: 'center'}}>
            <Box style={boxstyle}>
                Space
                <img style={{width: 380}}src='https://images-assets.nasa.gov/image/PIA04921/PIA04921~medium.jpg' alt='Andromeda galaxy' />
            </Box>
            <Box style={boxstyle}>
                Rain
                <img src='https://images.unsplash.com/photo-1572883781464-e76e5597e432?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80' alt='walking in the rain in the city' />
            </Box>
            <Box style={boxstyle}>
                Baseball
                <img src='https://images.unsplash.com/photo-1516731415730-0c607149933a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80' alt='major league baseballs' />
            </Box>
            </Box>
           
            <button onClick={() => this.setState({showThingsIveDone: true})}>Things I've Done</button>
           </Box>
           }
      {/*            <div class="contents">
        
        
        <h2>Professional Summary</h2>
           <p>Successful mechanic who managed a divison of 40 people to maintain and operate an engineroom on a nuclear aircraft carrier. Created a system to control gauge calibrations, scheduled, deconflicted, and performed maintenance, presented training, developed systems knowledge to maintain safety and steam plant cleanliness. </p>

        <h2>AmeriCorps NCCC   <span class="dateStyle">2006-2007</span></h2>
           <p><ul>
 <li>Performed community service work across the United States, working in teams of ten to accomplish the goals of various organizations. Performed cleanup of buildings and land for Hurricanes Rita and Katrina, built houses with Habitat for Humanity, was a counselor at a YMCA summer camp, and led tours at the National Mississippi River Museum and Aquarium.</li> </ul></p>
        <h2>Navy   <span class="dateStyle">2008-2014</span></h2>
 
 <h4>Training</h4>
                  <p><ul>
<li>Earned honorman status for best grades while learning nuclear power.</li> <li>Earned award for teaching shipmates and helping them to catch up in qualifications.</li>
</ul></p>
 <h4>USS Abraham Lincoln</h4>
              <p><ul>
                   <li>Earned a Navy and Marine Corps achievement medal for creating a gauge calibration system for thousands of gauges</li>
                   <li>Earned a Navy and Marine Corps achievement medal for work as a Corrective Maintenance Specialist (including repair of a reboiler feed pump to supply heating water) and for work as a Leading Petty Officer of a division of 40 people</li>
                   <li>Implemented Work Controls for a Reactor Compartment Overhaul, including isolating major ship's systems and deconflicting maintenance throughout the ship</li>
             </ul></p>
        <h2>College   <span class="dateStyle">2015-2017</span></h2>

 <p><ul>
    <li>Earned Bachelors Degree in Chemistry, with a minor in Applied Mathematics, studying at Saint Paul College and Metropolitan State University</li>
    <li>Outstanding Student Finalist</li>
 </ul></p>
  <h2>Skills</h2>
          Efficient, systems oriented, team player, problem solver, fluent in Spanish, experienced presenter, quick learner, skilled at identifying and clarifying miscommunications.
</div> */}
        </div>
     );
   }
 }



 export default DoneThings;