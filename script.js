function changeMoodColorUser() {
    let mood = document.getElementById("moodInput").value;
    if (mood == "sad"){
        document.body.style.backgroundColor = "red"
        document.getElementById("sadkurumi").style.visibility = 'visible';
        document.getElementById("happykurumi").style.visibility = 'hidden';
    }
    else if (mood == "happy"){
        document.body.style.backgroundColor = "blue"
        document.getElementById("happykurumi").style.visibility = 'visible';
        document.getElementById("sadkurumi").style.visibility = 'hidden';
    }
}