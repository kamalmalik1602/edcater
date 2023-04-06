import React from "react";
import "./Navbar.css";
function Navbar() {
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

      <div
        className="scaffold-layout
    scaffold-layout--breakpoint-xl
    scaffold-layout--main
    
    scaffold-layout--reflow
    
    "
      >
        <div
          className="scaffold-layout__inner scaffold-layout-container
      scaffold-layout-container--reflow
      "
        >
          <div
            className="scaffold-layout__row scaffold-layout__content
          scaffold-layout__content--main
          
          
          
          
          "
          >
            <main
              id="main"
              className="scaffold-layout__main
            
            "
            >
              <div className="onboarding-main__container">
                <div className="onboarding-widget onboarding-profile-edit">
                  <div className="onboarding-widget__wrapper">
                    <div className="onboarding-widget__main-content">
                      <div className="onboarding-header mhA text-align-center">
                        <h1 className="text-heading-xlarge pt6 pb3 ">
                          Your profile helps you discover new people and
                          opportunities
                        </h1>
                      </div>

                      <section
                        className="onboarding-profile-edu onboarding-widget__single-card-container mhA display-flex justify-center
            hidden"
                      ></section>

                      <section
                        className="onboarding-widget__single-card-container onboarding-profile-edit__container mhA
            "
                      >
                        <div className="onboarding-profile-form full-width">
                          <div
                            className="onboarding-profile-form-field
    "
                          >
                            <label
                              className="onboarding-profile-form-field__label t-14 t-black--light t-normal mt0 truncate
        onboarding-profile-form-field__label--required
        "
                              for="typeahead-input-for-title"
                            >
                              Most recent job title
                            </label>

                            <div className="onboarding-profile-typeahead">
                              <div className="search-basic-typeahead search-vertical-typeahead onboarding-profile-typeahead__basic-typeahead relative">
                                <input
                                  id="typeahead-input-for-title"
                                  className="onboarding-profile-typeahead__input onboarding-input "
                                  role="combobox"
                                  aria-autocomplete="list"
                                  aria-activedescendant=""
                                  aria-expanded="false"
                                  type="text"
                                ></input>
                              </div>
                            </div>

                            <div className="onboarding-profile-error-container"></div>
                          </div>

                          <footer className="mt3 text-align-center">
                            <button
                              id="ember9"
                              className="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view full-width mb4"
                            >
                              <span className="artdeco-button__text">
                                I’m a student
                              </span>
                            </button>

                            <button
                              disabled=""
                              id="ember10"
                              className="artdeco-button artdeco-button--4 artdeco-button--primary artdeco-button--disabled ember-view full-width"
                            >
                              <span className="artdeco-button__text">
                                Continue
                              </span>
                            </button>
                          </footer>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
