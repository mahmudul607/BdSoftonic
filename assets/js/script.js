$(document).ready(function(){
   $(".js--theme-section").waypoint(function (direction) {
      if(direction == "down"){
        
         $("nav").addClass("sticky-top");
      }
      else{
         $("nav").removeClass("sticky-top");
      }
      
   });

   var mixer = mixitup('.container');
});




// =======================//
// done for just sticky
//==========================//
// window.onscroll = function() {myFunction()};

// var header = document.querySelector(".navbar");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky-top");
//   } else {
//     header.classList.remove("sticky-top");
//   }
// }
//==================================//


// Active Button Style/////////////////==========


// Add active class to the current button (highlight it)
// let select = document.getElementById("myDIV");
// let b = select.querySelectorAll(".skill-item");
// for (let i = 0; i < b.length; i++) {
//   b[i].addEventListener("click", function() {
//    console.log('hello');




//   let current = document.getElementsByClassName("active1");
//   current[0].className = current[0].className.replace("active1", "");
//   this.className += " active1";



//   //==========

  
//   });
// }


function openTab(evt, tabName) {
   var i, tabpane, skillitem;
   tabpane = document.getElementsByClassName("tabpane");
   for (i = 0; i < tabpane.length; i++) {
      tabpane[i].style.display = "none";
   }
   skillitem = document.getElementsByClassName("skill-item");
   for (i = 0; i < skillitem.length; i++) {
      skillitem[i].className = skillitem[i].className.replace(" active1", "");
   }
   document.getElementById(tabName).style.display = "block";
   evt.currentTarget.className += " active1";
 }


// function classAddFunction(){
//    let element=document.getElementById("tab1");
//    element.className=element.className.replace("active2", " ");
//    let element1=document.getElementById("tab2");
//    element1.className=element1.className.replace("active2", " ");
//    let element2=document.getElementById("tab3");
//    element2.className=element2.className.replace("active2", " ");
//    let element3=document.getElementById("tab4");
//    element3.className=element3.className.replace("active2", " ");
//    element.className += " active2";
  
// }
// function classAddFunction1(){
  
//    let element=document.getElementById("tab1");
//    element.className=element.className.replace("active2", " ");
//    let element1=document.getElementById("tab2");
//    element1.className=element1.className.replace("active2", " ");
//    let element2=document.getElementById("tab3");
//    element2.className=element2.className.replace("active2", " ");
//    let element3=document.getElementById("tab4");
//    element3.className=element3.className.replace("active2", " ");
//    element1.className += " active2";
  
// }
// function classAddFunction2(){
//    let element=document.getElementById("tab1");
//    element.className=element.className.replace("active2", " ");
//    let element1=document.getElementById("tab2");
//    element1.className=element1.className.replace("active2", " ");
//    let element2=document.getElementById("tab3");
//    element2.className=element2.className.replace("active2", " ");
//    let element3=document.getElementById("tab4");
//    element3.className=element3.className.replace("active2", " ");
//    element2.className += " active2";
  
// }
// function classAddFunction3(){
//    let element=document.getElementById("tab1");
//    element.className=element.className.replace("active2", " ");
//    let element1=document.getElementById("tab2");
//    element1.className=element1.className.replace("active2", " ");
//    let element2=document.getElementById("tab3");
//    element2.className=element2.className.replace("active2", " ");
//    let element3=document.getElementById("tab4");
//    element3.className=element3.className.replace("active2", " ");
//    element3.className += " active2";
  
// }



// Progress Bar===============================================

jQuery(document).ready(function(){
  
   jQuery('.progress-bar').each(function() {
     jQuery(this).find('.progress-content').animate({
       width:jQuery(this).attr('data-percentage')
     },2000);
     
     jQuery(this).find('.progress-number-mark').animate(
       {left:jQuery(this).attr('data-percentage')},
       {
        duration: 2000,
        step: function(now, fx) {
          var data = Math.round(now);
          jQuery(this).find('.percent').html(data + '%');
        }
     });  
   });
 });


//  const skillsSection= document.querySelector('.skills-progress');
//  const progressBars=document.querySelectorAll('.progress-bar');
  
// function showProgress(){
//    progressBars.forEach(progressBar =>{
//       const value = progressBar.dataset.progress-content;
//       progressBar.style.opacity = 1;
//       progressBar.style.width = `${value}%`;

//    });
// }
// function hideProgress(){
//    progressBars.forEach(p => {
//       p.style.opacity = 0;
//       p.style.width = 0;
//    });

// }


//  window.addEventListener('scroll', ()=>{
//    const sectionPos=skillsSection.getBoundingClientRect().top;
//    const screenPos=window.innerHeight/2;
//    if(sectionPos < screenPos){
//       console.log('show skill bar');
//       showProgress();
//    }else{
//       console.log('hide skill bar');
//       hideProgress();
//    }
//  });