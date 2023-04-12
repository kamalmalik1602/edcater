import React from 'react'
import Card from './Card'
import './Navbar11.css'
function Navbar11() {
  return (
    <div>
      <nav className="onboarding-main__nav mhA">
        <div>
          <li-icon
            aria-hidden="true"
            type="linkedin-logo"
            className="onboarding-main__nav-logo"
            size="28dp"
            color="brand"
          >
            <img
              src="https://edcaterconnect.com/static/media/edcater_logo.7559f92e5562129202e8.png"
              alt="Logo"
              style={{ width: "150px" }}
            ></img>
          </li-icon>
        </div>
      </nav>

      <div className="onboarding-main__container">
        <div className="onboarding-widget onboarding-profile-edit">
          <div className="onboarding-widget__wrapper-1">
            <div className="onboarding-widget__main-content">
              <div className="onboarding-header mhA text-align-center">
                <h1 className="text-heading-xlarge pt6 pb3 ">
                    Great job setting up your profile.Next,connect with people you know.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form class="search-form">
  <input className="inp" type="text" placeholder="Search for someone specific to connect with..."></input>
</form>




{/* <div class="people-card">
  <div class="people-card-body">
    <img class="people-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLEziy2FWAM6Z0NT0yTmsmD2VySobPG4y7eWSEd4heKgu-cU0WCZLxn5Poox0Y9KYmyc&usqp=CAU"></img>
      <div class="people-subtitle">Pranjali Lohani</div>
      <p class="people-card-text">Consultant</p>
      <p class="people-card-text">KPMG</p>
      </div>
      </div> */}
<div className="card-content">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
      </div>
      <div className="footer">
      <a class="skiptag">Skip for now</a>
      <button class="footer_button-1">Next</button>
      </div>
    </div>
  )
}

export default Navbar11
