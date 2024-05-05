// Sample data for cafes (replace with actual data)
const cafes = [
    { name: "Cozy Cafe", location: "123 Main St", rating: 4.5, image: "cozy cafe.jpeg" },
    { name: "Java Junction", location: "456 Elm St", rating: 4.2, image: "download(12).jpeg" },
    { name: "Bean Bliss", location: "789 Oak St", rating: 4.7, image: "download(13).jpeg" }
];

// Function to generate HTML for cafes
function generateCafeHTML(cafe) {
    return `
        <div class="cafe">
            <img src="${cafe.image}" alt="${cafe.name}">
            <h3>${cafe.name}</h3>
            <p>${cafe.location}</p>
            <p>Rating: ${cafe.rating}</p>
        </div>
    `;
}

// Function to display cafes
function displayCafes() {
    const cafeListElement = document.getElementById("cafe-list");
    let cafeHTML = "";
    cafes.forEach(cafe => {
        cafeHTML += generateCafeHTML(cafe);
    });
    cafeListElement.innerHTML = cafeHTML;
}

// Display cafes when the page loads
document.addEventListener("DOMContentLoaded", displayCafes);
