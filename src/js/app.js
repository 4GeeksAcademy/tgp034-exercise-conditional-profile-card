import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let fullname = variables.name == null ? "Name" : variables.name;
  fullname += " ";
  fullname += variables.lastName == null ? "Lastname" : variables.lastName;
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${fullname}</h1>
          <h2>${variables.role == null ? "Role" : variables.role}</h2>
          <h3>${variables.city == null ? "City" : variables.city}, 
          ${variables.country == null ? "Country" : variables.country}</h3>
          <ul class=${variables.socialMediaPosition}>
            <li><a href=${
              variables.twitter == null
                ? "https://x.com/"
                : "https://x.com/" + variables.twitter
            }><i class="fab fa-twitter"></i></a></li>
            <li><a href=${
              variables.github == null
                ? "https://github.com/"
                : "https://github.com/" + variables.github
            }><i class="fab fa-github"></i></a></li>
            <li><a href=${
              variables.linkedin == null
                ? "https://www.linkedin.com/"
                : "https://www.linkedin.com/" + variables.linkedin
            }><i class="fab fa-linkedin"></i></a></li>
            <li><a href=${
              variables.instagram == null
                ? "https://www.instagram.com/"
                : "https://www.instagram.com/" + variables.instagram
            }><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://universidadeuropea.com/resources/media/images/F2F-G-inge-informatica-1440x464.2e16d0ba.fill-767x384.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://media.licdn.com/dms/image/v2/D4D03AQGYEERZJhEVrA/profile-displayphoto-shrink_200_200/B4DZXRpYulHsAY-/0/1742979042592?e=1753920000&v=beta&t=dZBvjuboE4t0qXweJ3zt0dZ_WBmiMG9Li8ke9k8tVzA",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
