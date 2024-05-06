const popupBtn = document.querySelector('.js-popup-ticket')
const popup = document.querySelector('.js-popup')
const popupCloseBtn = document.querySelector('.js-close-popup')
const popupContainer = document.querySelector('.js-popup-container')

function popupOpen () {
  popup.classList.add('open')
}

function popupClose () {
  popup.classList.remove('open')
}

popupBtn.addEventListener('click',popupOpen)

popupCloseBtn.addEventListener('click',popupClose)
popup.addEventListener('click',popupClose)
popupContainer.addEventListener('click',function(event) {
  event.stopPropagation()
})