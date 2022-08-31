// Doc -> https://www.w3schools.com/jsref/prop_style_display.asp
// Btn work on second click -> https://forum.freecodecamp.org/t/button-function-only-work-on-second-click/410848
// Grabient -> https://www.grabient.com/

let sideMenu = document.getElementById('sideMenu');
let leftSideMenu = document.getElementById('leftSideMenu');
let rightSideMenu = document.getElementById('rightSideMenu');
let viewer = document.getElementById('viewer');

//  window.onload = () => {
//    togglePanel();
//    rightTogglePanel();
//    loadModel();

//  } 


let leftDisplayVisible = true;
let rightDisplayVisible = true;
let sideDisplayVisible = false;

function eventCheck(e) {
    e = window.event;
    console.log('Evento: ', e);
}


function loadModel(eventId) {
    this.collapseAll()
    switch (eventId) {
        case 'pen':
            //console.table('VIEWER: '+ this.viewer.src);
            this.viewer.src = "https://general-design.netlify.app/";
            break;
        case 'ikki-toon':
            this.viewer.src = "https://my.spline.design/ikkitoon-c4ce73befc4e255f732069527151e68a/";
            break;
        case 'logo-pm':
            this.viewer.src = "https://my.spline.design/logopm-e887486aac992b5555746d9b4fb1c89a/";
            break;
        case 'patoon':
            this.viewer.src = "https://patoon.netlify.app/";
            break;
        case 'adakort':
            this.viewer.src = "https://adakort.netlify.app/";
            break;
        case 'grilla':
            this.viewer.src = "https://grilla.netlify.app/";
            break;
        case 'balls':
            this.viewer.src = "https://bunny-toon.netlify.app/";
            break;
        case 'futuristic':
            this.viewer.src = "https://my.spline.design/futuristicscreenwork-60fb758dfb1f4c8b1612ecffd6a643ec/";
            break;
        case 'industrial':
            this.viewer.src = "https://my.spline.design/3dindustrial-81f47b0a17ba809736074cd6c316e032/";
            break;
        case 'orco':
            this.viewer.src = "https://my.spline.design/orcocarta-98a22edf5d3a5d4943df18b64312fc9b/";
            break;
        case 'iphone':
            this.viewer.src = "https://iphone-screenballs.netlify.app/";
            break;
        default:
            this.viewer.src = "#";
            console.log('Lo lamentamos, por el momento no disponemos de ' + eventId + '.');
    }
}

// To get the resize event and collapse if needed
// document.getElementsByTagName("BODY")[0].onresize = function() {collapseAll()}

function collapseAll() {
    if (this.rightDisplayVisible == true) {
        this.rightTogglePanel();
    }
    if (this.leftDisplayVisible == true) {
        this.togglePanel();
    }
}

function togglePanel() {

    if (this.leftDisplayVisible === true) {
        this.leftSideMenu.style.width = 0;
    } else {
        this.leftSideMenu.style.width = "20em";
    }
    this.leftDisplayVisible = !this.leftDisplayVisible;
}

function rightTogglePanel() {

    if (this.rightDisplayVisible === true) {
        this.rightSideMenu.style.width = 0;
    } else {
        this.rightSideMenu.style.width = "20em";
    }
    this.rightDisplayVisible = !this.rightDisplayVisible;
}

function sayHi() {
    console.log("hi");
}

function toggleSidePanel() {
    if (this.sideDisplayVisible === true) {
        sideMenu.style.width = 0;
    } else {
        sideMenu.style.width = "200px";
    }
    this.sideDisplayVisible = !this.sideDisplayVisible;
}

function changeViewer() {
    this.viewer.src = "https://my.spline.design/fbxtest-7d6888931f9d4988e2f38eff1d2d0675/";
}
function changeViewer2() {
    this.viewer.src = "https://my.spline.design/shapetest-ec28eb9c93e9acbe8391760fa664875d/";
    console.log("hi from Viewer");
}


function myFunction() {
    var x = document.getElementById('leftSideMenu');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}