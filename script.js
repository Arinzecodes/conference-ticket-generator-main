const genButton = document.querySelector(".genButton");
const imbuttons = document.querySelector(".img-buttons");
const instructs = document.querySelector(".instructs");
const avatar = document.querySelector("#avatar");
const avaph = document.querySelector(".avaph");
const fname = document.querySelector("#fname");
const email = document.querySelector("#email");
const gitusername = document.querySelector("#gitusername");
const fmail = document.querySelectorAll(".fmail");
const names = document.querySelectorAll(".name");
const gitusers = document.querySelectorAll(".gituser");
const rem = document.querySelector(".rem");
const change = document.querySelector(".change");

let imgsrc = "";
avatar.value = "";
avatar.addEventListener("change", () => {
    const file = avatar.files[0];
    if (file.size < 5e6) {
        avatar.classList.remove("empty");
        avaph.src = URL.createObjectURL(file);
        avaph.style.display = "block";
        imgsrc = URL.createObjectURL(file);
        avatar.disabled = true;
        instructs.style.display = "none";
        imbuttons.style.display = "flex";
    } else {
        avatar.classList.add("empty");
    }
});

rem.addEventListener("click", () => {
    avatar.value = "";
    avaph.src = "./assets/images/icon-upload.svg";
    avatar.disabled = false;
    instructs.style.display = "block";
    imbuttons.style.display = "none";
});

change.addEventListener("click",  () => {
    avatar.disabled = false;
});

fname.addEventListener("input", () => {
    formValidation();
});

email.addEventListener("input", () => {
    formValidation();
});

gitusername.addEventListener("input", () => {
    formValidation();
});

const formValidation = () => {
    let checkform = true; 
    if (fname.value == "") {
        checkform = false;
        fname.classList.add("empty");
    } else {
        fname.classList.remove("empty");
    }

    if (email.value == "") {
        checkform = false;
        email.classList.add("empty");
    } else {
        email.classList.remove("empty");
    }

    if (gitusername.value == "") {
        checkform = false;
        gitusername.classList.add("empty");
    } else {
        gitusername.classList.remove("empty");
    }

    if (avatar.value == "") {
        checkform = false;
        avatar.classList.add("empty");
    } else {
        avatar.classList.remove("empty");
    }

    return checkform
}

var data = {};
genButton.addEventListener("click", () => {
    if (formValidation()) {
        data = {
            name: fname.value,
            email: email.value,
            gitUN: gitusername.value,
            imgsrc: imgsrc
        }
        
        const leftimg = document.querySelectorAll(".left");
        leftimg.forEach(img => {
            img.src = data.imgsrc;
        });

        gitusers.forEach(gituser => {
            gituser.textContent = data.gitUN;
        });
    
        fmail.forEach(fmail => {
            fmail.textContent = data.email;
        });
    
        names.forEach(name => {
            name.textContent = data.name;
        });
    
        const firstEles = document.querySelectorAll(".first");
        firstEles.forEach(ele => {
            ele.style.display = "none";
        });
    
        const secondEles = document.querySelectorAll(".second");
        secondEles.forEach(ele => {
            ele.style.display = "block";
        });
    }
});