document.addEventListener("keydown", (e) => {
    key = e.key.toLocaleLowerCase()
    playSound(key)
    buttonAnimation(key);
}) 

function playSound(key) {
    switch(key) {
        case "q":
            var crash = new Audio("./sounds/boom.wav")
            crash.play()
            break
        case "w":
            var kick = new Audio("./sounds/clap.wav")
            kick.play()
            break
        case "e":
            var snare = new Audio("./sounds/hihat.wav")
            snare.play()
            break
        case "r":
            var tom1 = new Audio("./sounds/kick.wav")
            tom1.play()
            break
        case "t":
            var tom2 = new Audio("./sounds/openhat.wav")
            tom2.play()
            break
        case "y":
            var tom3 = new Audio("./sounds/ride.wav")
            tom3.play()
            break
        case "u":
            var tom4 = new Audio("./sounds/snare.wav")
            tom4.play()
            break
        case "i":
            var tom4 = new Audio("./sounds/tink.wav")
            tom4.play()
            break
        case "o":
            var tom4 = new Audio("./sounds/tom.wav")
            tom4.play()
            break
        default:
            console.log(key)
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key)
    activeButton.classList.add("pressed")
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100)
}