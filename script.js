document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pinCode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    const foodChoices = [];
    document.querySelectorAll('input[name="food"]:checked').forEach(food => {
        foodChoices.push(food.value);
    });

    if (foodChoices.length < 2) {
        alert("Please select at least two food options.");
        return;
    }

    const tableBody = document.getElementById('userTableBody');
    const newRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = firstName;
    newRow.appendChild(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = lastName;
    newRow.appendChild(lastNameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = email;
    newRow.appendChild(emailCell);

    const addressCell = document.createElement('td');
    addressCell.textContent = address;
    newRow.appendChild(addressCell);

    const pinCodeCell = document.createElement('td');
    pinCodeCell.textContent = pinCode;
    newRow.appendChild(pinCodeCell);

    const genderCell = document.createElement('td');
    genderCell.textContent = gender;
    newRow.appendChild(genderCell);

    const foodChoicesCell = document.createElement('td');
    foodChoicesCell.textContent = foodChoices.join(', ');
    newRow.appendChild(foodChoicesCell);

    const stateCell = document.createElement('td');
    stateCell.textContent = state;
    newRow.appendChild(stateCell);

    const countryCell = document.createElement('td');
    countryCell.textContent = country;
    newRow.appendChild(countryCell);

    tableBody.appendChild(newRow);

    document.getElementById('form').reset();
});
