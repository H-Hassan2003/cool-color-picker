let colorsArray = []

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault()
    const colorModesList = document.getElementById("color-modes-list").value
    const colorPicker = document.getElementById("color-picker").value
    const colorHexValue = colorPicker.replace("#", "")
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHexValue}&mode=${colorModesList}`)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.colors.length; i ++) {
            colorsArray.push(data.colors[i].hex.value)
        }
        document.getElementById("color-1").style.backgroundColor = colorsArray[0]
        document.getElementById("color-2").style.backgroundColor = colorsArray[1]
        document.getElementById("color-3").style.backgroundColor = colorsArray[2]
        document.getElementById("color-4").style.backgroundColor = colorsArray[3]
        document.getElementById("color-5").style.backgroundColor = colorsArray[4]
        
        document.getElementById("color-1-hex-value").textContent = colorsArray[0]
        document.getElementById("color-2-hex-value").textContent = colorsArray[1]
        document.getElementById("color-3-hex-value").textContent = colorsArray[2]
        document.getElementById("color-4-hex-value").textContent = colorsArray[3]
        document.getElementById("color-5-hex-value").textContent = colorsArray[4]
    })
    colorsArray = []
    
})