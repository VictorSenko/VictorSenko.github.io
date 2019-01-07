function events(){
    let navBarIcon = document.getElementsByClassName('navbar__icon')[0];
    let sliderTabs = document.getElementsByClassName('main__features-tab');
    let sliderContent = document.getElementsByClassName('main__features-transition-block')[0];

    sliderTabs[0].style.backgroundColor = '#ff8b38';

    navBarIcon.addEventListener('click',()=>{
        let item = document.getElementsByClassName('navbar__links')[0];
        if(item.style.display === 'none'){
            item.style.display = 'flex';
        }
        else
            item.style.display = 'none';

    });
    window.addEventListener('resize',()=>{
         if(window.innerWidth > 765){
             document.getElementsByClassName('navbar__links')[0].style.display = "flex";
         }else
             document.getElementsByClassName('navbar__links')[0].style.display = "none";

    });

    for(let i = 0; i < sliderTabs.length; i++){
        sliderTabs[i].addEventListener('mouseenter',function(){
            let width = document.getElementsByClassName('transition-block')[0].offsetWidth;
            let siblings = this.parentNode.children;
            let index = getElementIndex(this);

            function getElementIndex(node) {
                let index = 0;
                while (node = node.previousElementSibling) {
                    index++;
                }
                return index;
            };


            for(let i = 0; i < siblings.length; i++){
               siblings[i].style.backgroundColor = "#333333"; 
            };

            sliderContent.style.left = -width*index +'px';
            this.style.backgroundColor = '#ff8b38';
        });
    }
};
events();
  
