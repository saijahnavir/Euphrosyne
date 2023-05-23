const tabItems = document.querySelectorAll('.tab-element');
const tabContentItems = document.querySelectorAll('.tab-content-item');


function selectItem(e){
    removeBorder();
    removeShow();
    //adding border to current tab
    this.classList.add('border-gradient-purple');
    //add content item from DOM
    const tabCotntentItem=document.querySelector(`#${this.id}-content`);
    tabCotntentItem.classList.add('show')
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('border-gradient-purple') )
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show') )
}

tabItems.forEach(item =>item.addEventListener('click',selectItem));
