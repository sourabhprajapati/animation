var t1=gsap.timeline()

t1.to("#loader h1",{
    
    delay:0.5,
    duration:1,
    onStart:time()
})
function time(){
    var a=0
    setInterval(function(){
        a=a + Math.floor(Math.random()*15)
        if(a<100){
            
            document.querySelector("#loader h1").innerHTML=a+ "%";
            
            
        }else{
            a=100;
            document.querySelector("#loader h1").innerHTML=a+ "%";
        }
    },150)
}

t1.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:2
   
})
gsap.to("#page1 h1",{
    transform:"translatex(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -60%",
        scrub:2,
        pin:true
    }
})