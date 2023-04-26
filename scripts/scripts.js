
const signUpBtn = document.getElementById('signUpBtn');
const bgVideo = document.querySelector('video');
// add click function
signUpBtn.onclick = signUp;
// alter video playback
bgVideo.playbackRate = 0.5;

function signUp () {
    // assign elements
    let mainContainer = document.getElementById('mainContainer');
    let suBtnBox = document.getElementById('suBtnBox');
    let boxHeading = document.createElement('h1');
    let username = document.createElement('input');
    let password = document.createElement('input');
    let createAccBtn = document.createElement('button');
    let forgottenLink = document.createElement('h6');
    let forgotPass = document.createElement('a');
    let forgotUser = document.createElement('a');
    let divider = document.createElement("a");
    let closeBtn = document.createElement('a');

    // remove button 
    suBtnBox.style.display = "none";
    signUpBtn.style.display = "none";

    // append  divs to contain elements
    let signUpBox = mainContainer.appendChild(document.createElement('div'));
    signUpBox.appendChild(closeBtn);
    let headingBox = signUpBox.appendChild(document.createElement('div'));
    let userPassBox = signUpBox.appendChild(document.createElement('div'));
    let forgotBox = signUpBox.appendChild(document.createElement('div'));

    // fill divs with elements
    headingBox.appendChild(boxHeading);
    userPassBox.appendChild(username);
    userPassBox.appendChild(password);
    userPassBox.appendChild(createAccBtn);
    forgotBox.appendChild(forgottenLink);
    
    // forgotten user/pass links - text & href
    // forgotPass.href = "";
    // forgotUser.href = "";
    divider.appendChild(document.createTextNode("|"));
    forgotPass.appendChild(document.createTextNode("Forgot Password"));
    forgotUser.appendChild(document.createTextNode("Forgot Username"));
    // add links to elements
    forgottenLink.appendChild(forgotPass)
    forgottenLink.appendChild(divider);
    forgottenLink.appendChild(forgotUser);

    // add classes
    closeBtn.className = "closeBtn";
    headingBox.className = 'headingBox';
    signUpBox.className = 'signUpBox';
    userPassBox.className = 'userPassBox';
    forgotBox.className = 'forgotBox';
    username.className = 'signUpInput';
    password.className = 'signUpInput';
    createAccBtn.className = "btn btn-light";

    // styling 
    divider.style.padding = "0px 5px";
    divider.style.color = "white";
    username.placeholder = "username";
    password.placeholder = "password";
    boxHeading.textContent = "Boost your code today...";
    forgotUser.style.textDecoration = "none";
    forgotUser.style.color = "white";
    forgotPass.style.textDecoration = "none";
    forgotPass.style.color = "white";
    signUpBox.style.display = "flex";
    createAccBtn.textContent = "Sign Up";
    createAccBtn.style.width = '80px';
    createAccBtn.style.padding = "0px"
    createAccBtn.style.alignSelf = 'center';

    // close signUpBox 
    closeBtn.onclick = function() {
        signUpBox.style.display = "none";
        suBtnBox.style.display = "flex";
        signUpBtn.style.display = "flex";
    }
}