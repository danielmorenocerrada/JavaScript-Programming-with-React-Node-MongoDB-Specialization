let count = 0 // Initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; // Display the count in html
}

function checkCountValue(){
    if (count == 10) {
        alert("Your instagram post gained 10 followers! Congratulations");

    }else if (count == 20) {
        alert("Your instagram post gained 20 followers! Keep it up!");
    }
}

function resetCounter(){
    count = 0
    alert("Your instagram account has been reseted. Followers setted to 0");
    displayCount();
}