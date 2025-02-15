const btn = document.getElementById("toggle");
const createbtn = document.getElementById("create");
const popup = document.querySelector(".pop-up");
const form_exit = document.getElementById("form-exit");
const blurbody = document.querySelector(".wrapper");
const nameElement = document.getElementById("name");
const roleElement = document.getElementById("role");
const skillsElement = document.getElementById("skills");
const skillHolder = document.querySelector(".skills")
const submit = document.getElementById("submit");
const disname = document.getElementById("disname");
const disrole = document.getElementById("disrole");
const form = document.querySelector(".form");
const submitHolder = document.getElementById("submitHolder");

let currentColour = getComputedStyle(document.body).backgroundColor;

btn.addEventListener("click", function (e) {
    if (currentColour === "rgb(127, 255, 212)") {
        document.body.style.backgroundColor = "black";
        btn.classList.add("toggle");
    }

    else {
        document.body.style.backgroundColor = "aquamarine";
        btn.classList.remove("toggle");
    }

    currentColour = getComputedStyle(document.body).backgroundColor;
})

createbtn.addEventListener("click", function (e) {
    popup.classList.toggle("popup-show");
    createbtn.disabled = true;
    blurbody.classList.toggle("blur");

})

form_exit.addEventListener("click", function (e) {
    popup.classList.toggle("popup-show");
    createbtn.disabled = false;
    blurbody.classList.toggle("blur");

})

let currentInput = 0;

skillsElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        let skillsValue = parseInt(skillsElement.value);
        setTimeout(() => {

            if (currentInput < skillsValue) {
                let label1 = document.createElement("label");
                label1.classList.add("label1", "form_inner");
                label1.innerText = "Enter  skill name";
                let label2 = document.createElement("label");
                label2.classList.add("label1", "form_inner");
                label2.innerText = `Skill Knowledge(1-100)`;
                form.insertBefore(label1, submitHolder)
                form.insertBefore(label2, submitHolder)

                for (let i = 1; i <= skillsValue; i++) {
                    let input = document.createElement("input");
                    input.className = "form_inner";
                    input.type = "text";
                    input.id = `skill_${i}`;
                    form.insertBefore(input, submitHolder)

                    let inputbar = document.createElement("input");
                    inputbar.className = "form_inner";
                    inputbar.type = "number";
                    inputbar.id = `skillIdea_${i}`
                    form.insertBefore(inputbar, submitHolder)
                }
                currentInput = skillsValue;
            }

        }, 0);

    }
})


submit.addEventListener("click", function (e) {
    let nameValue = nameElement.value;
    let roleValue = roleElement.value;
    let skillsValue = parseInt(skillsElement.value);

    let styleElement = document.createElement("style");
    document.head.appendChild(styleElement);
    let styleSheet = styleElement.sheet;

    for (let i = 1; i <= skillsValue; i++) {
        let skillValue = document.getElementById(`skill_${i}`).value;
        let div1 = document.createElement("div");
        div1.className = skillValue;
        div1.innerHTML = skillValue;
        let skillKnowldge = document.getElementById(`skillIdea_${i}`).value;
        console.log(`${skillKnowldge}%`);
        styleSheet.insertRule(
            `@keyframes ${div1.className} { from { width: 0%; }  to { width: ${skillKnowldge}% } }`, styleSheet.cssRules.length
        );
        styleSheet.insertRule(
            `.${div1.className} {   width: 0%; height: 20px; background-color: lightslategrey; border: 1px solid black;margin: 5px 0px; font-weight: bold;  position: static; left: 50%;  animation: ${div1.className} 2s linear 1s forwards;}`, styleSheet.cssRules.length

        );
        skillHolder.appendChild(div1);
        console.log(skillValue);
        console.log(div1.className)

    };


    disname.innerText = nameValue;
    disrole.innerText = roleValue;

    popup.classList.toggle("popup-show");
    createbtn.disabled = false;
    blurbody.classList.toggle("blur");
});

