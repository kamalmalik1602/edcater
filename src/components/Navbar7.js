import React from "react";
import'./Navbar7.css'
function Navbar7() { 
  return (
    <div>
      <nav className="onboarding-main__nav mhA">
        <div>
          <li-icon aria-hidden="true" type="linkedin-logo" className="onboarding-main__nav-logo" size="28dp" color="brand">
            <img src="https://edcaterconnect.com/static/media/edcater_logo.7559f92e5562129202e8.png" alt="Logo" style={{ width: "150px" }}></img>
          </li-icon>
        </div>
      </nav>

      <div class="scaffold-layout scaffold-layout--breakpoint-lg scaffold-layout--main scaffold-layout--reflow">
        <div class="scaffold-layout__inner scaffold-layout-container scaffold-layout-container--reflow">
          <div class="scaffold-layout__row scaffold-layout__content scaffold-layout__content--main">
            <main id="main" class="scaffold-layout__main">
              <div class="onboarding-main__container">
                <div class="onboarding-widget onboarding-job-seeker">
                  <div class="onboarding-header mhA text-align-center">
                    <h1 class="text-heading-xlarge pt6 pb3 mb2">
                      Are you looking for a job?
                    </h1>

                    <h2 class="onboarding-header__subtitle mb2">
                      Your response is private to you.
                    </h2>
                  </div>

                  <div class="onboarding-job-seeker-intent__actions">
                    <fieldset>
                      <div class="onboarding-job-seeker-intent__option">
                        <input id="onboarding-job-seeker-intent-radio-button-ACTIVE" name="onboarding-job-seeker-intent-option" type="radio" value="ACTIVE"></input>
                        <label aria-label="Are you looking for a job? Yes, I’m actively looking for a new job" for="onboarding-job-seeker-intent-radio-button-ACTIVE" class="mt0 onboarding-job-seeker-intent__option--is-selected">
                          Yes, I’m actively looking for a new job
                        </label>
                      </div>
                      <div class="onboarding-job-seeker-intent__option">
                        <input id="onboarding-job-seeker-intent-radio-button-PASSIVE" name="onboarding-job-seeker-intent-option" type="radio" value="PASSIVE"></input>
                        <label aria-label="Are you looking for a job? Not really, but would consider the right opportunity" for="onboarding-job-seeker-intent-radio-button-PASSIVE" class="mt0">
                          Not really, but would consider the right opportunity
                        </label>
                      </div>
                      <div class="onboarding-job-seeker-intent__option">
                        <input id="onboarding-job-seeker-intent-radio-button-INACTIVE" name="onboarding-job-seeker-intent-option" type="radio"  value="INACTIVE"></input>
                        <label aria-label="Are you looking for a job? No, I’m not interested in any job opportunity" for="onboarding-job-seeker-intent-radio-button-INACTIVE"  class="mt0">
                          No, I’m not interested in any job opportunity
                        </label>
                      </div>
                    </fieldset>
                    <button  aria-label="Next"  id="ember49" class="artdeco-button artdeco-button--4 artdeco-button--primary ember-view full-width mt2 mb4">
                      <span class="artdeco-button__text">Next</span>
                    </button>
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

export default Navbar7;
