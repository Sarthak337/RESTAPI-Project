import React, { Component } from 'react'
import './App.css'


class App extends Component {
  constructor(props){
    super(props)
        this.state={
           COMPANY_NAME:'Please select company name',
           SALUTATION: 'NA' ,
           name:'',
           referred_by:'NA',
           designation:'NA',
           department:'',
           email:'',
           mob_no:'',
           directnumber:'',
           remarks:'',
           COLLEGE_CHOICES:'',
           y_of_p:'',
           Working_since:'',
           degree:'',
           LinkedIn:'',
           Facebook:'',
           Twitter:'',
           OFFICE_DETAILS :'NA',
           Board_line_number:'',
           Address:'',
           Country:'',
           City:'',
           RECRUITMENT_CHOICES:''
        }
        
    }




    handleSALUTATIONChange = (event) => {
      this.setState({
          saturation: event.target.value
      })
   }
   handleNameChange = (event) => {
       this.setState ({
           name: event.target.value
       })
   }
   handleReferred_byChange = (event) => {
       this.setState({
           referred_by: event.target.value
       })
   }
   handleDesignationChange = (event) => {
       this.setState({
           designation: event.target.value
       })
   }
   handleDepartmentChange = (event) => {
       this.setState({
           department: event.target.value
       })
    }
    handleEmailChange = (event) => {
       this.setState({
           email: event.target.value
       })
   }
   handleMob_noChange = (event) => {
       this.setState({
           mob_no: event.target.value
       })
   }
   handleRemarksChange = (event) => {
       this.setState({
           remarks: event.target.value
       })
   }
   handleCOLLEGE_CHOICESChange = (event) => {
    this.setState({
        COLLEGE_CHOICES: event.target.value
    })
    }
    handleY_of_pChange = (event) => {
     this.setState ({
         y_of_p: event.target.value
     })
    }
    handleDegreeChange = (event) => {
     this.setState({
         degree: event.target.value
     })
    }
    handleWorking_SinceChange = (event) =>{
        this.setState({
            Working_since : event.target.value
        })
    }
    handleLinkedInChange =(event) => {
     this.setState({
        LinkedIn: event.target.value
     })
    }
    handleFacebookChange =(event) => {
     this.setState({
        Facebook: event.target.value
     })
    }
    handleTwitterChange =(event) => {
     this.setState({
        Twitter: event.target.value
     })
    }
 
    handleOFFICE_DETAILSChange = (event) => {
        this.setState({
        OFFICE_DETAILS: event.target.value
     })
    }
    handleBoard_line_numberChange = (event) => {
        this.setState ({
            Board_line_number: event.target.value
    })
    }
    handleAddressChange = (event) => {
        this.setState({
            Address: event.target.value
    })
    }
    handleCountryChange = (event) => {
        this.setState ({
        Country: event.target.value
    })
    }
    handleCityChange = (event) => {
        this.setState ({
        City: event.target.value
    })
    }
    handleRECRUITMENT_CHOICESChange = (event) => {
        this.setState ({
            RECRUITMENT_CHOICES: event.target.value
    })
    }

handleSubmit = (event) => {
   alert(`${this.state.co_name} ${this.state.SALUTATION} ${this.state.name} ${this.state.referred_by} ${this.state.designation}
   ${this.state.department} ${this.state.email} ${this.state.number} ${this.state.directnumber} ${this.state.remarks}
   ${this.state.COLLEGE_CHOICES} ${this.state.y_of_p} ${this.state.degree} ${this.state.Working_since} ${this.state.LinkedIn} ${this.state.Facebook} ${this.state.Twitter}
   ${this.state.Working_since} ${this.state.OFFICE_DETAILS} ${this.state.Board_line_number} 
   ${this.state.Address} ${this.state.Country} ${this.state.City} 
   ${this.state.RECRUITMENT_CHOICES}`)


   
   


  event.preventDefault()

}
async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
      const todos = await res.json();
      this.setState({
        contacts
      });
    } catch (e) {
      console.log(e);
    }
  }









 render(){
  return (
    
    <div>  
      <form onSubmit={this.handleSubmit}>
      <div className="navi"> &nbsp;&nbsp;&nbsp;
      <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-journal-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
      <path fillRule="evenodd" d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
      </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Info <div className="rgt"> <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-grid-3x3-gap-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
      </svg>&nbsp;&nbsp;&nbsp;<svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
      <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
      </svg></div>
      </div> 

    <div className="singlel"> &nbsp;&nbsp;&nbsp;
    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle-fill" fill="#33A1DE" xmlns="http://www.w3.org/2000/svg" display="inline-block">
    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
    </svg>
   
    <select className="company" value={this.state.co_name} onChange={this.handleCo_nameChange}>
        <option>Please select company name</option>
        <option>AXZ Company</option>
        <option>BXZ Company</option>
      </select>

      <div className="rgt"><button className="butn"  type="submit" onSubmit={this.handleSubmit}>Save</button></div>

    </div>



















      <div className="allform">
      <div className="App">
            <div className="formone">
                <div className="formtitle">Personal_Information</div>
                
                <label>Saturation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select className="company" value={this.state.saturation} onChange={this.handleSaturationChange}>
                <option value="NA">NA</option>
                <option value="Colonel">Colonel</option>
                <option value="Dr.">Dr.</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                </select><br></br>

                <label>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="company" type="text" value={this.state.name}
                onChange={this.handleNameChange}/><br></br>

                <label> Referred_By&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select className="company" value={this.state.referredby} onChange={this.handleReferredbyChange}>
                <option value="NA">NA</option>
                <option value="Mr.A">Mr.A</option>
                <option value="Mr.B">Mr.B</option>
                <option value="Mr.C">Mr.C</option> 
                </select><br></br>

                <label> Designation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select className="company" value={this.state.designation} onChange={this.handleDesignationChange}>
                <option value="NA">NA</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Administration">Administration</option>
                <option value="Accounts">Accounts</option>
                <option value="IT">IT</option>
                <option value="Management">Management</option>
                <option value="Marketing">Marketing</option>
                <option value="Technical">Technical</option>
                <option value="Purchase">Purchase</option>
                <option value="Others">Others</option>
                </select><br></br>
  
                <label>Department&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="company" type="text" value={this.state.department}
                onChange={this.handleDepartmentChange}/><br></br>

                <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="company" type="text" value={this.state.email}
                onChange={this.handleEmailChange}/><br></br>

                <label>Mobile Number</label>
                <input className="company" type="text" value={this.state.mob_no}
                onChange={this.handleMob_noChange}/><br></br>  

                <label>Remarks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <textarea className="broadinput" value={this.state.remarks} 
                onChange={this.handleRemarksChange}></textarea>  
             </div>   
        </div>  










        <div className="App">
            <div className="formone">
                <div className="formtitle">Pedigree</div>
                
                <label> Institution</label>
                <input type="radio" value="KIIT" name="Institution" onChange={this.handleCOLLEGE_CHOICESChange} ></input>KIIT
                <input type="radio" value="Others" name="Institution" onChange={this.handleCOLLEGE_CHOICESChange} ></input>others

                <br></br>

                <label>Year of passing</label>
                <input className="company" type="text" value={this.state.y_of_p}
                onChange={this.handleY_of_pChange}/><br></br>

                <label> Degree&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="company" type="text" value={this.state.degree}
                onChange={this.handleDegreeChange}/>
                <br></br>

                <label>Working_since</label>
                <select className="workingsince" value={this.state.month} onChange={this.handleWorking_SinceChange}>
                <option value="month">month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
                
                </select>
                <select className="workingsince" value={this.state.year} onChange={this.handleWorking_SinceChange}>
                <option value="Year">Year</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                </select>  <br></br><br></br>

                
                <div className="formtitle">Social_media_Link</div>  
                <label> Linkdln&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                 <input className="company" type="text" value={this.state.LinkedIn}
                onChange={this.handleLinkedInChange}/><br></br>
                
                <label> Facebook&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                 <input className="company" type="text" value={this.state.Facebook}
                onChange={this.handleFacebookChange}/><br></br>

                <label>Twitter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                 <input className="company" type="text" value={this.state.Twitter}
                onChange={this.handleTwitterChange}/><br></br>

            </div> 
          
        </div>  
















        
          
        <div className="App">
            <div className="formone">
                <div className="formtitle">Office Details</div>
               
                <label>Office Type&nbsp;&nbsp;</label>
                <select className="company" value={this.state.officetype} onChange={this.handleOFFICE_DETAILSChange}>
                <option value="NA">NA</option>
                <option value="Head Office">Head Office</option>
                <option value="Factory / Plant">Factory / Plant</option>
                <option value="Branch Office">Branch Office</option>
                <option value="Project Site">Project Site</option>
                <option value="Regional Office">Regional Office</option>
                <option value="Registered Office">Registered Office</option>
                <option value="Zonal Office">Zonal Office</option>
                </select>
                <br></br>

                

                
                <label>Board_Line_Number</label>
               <input  type="text"  className="boardline" value={this.state.Board_line_number}
                onChange={this.handleBoard_line_numberChange}/><br></br> 
                <br></br><br></br><br></br>
                <label>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <textarea className="broadinput" value={this.state.Address} onChange={this.handleAddressChange}></textarea> <br></br>

                <label>Country&nbsp;&nbsp;&nbsp;</label>
                <input className="company" type="text" value={this.state.Country}
                onChange={this.handleCountryChange}/><br></br> 
               
               <label>City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="company" type="text" value={this.state.City}
                onChange={this.handleCityChange}/><br></br> <br></br>
               
                <label></label>
                <input type="radio" value="Recruitments are taken from the office" name="rec" className="rbtn" onChange={this.handleRecChange}></input>Recruitments are taken from the office<br></br>
                <input type="radio" value="Yet to be confirmed" name="rec" className="rbtn" onChange={this.handleRecChange}></input>Yet to be confirmed

                <br></br>
                </div>   
        </div>    








      </div>
     
    </form>
    
    </div>
     
    
  );
}
}

export default App;


