let names = [
    "Joana",
    "Clara",
    "Jair",
    "Kiara",
    "Alexandre",
    "Joaquin",
    "Eloá",
    "Gian",
    "Bianca",
    "Edu",
    "Heitor",
    "Isadora",
    "Daniela",
    "Sophie",
    "Tomáz",
    "Samuel",
    "Juliana",
    "Michele",
    "Júlio"
];

// Sort names in ascending order
let sortedNames = names.sort();

// Reference
let input = document.getElementById("input");
input.addEventListener("keyup", (e) => {
    // Loop through above array
    // Initially remove all elements (so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
        // Convert input to lowercase and compare with each string
        if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value !== "") {
            // Create li element
            let listItem = document.createElement("li");
            // One common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('"+ i + "')");
            // Display matched part in bold
            let word = "<b>" + i.substring(0, input.value.length) + "</b>";
            word += i.substring(input.value.length);            
            // Display the value in array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }        
    }
});

function displayNames(value) {
    input.value = value;
    removeElements();
}

function removeElements() {
    // Clear all the items
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => item.remove());
}