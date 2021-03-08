const dot1=document.getElementById('Dots');
const dot2=document.getElementById('Dots1');
const dot3=document.getElementById('Dots2');
const dot4=document.getElementById('Dots3');
const dot5=document.getElementById('Dots4');
const dot6=document.getElementById('Dots5');
const dot7=document.getElementById('Dots6');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const page6 = document.getElementById('page6');
const page7 = document.getElementById('page7');

const svg=document.getElementById('svg-circle');

const svgring = document.getElementById('Opaque_Ring') 

const dotarray  = [dot1,dot2,dot3,dot4,dot5,dot6,dot7];


$(document).ready(function() {
  $.scrollify({
    section: "section",
    sectionName: "section-name",
    interstitialSection: "",
    easing: "swing",
    scrollSpeed: 150,
    offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function() {},
    after: function() {
      gsap.from(".h1", {
        opacity: 0, 
        y: 30, 
        duration: 1,
        ease: 'power3.out'
      });
      gsap.from(".run", {
        opacity: 0, 
        y: -30, 
        duration: 1,
        ease: 'power3.out'
      });
      gsap.from("#img1", {duration: 1, y:"-100%"});
      gsap.from("#img2", {duration: 1, y:"100%"});
      gsap.from(".right-section", {duration:1, y: "30%"});
      gsap.from("#page-three-firstpic", {duration: 1, y:"100%"});
      gsap.from("#page-three-secondpic", {duration: 1, y:"-100%"});
      gsap.from("#g-1", {
        opacity: 0, 
        y: 100, 
        duration: 1
      });
    gsap.from("#g-2", {
        opacity: 0, 
        y: 100, 
        duration: 1
      });
      gsap.from("#b-1", {
        opacity: 0, 
        y: 100, 
        duration: 0.5
      });
    gsap.from("#b-2", {
        opacity: 0, 
        y: 100, 
        duration: 0.5
      });
    gsap.from("#b-3", {
        opacity: 0, 
        x: 100, 
        duration: 0.5
      });
    gsap.from("#b-4", {
        opacity: 0, 
        y: 100, 
        duration: 0.5
      });
    gsap.from("#b-5", {
        opacity: 0, 
        y: 100, 
        duration: 0.5
      });
      gsap.from("#page-six-firstpic", {
        opacity: 0, 
        x: -100, 
        duration: 1
      });
      gsap.from("#page-six-secondpic", {
        opacity: 0, 
        y: -100, 
        duration: 1
      });
      gsap.from("#page-six-thirdpic", {
        opacity: 0, 
        y: 100, 
        duration: 1
      });
      gsap.from("#page-six-fourthpic", {
        opacity: 0, 
        y: 100,
     
        duration: 1
      });
      gsap.from("#page-six-fifthpic", {
        opacity: 0, 
        y: 100, 
        x:100,
        duration: 1
      });
      gsap.from("#o1", {
        opacity: 0, 
        y: -100, 
        duration: 1
      });
    gsap.from("#o2", {
        opacity: 0, 
        y: 100, 
        duration: 1
      });

    },
    afterResize: function() {},
    afterRender: function() {}
  });
  $(function() {
    $.scrollify({
      section: ".panel",
    });
  });
});

window.addEventListener('scroll',(e)=>{
  e.preventDefault();
  const scroll=window.scrollY;

  if(scroll==0){
    svgring.style.strokeDasharray="0,1000";
    for (var j= 6; j>0; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
  }else if(scroll>600 && scroll<800){
    for (var i= 0; i<=1; i++)
    {
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
        
    }
    for (var j= 6; j>1; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
    svgring.style.strokeDasharray="130,1000";
  }
  else if(scroll>1300 && scroll<1500){
    svgring.style.strokeDasharray="280,1000";

    for (var i= 0; i<=2; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
      
    }
    for (var j= 6; j>2; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }

  }else if(scroll>2000 && scroll<2250){
    svgring.style.strokeDasharray="420,1000";
    for (var i= 0; i<=3; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
    }
    for (var j= 6; j>3; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
  }else if(scroll>2700 && scroll<3000){
    
  }
})


dot1.addEventListener("click", ()=>
{   
    

    svgring.style.strokeDasharray="0,1000";

    gsap.from(".h1", {
        opacity: 0, 
        y: 30, 
        duration: 1,
        ease: 'power3.out'
      });
      gsap.from(".run", {
        opacity: 0, 
        y: -30, 
        duration: 1,
        ease: 'power3.out'
      });
      gsap.from("#img1", {duration: 1, y:"-100%"})
    gsap.from("#img2", {duration: 1, y:"100%"})
    
    
    for (var j= 6; j>0; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
    
})

dot2.addEventListener("click", ()=>
{   
  

  svgring.style.strokeDasharray="130,1000";


  gsap.from(".h1", {
    opacity: 0, 
    y: 30, 
    duration: 1,
    ease: 'power3.out'
  });
  gsap.from(".run", {
    opacity: 0, 
    y: -30, 
    duration: 1,
    ease: 'power3.out'
  });
  gsap.from("#right-section", {duration:0.85, y: "100%"})
    
    for (var i= 0; i<=1; i++)
    {
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
        
    }
    for (var j= 6; j>1; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }

    
    
})
dot3.addEventListener("click", ()=>
{   

    svgring.style.strokeDasharray="280,1000";
    

  gsap.from(".h1", {
    opacity: 0, 
    y: 30, 
    duration: 1,
    ease: 'power3.out'
  });
  gsap.from(".run", {
    opacity: 0, 
    y: -30, 
    duration: 1,
    ease: 'power3.out'
  });
  gsap.from("#page-three-firstpic", {duration: 1, y:"100%"})
        gsap.from("#page-three-secondpic", {duration: 1, y:"-100%"})
    
    for (var i= 0; i<=2; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
      
    }
    for (var j= 6; j>2; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
   
})
dot4.addEventListener("click", ()=>
{   
    

    svgring.style.strokeDasharray="420,1000";

    svg.style.backgroundColor=
  

    gsap.from(".h1", {
        opacity: 0, 
        y: 30, 
        duration: 1,
        ease: 'power3.out'
      });
      gsap.from(".run", {
        opacity: 0, 
        y: -30, 
        duration: 1,
        ease: 'power3.out'
      });
    gsap.from("#g-1", {
        opacity: 0, 
        y: 100, 
        duration: 1
      });
    gsap.from("#g-2", {
        opacity: 0, 
        y: 100, 
        duration: 1
      });
 
    for (var i= 0; i<=3; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
    }
    for (var j= 6; j>3; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
   
})
dot5.addEventListener("click", ()=>
{   

   

    svgring.style.strokeDasharray="530,1000";
    svgring.style.animation="dash 2s linear forwards"
    
    

    gsap.from(".h1", {
        opacity: 0, 
        y: 30, 
        duration: 1,
        ease: 'power3.out'
      });
      gsap.from(".run", {
        opacity: 0, 
        y: -30, 
        duration: 1,
        ease: 'power3.out'
      });
    gsap.from("#b-1", {
        opacity: 0, 
        y: 100, 
        duration: 0.5
      });
    gsap.from("#b-2", {
        opacity: 0, 
        y: 100, 
        duration: 0.5
      });
    gsap.from("#b-3", {
        opacity: 0, 
        x: 100, 
        duration: 0.5
      });
    gsap.from("#b-4", {
        opacity: 0, 
        y: 100, 
        duration: 0.5
      });
    gsap.from("#b-5", {
        opacity: 0, 
        y: 100, 
        duration: 0.5
      });
  
    for (var i= 0; i<=4; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
    }
    for (var j= 6; j>4; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
    
})
dot6.addEventListener("click", ()=>
{   
   

    svgring.style.strokeDasharray="680,1000";
    svgring.style.animation="dash 2s linear forwards"



  gsap.from(".h1", {
    opacity: 0, 
    y: 30, 
    duration: 1,
    ease: 'power3.out'
  });
  gsap.from(".run", {
    opacity: 0, 
    y: -30, 
    duration: 1,
    ease: 'power3.out'
  });
  gsap.from("#page-six-firstpic", {
    opacity: 0, 
    x: -100, 
    duration: 1
  });
  gsap.from("#page-six-secondpic", {
    opacity: 0, 
    y: -100, 
    duration: 1
  });
  gsap.from("#page-six-thirdpic", {
    opacity: 0, 
    y: 100, 
    duration: 1
  });
  gsap.from("#page-six-fourthpic", {
    opacity: 0, 
    y: 100,
 
    duration: 1
  });
  gsap.from("#page-six-fifthpic", {
    opacity: 0, 
    y: 100, 
    x:100,
    duration: 1
  });

    for (var i= 0; i<=5; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
    }
    for (var j= 6; j>5; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
    
})
dot7.addEventListener("click", ()=>
{   
    

    svgring.style.strokeDasharray="820,1000";
    svgring.style.animationDuration='200';

    gsap.from(".h1", {
        opacity: 0, 
        y: 30, 
        duration: 1,
        ease: 'power3.out'
      });
    gsap.from(".run", {
        opacity: 0, 
        y: -30, 
        duration: 1,
        ease: 'power3.out'
      });
    gsap.from("#o1", {
        opacity: 0, 
        y: -100, 
        duration: 1
      });
    gsap.from("#o2", {
        opacity: 0, 
        y: 100, 
        duration: 1
      });

    for (var i= 0; i<=6; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
    }
    for (var j= 6; j>6; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
})


