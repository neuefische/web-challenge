console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log(url);
  const data = await response.json();
  console.log(data.results[2].eye_color);
  return data.results;
}

fetchData();
