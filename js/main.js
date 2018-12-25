window.onload = function(){
    let navBarIcon = document.getElementsByClassName('navbar__icon')[0];
    
    navBarIcon.addEventListener('click',()=>{
        console.log(this);
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
    })
    
};