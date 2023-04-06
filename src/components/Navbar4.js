import React from "react";
import "./Navbar4.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
function Navbar4() {
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

                      <section className="onboarding-profile-edu onboarding-widget__single-card-container mhA display-flex justify-center hidden"></section>
                      <section className="onboarding-widget__single-card-container onboarding-profile-edit__container mhA">
                        <div className="onboarding-profile-form full-width">
                          <div className="onboarding-profile-form-field">
                            <label
                              className="onboarding-profile-form-field__label t-14 t-black--light t-normal mt0 truncate onboarding-profile-form-field__label--required"
                              for="typeahead-input-for-title"
                            >
                              Most recent job title
                            </label>

                            <div class="onboarding-profile-typeahead">
                              <div class="search-basic-typeahead search-vertical-typeahead onboarding-profile-typeahead__basic-typeahead relative">
                                <input
                                  id="typeahead-input-for-title"
                                  class="onboarding-profile-typeahead__input onboarding-input "
                                  role="combobox"
                                  aria-autocomplete="list"
                                  aria-activedescendant=""
                                  aria-expanded="false"
                                  type="text"
                                ></input>
                              </div>

                              <div
                                class="onboarding-profile-insight onboarding-profile-edit__jobs-title-insight-container"
                                role="status"
                                aria-live="assertive"
                              >
                                <li-icon
                                  aria-hidden="true"
                                  type="lightbulb"
                                  class="onboarding-profile-insight__icon onboarding-profile-insight__icon--is-highlighted onboarding-profile-reward-insight"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    data-supported-dps="24x24"
                                    fill="currentColor"
                                    class="mercado-match"
                                    width="24"
                                    height="24"
                                    focusable="false"
                                  >
                                    <path d="M10 20h4v.1a1.9 1.9 0 01-1.9 1.9h-.2a1.9 1.9 0 01-1.9-1.9zm4.68-14.47A1 1 0 0016 5l.76-1.85a1 1 0 00-.54-1.3 1 1 0 00-1.31.54l-.76 1.85a1 1 0 00.53 1.29zm5.09 4.33l1.85-.76a1 1 0 00.54-1.31 1 1 0 00-1.3-.54L19 8a1 1 0 00-.54 1.31 1 1 0 001.3.55zM4.23 14.14l-1.85.76a1 1 0 00-.54 1.31 1 1 0 001.3.54L5 16a1 1 0 00.54-1.31 1 1 0 00-1.3-.55zm17.39.76l-1.85-.76A1 1 0 0019 16l1.85.76a1 1 0 00.78-1.86zM5 8l-1.86-.75a1 1 0 00-1.3.54 1 1 0 00.54 1.31l1.85.76A1 1 0 005 8zm3-3a1 1 0 001.31.54 1 1 0 00.54-1.3L9.1 2.38a1 1 0 00-1.31-.54 1 1 0 00-.54 1.3zm9 6.91V12a5.48 5.48 0 01-1.61 3.88l-.07.08a3.94 3.94 0 00-1.08 1.94L14 19h-4l-.24-1.08A4 4 0 008.68 16l-.07-.07A5.51 5.51 0 017 12v-.1A4.9 4.9 0 0111.9 7h.2a4.9 4.9 0 014.9 4.9zm-2 0A2.9 2.9 0 0012.11 9h-.21A2.9 2.9 0 009 11.9v.1a3.47 3.47 0 001 2.47l.08.08a5.92 5.92 0 011.5 2.45h.84a6 6 0 011.48-2.44l.08-.07A3.48 3.48 0 0015 12z"></path>
                                  </svg>
                                </li-icon>
                                <div class="onboarding-profile-insight__content pl3 t-14 t-black--light">
                                  There are 107964 people on LinkedIn with
                                  similar job titles in your location.
                                </div>
                              </div>
                            </div>

                            <div class="onboarding-employment-type-picker">
                              <div class="onboarding-profile-form-field">
                                <label
                                  class="onboarding-profile-form-field__label t-14 t-black--light t-normal mt0 truncate"
                                  for="typeahead-input-for-employment-type-picker"
                                >
                                  Employment type
                                </label>

                                <Autocomplete
                                  id="free-solo-demo"
                                  options={top100Film.map(
                                    (option) => option.title
                                  )}
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </div>
                            </div>
                            <div>
                              <div class="onboarding-profile-form-field">
                                <label
                                  class="onboarding-profile-form-field__label t-14 t-black--light t-normal mt0 truncate onboarding-profile-form-field__label--required"
                                  for="typeahead-input-for-company"
                                >
                                  Most recent company
                                </label>

                                <Autocomplete
                                  id="free-solo-demo"
                                  options={top100Films.map(
                                    (option) => option.title
                                  )}
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </div>
                            </div>
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

export default Navbar4;
const top100Film = [
  { title: "Select One" },
  { title: "Full-time" },
  { title: "Part-time" },
  { title: "Self-employed" },
  { title: "Freelance " },
  { title: "Internship" },
  { title: "Trainee" },
];

const top100Films = [{ title: "EDCater" }];
