
function getDOB() {
    
    let inputDob = document.getElementById("inputDob").value;
    let cdate = document.getElementById("cdate").value;
    // let calculate = document.getElementById("calculate");
    let currentAge = document.getElementById("currentAge");


    if (!inputDob || !cdate) {
        alert("Please input both date of birth and current date")
    }

    // convert input values to date object

    let dob = new Date(inputDob);
    let currentDate = new Date(cdate);

    // calculate age 
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();

    // adjust age if the birthday hasn't not occured this year

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }
    
    currentAge.textContent = `your age is ${age} years`;
}


