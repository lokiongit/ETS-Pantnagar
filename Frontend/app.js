const tab1_btn = document.getElementById("tab1");
const tab2_btn = document.getElementById("tab2");
const tab3_btn = document.getElementById("tab3");
const tab4_btn = document.getElementById("tab4");
const tab5_btn = document.getElementById("tab5");

const hero1_btn = document.getElementById("hero1");
const hero2_btn = document.getElementById("hero2");
const hero3_btn = document.getElementById("hero3");
const hero4_btn = document.getElementById("hero4");
const hero5_btn = document.getElementById("hero5");

const tabC1_btn = document.getElementById("tabC1");
const tabC2_btn = document.getElementById("tabC2");
// const tabC3_btn = document.getElementById("tabC3");

const heroC1_btn = document.getElementById("heroC1");
const heroC2_btn = document.getElementById("heroC2");
// const heroC3_btn = document.getElementById("heroC3");


function switchTab(tabBtn, heroBtn) {
    // Reset all tabs to default styles
    [tab1_btn, tab2_btn, tab3_btn, tab4_btn, tab5_btn].forEach(btn => {
      btn.style.borderBottom = "none";
    });
  
    // Set the selected tab to active
    tabBtn.style.borderBottom = "4px solid hsl(0, 94%, 66%)";
  
    // Hide all content sections
    [hero1_btn, hero2_btn, hero3_btn, hero4_btn, hero5_btn].forEach(hero => {
      hero.style.display = "none";
    });
  
    // Display the selected content section
    heroBtn.style.display = "flex";
  }
  
  tab1_btn.addEventListener('click', () => switchTab(tab1_btn, hero1_btn));
  tab2_btn.addEventListener('click', () => switchTab(tab2_btn, hero2_btn));
  tab3_btn.addEventListener('click', () => switchTab(tab3_btn, hero3_btn));
  tab4_btn.addEventListener('click', () => switchTab(tab4_btn, hero4_btn));
  tab5_btn.addEventListener('click', () => switchTab(tab5_btn, hero5_btn));
  


tabC1_btn.addEventListener('click', () => {
    tabC1_btn.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
    heroC1_btn.style.display = "flex"
    tabC2_btn.style.borderBottom = "none"
    heroC2_btn.style.display = "none"
    // tabC3_btn.style.borderBottom = "none"
    // heroC3_btn.style.display = "none"
})
tabC2_btn.addEventListener('click', () => {
    tabC2_btn.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
    heroC2_btn.style.display = "flex"
    tabC1_btn.style.borderBottom = "none"
    heroC1_btn.style.display = "none"
    // tabC3_btn.style.borderBottom = "none"
    // heroC3_btn.style.display = "none"
})
// tabC3_btn.addEventListener('click', () => {
//     tabC3_btn.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
//     heroC3_btn.style.display = "flex"
//     tabC2_btn.style.borderBottom = "none"
//     heroC2_btn.style.display = "none"
//     tabC1_btn.style.borderBottom = "none"
//     heroC1_btn.style.display = "none"
// })






const tog = document.querySelector(".toggle");

tog.addEventListener('click' , () =>{
    document.querySelector(".hidden").style.display = "inline";
   
})

const cross = document.getElementById("close");

cross.addEventListener('click' , () =>{
    document.querySelector(".hidden").style.display = "none";

    
})
function myFunction(e) {
    let dots=e.parentNode.querySelector("span.dots");
    let more=e.parentNode.querySelector("span.more");
    if(dots.style.display===""){
        dots.style.display="none";
        more.style.display="";
        e.innerText="Read less";
    }
    else{
        dots.style.display="";
        e.innerText="Read more";
        more.style.display="none";
    }
}




