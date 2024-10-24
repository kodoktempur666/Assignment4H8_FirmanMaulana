function TampilkanData() {

    var name = document.getElementById('name').textContent;
    var role = document.getElementById('role').textContent;
    var availability = document.getElementById('availability').textContent;
    var age = document.getElementById('age').textContent;
    var location = document.getElementById('location').textContent;
    var experience = document.getElementById('experience').textContent;
    var email = document.getElementById('email').textContent;


    document.getElementById('editName').value = name;
    document.getElementById('editRole').value = role;
    document.getElementById('editAvailability').value = availability;
    document.getElementById('editAge').value = age;
    document.getElementById('editLocation').value = location;
    document.getElementById('editExperience').value = experience;
    document.getElementById('editEmail').value = email;

    document.getElementById('editForm').style.display = 'block';
}


document.getElementById('editButton').addEventListener('click', TampilkanData);


document.getElementById('saveButton').addEventListener('click', function() {

    var name = document.getElementById('editName').value;
    var role = document.getElementById('editRole').value;
    var availability = document.getElementById('editAvailability').value;
    var age = document.getElementById('editAge').value;
    var location = document.getElementById('editLocation').value;
    var experience = document.getElementById('editExperience').value;
    var email = document.getElementById('editEmail').value;


    document.getElementById('name').textContent = name;
    document.getElementById('role').textContent = role;
    document.getElementById('availability').textContent = availability;
    document.getElementById('age').textContent = age;
    document.getElementById('location').textContent = location;
    document.getElementById('experience').textContent = experience;
    document.getElementById('email').textContent = email;


    document.getElementById('editForm').style.display = 'none';
});