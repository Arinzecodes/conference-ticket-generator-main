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
const dropArea = document.querySelector(".custom");

let imgsrc = "";
avatar.value = "";

// Function to handle file selection
const handleFile = (file) => {
    if (file && file.type.startsWith("image/") && file.size < 5e6) {
        avatar.classList.remove("empty");
        avaph.src = URL.createObjectURL(file);
        avaph.style.display = "block";
        imgsrc = URL.createObjectURL(file);
        avatar.disabled = true;
        instructs.style.display = "none";
        imbuttons.style.display = "flex";
    } else {
        avatar.classList.add("empty");
        alert("Invalid file. Please upload a JPG or PNG under 5MB.");
    }
};

// File selection via input
avatar.addEventListener("change", () => handleFile(avatar.files[0]));

// Drag & Drop Functionality
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("drag-over");
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("drag-over");
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("drag-over");
    const file = e.dataTransfer.files[0];
    handleFile(file);
});

rem.addEventListener("click", () => {
    avatar.value = "";
    avaph.src = "./assets/images/icon-upload.svg";
    avatar.disabled = false;
    instructs.style.display = "block";
    imbuttons.style.display = "none";
});

change.addEventListener("click", () => {
    avatar.disabled = false;
});

// Email validation
const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

const formValidation = () => {
    let checkform = true;

    if (fname.value.trim() === "") {
        checkform = false;
        fname.classList.add("empty");
    } else {
        fname.classList.remove("empty");
    }

    if (email.value.trim() === "" || !isValidEmail(email.value.trim())) {
        checkform = false;
        email.classList.add("empty");
    } else {
        email.classList.remove("empty");
    }

    if (gitusername.value.trim() === "") {
        checkform = false;
        gitusername.classList.add("empty");
    } else {
        gitusername.classList.remove("empty");
    }

    if (avatar.value === "") {
        checkform = false;
        avatar.classList.add("empty");
    } else {
        avatar.classList.remove("empty");
    }

    return checkform;
};

var data = {};
genButton.addEventListener("click", () => {
    if (formValidation()) {
        data = {
            name: fname.value,
            email: email.value,
            gitUN: gitusername.value,
            imgsrc: imgsrc
        }
        
        document.querySelectorAll(".left").forEach(img => img.src = data.imgsrc);
        gitusers.forEach(gituser => gituser.textContent = data.gitUN);
        fmail.forEach(fmail => fmail.textContent = data.email);
        names.forEach(name => name.textContent = data.name);
        
        document.querySelectorAll(".first").forEach(ele => ele.style.display = "none");
        document.querySelectorAll(".second").forEach(ele => ele.style.display = "block");
    }
});
