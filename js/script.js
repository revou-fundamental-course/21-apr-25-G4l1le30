function temperatureConverter(valNum){
    valNum = parseFloat(valNum)
    document.getElementById("output-fahrenheit").innerHTML=(valNum*1.8)+32
}