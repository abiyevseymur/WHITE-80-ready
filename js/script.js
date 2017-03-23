
var n = 0;
var left = document.getElementsByClassName('gallery');
var pic = document.getElementsByClassName('pic');
//SLIDER
document.getElementsByClassName('button')[0].addEventListener('click', function () {
    if (n == (document.getElementsByClassName('pic').length - 4) * 292.5) {
        n = 0;
        left[0].style.transition = 'all 1.5s'
        left[0].style.right = n + "px"
    }
    else {
        n = n + 292.5;
        left[0].style.transition = '0.3s ease-in'
        left[0].style.right = n + "px";
    }
})



document.getElementsByClassName('button')[1].addEventListener('click', function () {
    if (n > 0) {
        n = n - 292.5;
        left[0].style.transition = 'all 0.3s'
        left[0].style.right = n + "px";
    }
    else if (n == 0) {
        n = (document.getElementsByClassName('pic').length - 4) * 292.5;
        left[0].style.transition = 'all 1.5s'
        left[0].style.right = n + "px"
    }
})
// HOVER black background
for (i = 0; i < (pic.length); i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "layot");
    pic[i].appendChild(div);
    var layot = document.getElementsByClassName('layot');
    layot[i].addEventListener('mouseover', function (event) {
        this.style.background = 'black'
        this.style.opacity = '0.8';
        this.style.transition = '0.3s ease-in-out';
    });
    layot[i].addEventListener('mouseout', function () {
        this.style.background = 'transparent'
    });
}
//HOVER eye
for (i = 0; i < pic.length; i++) {
    var div = document.createElement("div");
    div.setAttribute('class', 'eye');
    var layot = document.getElementsByClassName('layot');
    layot[i].appendChild(div);
    var eye = document.getElementsByClassName('eye')
    eye[i].innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
    eye[i].addEventListener('mouseover', function (event) {
        this.style.opacity = '1';
        this.style.margin = '30% 0 0 0';
    })
       eye[i].addEventListener('mouseout', function (event) {
        this.style.opacity = '0';
        this.style.margin = '0% 0 0 0';
    })
}
// second SLIDER
//teamslider divi yarat team ustunde
var team = document.getElementsByClassName('team');
document.getElementsByClassName('button')[2].addEventListener('click', function () {
    if (n == (team[0].getElementsByTagName('img').length - 3) * 390) {
        n = 0;
        team[0].style.transition = 'all 1.5s'
        team[0].style.right = n + "px"
    }
    else {
        n = n + 390;
        console.log(team[0].getElementsByTagName('img').length)
        team[0].style.transition = '0.3s ease-in'
        team[0].style.right = n + "px";
    }
})



document.getElementsByClassName('button')[3].addEventListener('click', function () {
    if (n > 0) {
        n = n - 390;
        team[0].style.transition = 'all 0.3s'
        team[0].style.right = n + "px";
    }
    else if (n == 0) {
        n = (team[0].getElementsByTagName('img').length - 3) * 390;
        team[0].style.transition = 'all 1.5s'
        team[0].style.right = n + "px"
    }
})

