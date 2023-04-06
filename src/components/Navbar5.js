import React from "react";
import './Navbar5.css'
function Navbar5() {
  return (
    <div>
      <nav className="onboarding-main__nav mhA">
        <div>
          <li-icon aria-hidden="true" type="linkedin-logo" className="onboarding-main__nav-logo" size="28dp" color="brand">
            <img src="https://edcaterconnect.com/static/media/edcater_logo.7559f92e5562129202e8.png" alt="Logo" style={{ width: "150px" }}></img>
          </li-icon>
        </div>
      </nav>

      <div className="scaffold-layout scaffold-layout--breakpoint-xl scaffold-layout--main scaffold-layout--reflow">
        <div className="scaffold-layout__inner scaffold-layout-container scaffold-layout-container--reflow">
          <div className="scaffold-layout__row scaffold-layout__content scaffold-layout__content--main">
            <main id="main" className="scaffold-layout__main">
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
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <section class="onboarding-profile-edu onboarding-widget__single-card-container mhA display-flex justify-center">
        <div class="onboarding-profile-edu--has-min-width">
          <div class="onboarding-profile-form full-width">
            <div>
              <div class="onboarding-profile-form-field">
                <label class="onboarding-profile-form-field__label t-14 t-black--light t-normal mt0 truncate onboarding-profile-form-field__label--required" for="typeahead-input-for-school-name">
                  School or College/University
                </label>

                <div class="onboarding-profile-edu__school-name">
                  <div class="onboarding-profile-typeahead onboarding-form-field__typeahead">
                    <div class="search-basic-typeahead search-vertical-typeahead onboarding-profile-typeahead__basic-typeahead relative">
                      <input id="typeahead-input-for-school-name" class="onboarding-profile-typeahead__input onboarding-input " role="combobox" aria-autocomplete="list" aria-activedescendant="" aria-expanded="false" type="text"></input>
                    </div>
                  </div>
                </div>

                <div class="onboarding-profile-error-container"></div>
              </div>
            </div>

            <section>
              <h3 class="visually-hidden">Time period</h3>
              <div class="onboarding-profile-edu__form-field-container">
                <div class="mr5 onboarding-profile-edu__form-field onboarding-profile-edu__school-years-form-field flex-grow-1">
                  <div class="onboarding-profile-form-field">
                    <label class="onboarding-profile-form-field__label t-14 t-black--light t-normal mt0 truncate onboarding-profile-form-field__label--required" for="onboarding-profile-edu-start-year">
                      Start year
                    </label>

                    <span>
                      <select data-test-year-select="" id="onboarding-profile-edu-start-year" class="onboarding-input">
                        <option value="">-</option>

                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                      </select>
                    </span>
                  </div>
                </div>

                <div class="onboarding-profile-edu__form-field onboarding-profile-edu__school-years-form-field flex-grow-1">
                  <div class="onboarding-profile-form-field">
                    <label class="onboarding-profile-form-field__label t-14 t-black--light t-normal mt0 truncate onboarding-profile-form-field__label--required" for="onboarding-profile-edu-end-year">
                      End year (or expected)
                    </label>

                    <span>
                      <select data-test-year-select="" id="onboarding-profile-edu-end-year" class="onboarding-input">
                        <option value="">-</option>

                        <option value="2030">2030</option>
                        <option value="2029">2029</option>
                        <option value="2028">2028</option>
                        <option value="2027">2027</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>

              <div class="onboarding-profile-error-container"></div>
            </section>

            <div class="overflow-hidden focused-easeIn-motion onboarding-profile-edu__accordion--is-expanded">
              <div class="onboarding-profile-edu__form-field onboarding-profile-edu__over-16">
                <div data-control-name="profile_edu_is_over_16_toggle" id="ember196" class="artdeco-toggle artdeco-toggle--24dp artdeco-toggle--default artdeco-toggle--toggled ember-view">
                  <span aria-hidden="true" class="artdeco-toggle__text" data-artdeco-toggle-text="true" data-artdeco-toggled="">
                    Yes
                  </span>
                  <label for="add-edu-over-16"  data-artdeco-toggle-label="true" class="artdeco-toggle__label  toggled default">
                    <span class="label ">I’m over 16</span>
                  </label>

                  <input
                    role="switch"
                    aria-checked="true"
                    class="input artdeco-toggle__button artdeco-toggle__button--24dp"
                    data-artdeco-toggle-button="true"
                    id="add-edu-over-16"
                    type="checkbox"
                  ></input>
                </div>
              </div>
            </div>

            <div
              class="overflow-hidden focused-easeInOut-motion
        onboarding-profile-edu__accordion--is-collapsed"
            >
              
            </div>

            <footer class="mt5 text-align-center">
              <button
                data-test-onboarding-profile-education-not-student-button="true"
                id="ember197"
                class="onboarding-profile-cta full-width mb4 artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view"
              >
                <span class="artdeco-button__text">I’m not a student</span>
              </button>

              <button
                data-test-onboarding-profile-education-continue-button="true"
                disabled=""
                id="ember198"
                class="onboarding-profile-cta full-width artdeco-button artdeco-button--4 artdeco-button--primary artdeco-button--disabled ember-view"
              >
                <span class="artdeco-button__text">Continue</span>
              </button>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar5;
