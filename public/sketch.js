function setup() {
  //P5.js useEffect, essentially. P5 is sourced in the index.html

  noCanvas(); //it includes a canvas automatically, so you have to tell it no

  const video = createCapture(VIDEO); //THIS is what activates the webcam!

  video.size(320, 240); //resize as needed using .size();

  const button = document.getElementById("submit"); //create button variable
  button.addEventListener("click", async (event) => {
    //create event listener

    if ("geolocation" in navigator) {
      //if geolocation is available
      console.log("geolocation available");
      navigator.geolocation.getCurrentPosition((position) => {
        //get the current position
        console.log("position:", position);
        //assign variables to latitude and longitude and post in p tags
        const lat = position.coords.latitude;
        document.getElementById("latitude").textContent = lat;
        const lon = position.coords.longitude;
        document.getElementById("longitude").textContent = lon;

        video.loadPixels(); //this is needed for image capture
        const image64 = video.canvas.toDataURL(); //assign variable to create Base64-encoded image

        const data = { lat, lon, image64 }; //bundle up variables you wanna send

        //need options for fetch POST (at least method, body)
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        fetch("/api", options) //fetch post needs path and options
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    } else {
      console.log("geolocation is not available");
    }
  });
}
