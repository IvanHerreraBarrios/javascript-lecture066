const $eventsDivs = document.querySelectorAll("flow-events div")
console.log($eventsDivs)

function flowEvents(e) {
    console.log(`Hi ${this.className}, origin ${e.target.className}`)
}

$eventsDivs.forEach(div => {
    //div.addEventListener("click", flowEvents) // =>bubble
    //div.addEventListener("click", flowEvents, false) // false => bubble


    //div.addEventListener("click", flowEvents, true) //true => capture
    div.addEventListener("click", flowEvents, {
        capture: false, //false = bubble
        once: true, //only 1 time
    }) //true => capture
})