gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".mainn"),
  smooth: true,

  tablet: { smooth: true },

  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".mainn", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }


});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

function page2anime() {
    document.querySelectorAll(".page2-rightitem").forEach((elem) => {
        // console.log(elem)
        elem.addEventListener('mouseenter', (x) => {
            elem.childNodes[1].style.opacity = 1
            elem.childNodes[1].style.scale = 1
            //    var tl=gsap.timeline
            //   gsap.to(elem.childNodes[1],{
            //     opacity:1,
            //     scale:1
            //   })   
        })
        elem.addEventListener('mouseleave', (x) => {
            elem.childNodes[1].style.opacity = 0
            elem.childNodes[1].style.scale = 0
        })
        elem.addEventListener('mousemove', (dets) => {
            gsap.to(elem.childNodes[1], {
                x: dets.x - elem.getBoundingClientRect().x - 70,
                y: dets.y - elem.getBoundingClientRect().y - 70
            })
        })
    })

}
function videoanime() {
    var video = document.querySelector(".page3 video")
    document.querySelector(".play").addEventListener("click", () => {
        video.style.display = "block"
        video.style.scale = 1
        document.querySelector(".play").style.display = "none"
        video.play()
    })
    video.addEventListener("click", () => {
        video.load();
        gsap.to(video, {
            trannsform: "scale(0.7) scale(0)"

        })
        video.style.display = "none"
        document.querySelector(".play").style.display = "block"
    })
}
page2anime()
videoanime()

document.querySelectorAll(".right-page4").forEach(function (e) {
    e.addEventListener('mouseenter', () => {

        e.childNodes[3].style.opacity = 1
        e.childNodes[3].play()

    })
    e.addEventListener('mouseleave', () => {

        e.childNodes[3].style.opacity = 0
        e.childNodes[3].load()

    })
})

gsap.from(".page7-right-part1 h2",{
    x:0,
    duration:2,
    scrollTrigger:{
        trigger:".page7-right-part1",
        scroller:".mainn",
        start:"top 80%",
        end:"top 10%",
        scrub:true

    }
})

gsap.to(".page8 svg",{
    rotation:300,
    duration:2,
    scrollTrigger:{
        trigger:".page8",
        scroller:".mainn",
        start:"top 90%",
        end:"top 10%",
        scrub:true

    }
})
gsap.from(".main",{
    trannsform:"scaleX(0.7) scaleY(0.2)",
    duration:1
})

document.querySelector(".play").addEventListener("mouseenter",()=>{
  let v=document.querySelector(".page3 h2")
  v.style.opacity=1
  gsap.from(v,{
    y:15
  })
})
document.querySelector(".play").addEventListener("mouseleave",()=>{
    let v=document.querySelector(".page3 h2")
    v.style.opacity=0
  //   gsap.to(v,{
  //     // y:10,
  //     duration:1,
  
  //     display:'block'
  //   })
  });

