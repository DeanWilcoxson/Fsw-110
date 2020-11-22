/*jshint esversion: 6 */
const form = document.getElementById("myFormId");
const submit = document.getElementById("submit").addEventListener("click", function() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const age = document.getElementById("ageNum");
    const location = document.getElementById("location");
    const male = document.getElementById("genderMale");
    const female = document.getElementById("genderFemale");
    const vegan = document.getElementById("vegan");
    const kosher = document.getElementById("kosh");
    const chf = document.getElementById("sodium");

    function manOrWoman() {
        if (male.selected === true) {
            return "male";
        } else if (female.selected === true) {
            return "female";
        }
    }

    function dietRestriction() {
        if (vegan.checked && kosher.checked && chf.checked === true) {
            return "Vegan, Kosher, CHF";
        } else if (vegan.checked && kosher.checked === true) {
            return "Vegan, Kosher";
        } else if (kosher.checked && chf.checked === true) {
            return "Kosher, CHF";
        } else if (vegan.checked && chf.checked === true) {
            return "Vegan, CHF";
        } else if (vegan.checked === true) {
            return "Vegan";
        } else if (kosher.checked === true) {
            return "Kosher";
        } else if (chf.checked === true) {
            return "CHF";
        }
    }
    alert(`First Name:${firstName.value} \nLast Name:${lastName.value} \nAge:${age.value} \nGender:${manOrWoman()} \nLocation:${location.value} \nDiet:${dietRestriction()}`);
});