let number = 43
function add_to_list(){
    const display = document.getElementById('display')
    const li = document.createElement('li')
    li.className = 'list_item'
    li.textContent = number
   
    display.appendChild(li)    
    number += 1
}

function cal(){

}
const form = document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Create an empty object to store form data
    const formDataObject = {};

    // Get all form elements
    const formData = new FormData(this);

    // Iterate over form elements and populate the formDataObject
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    console.log(formDataObject);
    add_to_list()
});
