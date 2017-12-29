//This is the Javascript for the navigation menu
(function() {

  let menuButton = document.getElementById("mainmenu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; //hidden at first
  function toggleMenu() {
    if (toggle) { //if menu is visible
      navMenu.classList.remove("displaymenu"), //hide the menu
        toggle = false
    } else { // false: it's hidden
      navMenu.classList.add("displaymenu"), // show the menu
        toggle = true
    }
  }

})();


//This is the Javascript for the input of the user name and the colour change of the background
(function() {

  let myName = document.getElementById("my-name");
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name");
  let clearStorage = document.getElementById("clearStorage");
  let nameStored = localStorage.name;
  let chosenColour = document.getElementById('colorPicker');
  let colourStored = localStorage.colour;

  // Displays the name in the console at this stage:
  console.log(`Name on page load: ${nameStored}`);

  if (nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  } else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  if (colourStored) {
    document.body.style.backgroundColor = colourStored;
  }

  function clearStorageFunc() {
    localStorage.clear();
  }

  function changeBGColour() {
    document.body.style.backgroundColor = chosenColour.value;
    colourStored = chosenColour.value;
    localStorage.colour = colourStored;
  }

  function PerformGreeting() {
    if (userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
    // Gets the name the user entered:
    nameStored = userName.value;

    // Shows the name in "my-name":
    myName.innerHTML = nameStored;

    // Puts the name into localStorage:
    localStorage.name = nameStored;

    // Displays the name in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);

    return false;
  }

  if (getName) {
    if (typeof event === "undefined") {
      getName.onsubmit = PerformGreeting; // for Firefox
    } else {
      getName.addEventListener("submit", PerformGreeting);
      event.preventDefault();
    }
  }
  if (clearStorage) {
    clearStorage.addEventListener("click", clearStorageFunc);
  }

  if (chosenColour) {
    chosenColour.addEventListener("change", changeBGColour);
  }

}());


//This is the Javascript for Wiki API
(function() {

  console.log("test");
  // creates a new object called xhr
  // which will handle the API call
  let xhr = new XMLHttpRequest();
  // console.log(`Current readyState: ${xhr.readyState}`);

  let queryBox = document.getElementById("wikiQuery");
  let searchForm = document.getElementById("searchForm");
  let demoJSON = document.getElementById("demo");

  // constructs the base for the request url
  let baseURL = "https://en.wikipedia.org/w/api.php? \
                format=json& \
                action=query& \
                generator=search& \
                gsrnamespace=0& \
                gsrlimit=10& \
                prop=info|extracts|langlinks|pageimages& \
                inprop=url& \
                exintro& \
                explaintext& \
                exsentences=1& \
                exlimit=max& \
                llprop=url& \
                lllimit=max& \
                piprop=thumbnail|name& \
                origin=*& \
                gsrsearch=";

  function gatherData(data) {
    // console.log(data);
    // initialise some variables
    let theData = "";
    let langLinks = "";
    let wikiimg = "<wikiimg>";
    const languages = ["en", "de", "zh", "fr", "es", "ja", "ar", "ko", "el"];
    let k;
    let key;
    // loop through the result pages by pageid
    for (key in data.query.pages) {
      let tmp = data.query.pages[key];
      if (tmp.thumbnail) {
        wikiimg = `<wikiimg src="${tmp.thumbnail.source}" alt="${tmp.title}"> `;
      }
      let title = `<strong><a href="${tmp.fullurl}">${tmp.title}</a></strong>`;
      let extract = `<span class="txt">${tmp.extract}</span>`;
      let langLinks = "";
      for (k in tmp.langlinks) {
        if (languages.includes(tmp.langlinks[k].lang)) {
          langLinks += `<a href=${tmp.langlinks[k].url}>${tmp.langlinks[k].lang}</a> `;
        }
      }
      theData += `<li>${wikiimg} ${title} ${extract} <span class="langs">${langLinks}</span></li>`;
    }
    demoJSON.innerHTML = theData;
  }

  // the API call is triggered once the user submits a query
  if (searchForm) {
    searchForm.addEventListener("submit", function(ev) {
      // complete the request url
      let wiki = baseURL + queryBox.value;
      // open a connection to the requested API url
      xhr.open("GET", wiki, true);
      // be polite to Wikipedia
      xhr.setRequestHeader('Api-User-Agent', 'Example/1.0');
      // send off that request
      xhr.send();
      // if the response was ok, handle the response data using the gatherData function
      xhr.onreadystatechange = function() {
        // console.log(`Current readyState: ${xhr.readyState}`);
        if (xhr.readyState === 4 && xhr.status === 200) {
          // parse the response JSON
          let response = JSON.parse(xhr.responseText);
          // deal with the parsed JSON data
          gatherData(response);
        }
      };
      // clear the search box
      queryBox.value = "";
      ev.preventDefault();
    }, false);
  }

}());


//This is the Javascript for the slideshow on the sim deals page
(function() {

  //The back arrow button is a slideshow

  let backArrow = document.getElementById("back-arrow");

  //For the forward arrow button in the slideshow

  let forwardArrow = document.getElementById("forward-arrow");

  //First image in the slideshow

  let slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("slides");
    if (n > x.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    if (x[slideIndex - 1]) {
      x[slideIndex - 1].style.display = "block";
    }
  };
  //if there is a back arrow element, add the event listener
  if (backArrow) {
    backArrow.addEventListener("click", function() {
      plusDivs(-1)
    });
  }

  //If there is a forward element, add the event listener

  if (forwardArrow) {
    forwardArrow.addEventListener("click", function() {
      plusDivs(1)
    });

  }

})();


//This is the Javascript for Google Map API
function initMap() {
  let leicester = {
    lat: 52.629109,
    lng: -1.139164
  };

  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: leicester
  });

  // these set different markers you want to show on your map
  let markerLeicester = new google.maps.Marker({
    position: leicester,
    map: map,
    title: 'Kimberlin Library'
  });
}


//This is the javascript for the google language translator
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: 'en'
    },
    'google_translate_element'
  );
}
