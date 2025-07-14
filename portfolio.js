var app = new Vue({

    el: '#app',

    data: function() {
        return {
            testo:"slayer"
        }

    },


    methods: {
        typeText: function(elementId, text, speed) {
            const element = document.getElementById(elementId);
            let index = 0;

            const caret = document.createElement('span');
            caret.innerHTML = "|"
            caret.className = 'caret';
            element.appendChild(caret);
            

            function type() {
                if (index < text.length) {
                    caret.insertAdjacentText('beforebegin', text.charAt(index));
                    index++;
                    setTimeout(type, speed);
                }
            }

            type();
        },



        
        goProject: function(stat) {
           if(stat == 1) window.open("https://bombanime-cd58f0c75e77.herokuapp.com/");
           else if(stat == 2) window.open("http://www.shonenpath.com");
                else if(stat == 3) window.open("https://gobeyond-bc70c471f3a6.herokuapp.com/");
                     else if(stat == 4) window.open("https://github.com/naahas/neoshell");
        },


        
        

    },

    created:  function() {
        console.log("Welcome to my portfolio !")

    },

   
    mounted: async function() {
        setTimeout(() => {
            this.typeText('subnametxt', 'Web Developer + Game Programmer', 50);
        }, 900);


        const sections = document.querySelectorAll('section');

        const options = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.5 
        };
    

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
           
                    const section = entry.target;
                    section.classList.add('active');

                    

                    
                } else {
                    const section = entry.target;
                    section.classList.remove('active');
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, options);
    
        sections.forEach(section => {
            observer.observe(section);
        });
     


    
    },


})




let rotation1 = 0; 
let rotation2 = 0; 
let rotation3 = 0; 
let rotation4 = 0; 
let rotation5 = 0; 
let rotation6 = 0; 
let rotation7 = 0; 

document.getElementById('skill1').addEventListener('mouseenter', function() {
    rotation1 += 360; 
    this.style.transform = `rotate(${rotation1}deg)`; 
});

document.getElementById('skill2').addEventListener('mouseenter', function() {
    rotation2 += 360; 
    this.style.transform = `rotate(${rotation2}deg)`; 
  });

  
  document.getElementById('skill3').addEventListener('mouseenter', function() {
    rotation3 += 360; 
    this.style.transform = `rotate(${rotation3}deg)`; 
  });

  
  document.getElementById('skill4').addEventListener('mouseenter', function() {
    rotation4 += 360; 
    this.style.transform = `rotate(${rotation4}deg)`; 
  });

  
  document.getElementById('skill5').addEventListener('mouseenter', function() {
    rotation5 += 360; 
    this.style.transform = `rotate(${rotation5}deg)`; 
  });

  
  document.getElementById('skill6').addEventListener('mouseenter', function() {
    rotation6 += 360; 
    this.style.transform = `rotate(${rotation6}deg)`; 
  });
  

  document.getElementById('skill7').addEventListener('mouseenter', function() {
    rotation7 += 360; 
    this.style.transform = `rotate(${rotation7}deg)`; 
  });
  



  $('#jspluspic').on('click' , () => {
    $('#fjavarea').hide();

    if ($("#fjsarea").css('display') == "none") {
        $("#fjsarea").addClass("fareaanimation");
        $("#fjsarea").show();
    } else $('#fjsarea').css('display' , 'none');
  });   



  $('#javapluspic').on('click' , () => {
    $('#fjsarea').hide();

    if ($("#fjavarea").css('display') == "none") {
        $("#fjavarea").addClass("fareaanimation");
        $("#fjavarea").show();
    } else $('#fjavarea').css('display' , 'none');
  });   







  function copyCode(info) {
    var codeText = 1;
    if(info == 2) codeText = "07 67 60 67 35";
    else codeText = "ademjami75@gmail.com"

    navigator.clipboard.writeText(codeText).then(function() {

    }).catch(function(error) {
        console.error('Erreur lors de la copie du texte : ', error);
    });

}




document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    if($('.form-control').val().length > 0) {
        
        $('.form-control').val('');
        $('.donemsg').show();

        setTimeout(() => {
            $('.donemsg').fadeOut(500);
        }, 2000);

    }
});



function displayMenu() {
    var menu = document.getElementsByClassName('tmpmenu')[0];
    
    if (menu.style.display === "block") {
   
        menu.style.display = "none";
    } else {
     
        menu.style.display = "block";
    }
}




var pre1 = document.createElement('img');
pre1.classList.add('previewclass1');
pre1.classList.add('previewclass');

var pre2 = document.createElement('img');
pre2.classList.add('previewclass2');
pre2.classList.add('previewclass');

var pre3 = document.createElement('img');
pre3.classList.add('previewclass3');
pre3.classList.add('previewclass');

function showPreview(stat) {
    var prosection = document.getElementById('projectsection');

    if(isTouchDevice() != true) {
        if(stat == 1) {
            pre1.src = "img/bombanime2.png";
            pre2.src = "img/bombanime1.png";
            pre3.src = "img/bombanime3.png";

            prosection.append(pre1 , pre2 , pre3);
        }
        

        if(stat == 2) {
            pre1.src = "img/beyond2.png";
            pre2.src = "img/beyond1.png";
            pre3.src = "img/beyond4.png";

            prosection.append(pre1 , pre2 , pre3);
        }


        if(stat == 3) {
            pre1.src = "img/sho2.png";
            pre2.src = "img/sho1.png";
            pre3.src = "img/sho3.png";

            prosection.append(pre1 , pre2 , pre3);
        }


        if(stat == 4) {
            pre2.src = "img/neoshell1.png";

            pre1.remove();
            pre3.remove();
            prosection.append(pre2);
        }



       
     

        $('.previewclass').show();

    }

}



function disablePreview() {
    $('.previewclass').hide();
}



function isTouchDevice() {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
  }
