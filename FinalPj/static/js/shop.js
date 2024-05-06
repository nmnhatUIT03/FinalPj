const priceFilter = document.getElementById('price_filter');
const rangeSliderContainer = document.getElementById('price_filter__rangeslider');
function showSlider(){
    let bool = 1;
    priceFilter.addEventListener('click', () => {
        if (bool){
            rangeSliderContainer.style.display = "block";
            priceFilter.style.backgroundColor ="#808080";
            bool = 0;
        }
        else {
            rangeSliderContainer.style.display = "none";
            priceFilter.style.backgroundColor ="#dbdbdb";
            bool = 1;
        }
    });
}
showSlider();
let price = document.getElementById('price');
let priceNum = document.getElementById('price_num');
price.addEventListener('input', () =>{
    priceNum.innerText = price.value;
});