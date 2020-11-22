/*jshint esversion: 6 */
document.getElementById("submit").addEventListener("click", function() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const age = document.getElementById("ageNum");
    const location = document.getElementById("location");
    const male = document.getElementById("genderMale");
    const female = document.getElementById("genderFemale");
    alert(`First Name:${firstName.value} \nLast Name:${lastName.value} \nAge:${age.value} \nLocation:${location.value}`);
});


function manOrWoman() {
    if (male.checked === true) {
        return male;
    }
}