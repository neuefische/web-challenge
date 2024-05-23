console.clear();

console.log("Sanity Check");

const peopleInSpaceNumber = document.querySelector(
  '[data-js="people-in-space"]'
);
const peopleList = document.querySelector('[data-js="people-list"]');
const filterAllButton = document.querySelector('[data-js="filter-all"]');
const filterIssButton = document.querySelector('[data-js="filter-iss"]');
const filterTiangongButton = document.querySelector(
  '[data-js="filter-tiangong"]'
);

async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  peopleInSpaceNumber.textContent = data.number;
  allPeople = data.people;
  updatePeopleList(allPeople);
  console.log("data:", data);
}

function updatePeopleList(people) {
  peopleList.innerHTML = "";
  people.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${person.name} (${person.craft})`;
    peopleList.appendChild(listItem);
  });
}

filterAllButton.addEventListener("click", () => {
  updatePeopleList(allPeople);
});

filterIssButton.addEventListener("click", () => {
  const issPeople = allPeople.filter((person) => person.craft === "ISS");
  updatePeopleList(issPeople);
});

filterTiangongButton.addEventListener("click", () => {
  const tiangongPeople = allPeople.filter(
    (person) => person.craft === "Tiangong"
  );
  updatePeopleList(tiangongPeople);
});

getPeopleInSpace();
