
function addingEventListener() {
    const button = document.getElementById("button"); // Select the correct element

if (button) { // Ensure the element exists
    button.addEventListener("click", function() {
        alert("Button clicked!");
    });
}
}

addingEventListener(); // Call the function