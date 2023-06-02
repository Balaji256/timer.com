const clock = document.querySelector("#clock")
const startDate = new Date("Jun 02, 2023 1:0:0")
const targetDate = new Date(startDate.getTime() + (21 * 24 * 60 * 60 * 1000))
setInterval(function () {
    const time = targetDate.getTime() - new Date().getTime()
    const days = Math.floor(time / (24 * 60 * 60 * 1000))
    const hours = Math.floor(time % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))
    const minutes = Math.floor(time % (24 * 60 * 60 * 1000) % (60 * 60 * 1000) / (60 * 1000))
    const seconds = Math.floor(time % (24 * 60 * 60 * 1000) % (60 * 60 * 1000) % (60 * 1000) / 1000)

    clock.textContent = `${days} days : ${hours} hour : ${minutes} min : ${seconds} sec`
}, 1000)
