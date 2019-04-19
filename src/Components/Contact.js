import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="two columns"></div>
            <div className="five columns">
               <img className="profile-pic"  src={profilepic} alt="Luc Le Profile Pic" />
            </div>
            <div className="five columns">
            <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
                     <a href={"tel:" + phone}>{phone}</a><br/>
                     <a href={"mailto:" + email}>{email}</a>
					   </p>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>          
      </div>
   </section>
    );
  }
}

export default Contact;
