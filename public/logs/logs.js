async function getData() {
  const response = await fetch("/api"); //fetch the data
  const data = await response.json(); //parse the data using .json

  for (item of data) {
    //loop through the response
    const root = document.createElement("div"); //create a root element

    const latitude = document.createElement("div"); //latitude element
    const longitude = document.createElement("div"); //longitude element
    //use textContent to assign value from GET using template literal
    latitude.textContent = `latitude: ${item.lat}`;
    longitude.textContent = `longitude: ${item.lon}`;

    const date = document.createElement("div"); //timestamp element
    //this makes timestamp pretty!
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = `date: ${dateString}`; //assign value using textContent

    const image = document.createElement("img"); //image element
    image.src = item.image64; //assign src
    image.alt = "miriam selfie"; //alt text

    //append the new divs to the root element
    root.append(latitude, longitude, date, image);
    //append the root to the document
    document.body.append(root);
  }

  console.log(data);
}

getData(); //make sure to call the function!
