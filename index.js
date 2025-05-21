
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 15,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

const predictions = [
  "What makes you different or weird, that is your strength.",
  "Stop trying to calm the storm, calm yourself, the storm will pass.",
  "The more someone tries to convince you that they know what they are talking about the more you will doubt them. Be smart and reserve final judgment until after mind planet Mercury turns direct on Wednesday, as only then will you know for sure.",
  "You appear to be in one of those situations where the harder you work the less progress you make. So why not take the hint and slow down a bit? There is no cosmic law that says you must work flat out 100 per cent of the time.",
  "Yes, some of the ideas doing the rounds at the moment are clearly a bit silly, but don’t cut yourself off from new perspectives. Creatively, this is a really good time for you, so keep your mind open to new ways of doing things.",
  "Something you have believed in for most of your life is looking less certain by the day and what occurs this week may change your outlook completely. Nothing in life is permanent and what looks like a sure thing today could be a non-starter tomorrow.",
  "You have set your ideals way too high in recent weeks and will need to trim them back to conform to reality over the next few days. That will be easier to do if you admit, at least to yourself, that you are human like everyone else.",
  "If you must take risks you should take them in areas that are not likely to cost you a fortune if you make the wrong choices. Being bored is one thing but it’s preferable to being broke, so don’t risk your hard-earned cash on long shots.",
  "Mind planet Mercury ends its retrograde phase in your sign in midweek, so even if you are desperate to make a decision of some kind you would be wise to leave it a few more days. It could be there is something you have still not quite understood.",
  "Your ability to get through to other people has been undermined in recent weeks by Mercury, your ruler, behaving erratically, but the good news is that phase is coming to an end. Partners and loved ones will soon understand you again, for better or worse.",
  "If you are faced with a situation that has no obvious solution today just go with the first idea that comes into your head. It could be right, it could be wrong, but at least you will be doing something positive. Doing nothing is not an option.",
  "Just because a plan did not work out for you this time does not mean it won't work for you next time. Keep plugging away at it and keep believing.",
];
const button = document.querySelector("#myBtn");
const mypar = document.querySelector("#myPar");

button.addEventListener("click", result);
function result() {
  let randomPredictions =
    predictions[Math.floor(Math.random() * predictions.length)];
  mypar.style.display = "block";
  mypar.textContent = randomPredictions;
}

gsap.to(".btn", {opacity:1, scale: 1.2, delay:0.5, duration:4})

