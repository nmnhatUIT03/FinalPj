//Thay ảnh
let gallery = document.querySelectorAll('.addinfo_gallery__pic');
let imageEnlarged = document.querySelector('#addinfo_img__image');

gallery.forEach(image => {
  image.addEventListener('click', function() {
    imageEnlarged.src = this.src;
  });
});

//Nút navi ảnh lên xuống + chọn ảnh khi click

const button = document.getElementById('down_button');
const buttonZero = document.getElementById('up_button');

function removeGreenBorder(){
    for (let i = 0; i < gallery.length; i++){
        gallery[i].classList.remove('selected');
    }
}

let j = 0;
button.addEventListener('click', () => {
    removeGreenBorder();
    j++;
    if (j == 4){
        j = 0;
    } 
    gallery[j].classList.add('selected');
    imageEnlarged.src = gallery[j].src;
});
buttonZero.addEventListener('click', () => {
    removeGreenBorder();
    j--;
    if (j == -1){
        j = 3;
    }
    gallery[j].classList.add('selected');
    imageEnlarged.src = gallery[j].src;
});
for (let h = 0; h < gallery.length; h++){
    gallery[h].addEventListener('click', () => {
        let idContainer = gallery[h].id;
        switch (idContainer){
            case "img_one":
                j = 0;  // đổi tên id thành số, rồi lấy số này làm index cho mấy cái ảnh, tương tự với img two trở đi
                removeGreenBorder();
                gallery[j].classList.add('selected');
                break;
            case "img_two":
                j = 1;
                removeGreenBorder();
                gallery[j].classList.add('selected');
                break;
            case "img_three":
                j = 2;
                removeGreenBorder();
                gallery[j].classList.add('selected');
                break;
            case "img_four":
                j = 3;
                removeGreenBorder();
                gallery[j].classList.add('selected');
                break;
        }
    });
}



//Tăng/giảm số lượng sản phẩm
const increaseButton = document.getElementById("addinfo_buy__amount--increase");
const decreaseButton = document.getElementById("addinfo_buy__amount--decrease");
const productAmount = document.getElementById("addinfo_buy__amount--number");
let count = 0; 
increaseButton.addEventListener("click", () => {
    count++;
    productAmount.textContent = count;
   });
decreaseButton.addEventListener("click", () => {
    if (count === 0){
        productAmount.textContent = 0;
    } else {
        count--;
        productAmount.textContent = count;
    }
});

//Switch mô tả với phần comment
const cubeOne = document.getElementById('one');
const cubeTwo = document.getElementById('two');
function changeComments(){
    cubeTwo.style.zIndex = 1;
}
function changeDescription(){
    cubeTwo.style.zIndex = -1;
}

//đổi phần gạch dưới của nút switch comment với mô tả
let buttons = document.getElementsByClassName("about_button__button");
function greenUnderscore(){
    buttons[0].style.borderBottom ="2px solid green";
    
    buttons[0].addEventListener('click', function() {
        buttons[0].style.borderBottom = '2px solid green';
        buttons[0].style.color = "black";
        buttons[1].style.borderBottom = 'none';
        buttons[1].style.color = "#808080";
    });
    buttons[1].addEventListener('click', function() {
        buttons[0].style.borderBottom = 'none';
        buttons[1].style.borderBottom = '2px solid green';
        buttons[1].style.color = 'black';
        buttons[0].style.color = '#808080';
    });
}
greenUnderscore();

//hiển thị thêm comment
let loadMoreComments = document.getElementById('comments__loadbutton');
const hiddenComment = document.getElementById('hidden_comment');
loadMoreComments.addEventListener('click', () =>{
    hiddenComment.style.display = "block";
    loadMoreComments.style.display ="none";
});
