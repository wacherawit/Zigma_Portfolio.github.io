const myCarouselElement = document.querySelector('#Slider-NW')
const triggerTabList = document.querySelectorAll('#myTab a')
const test = document.getElementById('under-head').addEventListener("mouseover", mouseOver);
function mouseOver() {
  document.getElementById("test").style.display = "none";
}
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)
  triggerEl.addEventListener('mouseover', event => {
    document.getElementById("test").style.display = "flex";
    document.getElementById("test").style.flexDirection = "column";
    event.preventDefault()
    tabTrigger.show()
  })
})
const triggerTabList2 = document.querySelectorAll('#myTab2 a')
triggerTabList2.forEach(triggerEl => {
  const tabTrigger2 = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger2.show()
  })
})
const triggerTabList3 = document.querySelectorAll('#myTab3 a')
triggerTabList3.forEach(triggerEl => {
  const tabTrigger3 = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger3.show()
  })
})