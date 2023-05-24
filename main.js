function main(){
    var inputMaxSpeed = document.getElementById("maxSpeed")
    var inputSpeed = document.getElementById("speed")
    var inputDirection = document.getElementById("direction")

    var maxSpeed = parseInt(inputMaxSpeed.value);
    var speed = parseInt(inputSpeed.value);
    var isFacing = inputDirection.checked;

    
    //console.log(maxSpeedzwei)
    //console.log(maxSpeeddrei)
    //console.log(speedzwei)

    var maxSpeedWithOffset = maxSpeed + ((maxSpeed/100)*10)
    console.log(maxSpeedWithOffset)

    if(speed > maxSpeedWithOffset && isFacing == true){
        alert("Du wurdest geblitzt")

    }
}