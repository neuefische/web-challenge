console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    // Fetch data from the API
    const response = await fetch(url);
    const data = await response.json();

    // Log the entire data object
    console.log(data);

    // Log different values of the data object
    console.log(data.results); // Array of people objects
    console.log(data.results[0]); // First person object in the results array
    console.log(data.results[0].name); // Name of the first person

    // Find R2-D2 in the results array
    const r2d2 = data.results.find((person) => person.name === "R2-D2");
    if (r2d2) {
      console.log("R2-D2's eye color:", r2d2.eye_color); // Log the eye color of R2-D2
    } else {
      console.log("R2-D2 not found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
