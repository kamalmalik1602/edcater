import React, { useState } from "react";
import "./Navbar8.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
function Navbar8() {
  return (
    <div>
      <nav className="onboarding-main__nav mhA">
        <div>
          <li-icon aria-hidden="true" type="linkedin-logo" className="onboarding-main__nav-logo"  size="28dp" color="brand">
            <img src="https://edcaterconnect.com/static/media/edcater_logo.7559f92e5562129202e8.png" alt="Logo" style={{ width: "150px" }}></img>
          </li-icon>
        </div>
      </nav>

      <div className="onboarding-main__container">
        <div className="onboarding-widget onboarding-profile-edit">
          <div className="onboarding-widget__wrapper-1">
            <div className="onboarding-widget__main-content">
              <div className="onboarding-header mhA text-align-center">
                <h1 className="text-heading-xlarge pt6 pb3 ">
                  What kind of job are you looking for?
                </h1>
              </div>
              <h2 class="onboarding-header__subtitle mb2">
                Your response is private to you.
              </h2>
              <section
                className="onboarding-profile-edu onboarding-widget__single-card-container mhA display-flex justify-center hidden"></section>

              <section className="onboarding-widget__single-card-container onboarding-profile-edit__container mhA">
                <div className="onboarding-profile-form full-width">
                  <div className="onboarding-profile-form-field">
                    <label className="onboarding-profile-form-field__label t-14 t-black--light t-normal mt0 truncate onboarding-profile-form-field__label--required" for="typeahead-input-for-title">
                      job titles
                    </label>
                    <Autocomplete
                      id="free-solo-demo"
                      options={top100Film.map((option) => option.title)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                </div>
              </section>
              
              <section className="onboarding-widget__single-card-container onboarding-profile-edit__container mhA ">
                <div className="onboarding-profile-form full-width">
                  <div className="onboarding-profile-form-field">
                    <label className="onboarding-profile-form-field__label t-14 t-black--light t-normal mt0 truncate onboarding-profile-form-field__label--required" for="typeahead-input-for-title">
                      job locations
                    </label>
                    <Autocomplete
                      id="free-solo-demo"
                      options={top100Films.map((option) => option.title)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    </div>
                   </div>
                  </section>


                <div class="social-container cta">
                    <div>
                    <label for="myCheckboxId" class="checkbox">
                        <input class="checkbox__input" type="checkbox" name="myCheckboxName" id="myCheckboxId"></input>
                        <div class="checkbox__box"></div>
                        <div className="wr">I'm open to remote work</div>
                    </label>
                    <button className="butn">Next</button>
                </div>
                   </div>
                
                    </div>
            
                 </div>
            </div>
        
         </div>
      
    </div>
    
  );
}

export default Navbar8;

const top100Film = [{ title: "Ex: Sales Manager" }];

const top100Films = [{ title: "Ex: Portland, oregon" }];
