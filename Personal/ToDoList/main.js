





const button = document.querySelector("button");
const container = document.getElementById("container");
const input = document.querySelector("input");




button.addEventListener("click", (eo) => {
    eo.preventDefault();
    const newTask =
        `<div class="task">
        <span class="icon-star-full icon"></span>
        <p class="task-text"> ${input.value}</p>
        <div>
            <span class="icon-trash icon"></span>
            <span class="icon-angry2 icon"></span>
        </div>
</div>`
    container.innerHTML += newTask
    input.value = "";
})



container.addEventListener("click", (eo) => {
    switch (eo.target.className) {
        case "icon-trash icon":
            eo.target.parentElement.parentElement.remove();
        break;



        case "icon-angry2 icon":
            eo.target.classList.add("dn");
            const heart = `<span class="icon-heart"></span> `;
            eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish");
            eo.target.parentElement.innerHTML += heart;;
        break;


        case "icon-heart":
            eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish");
            eo.target.classList.add("dn");
            const angry = `<span class="icon-angry2 icon"></span>`;
            eo.target.parentElement.innerHTML += angry;
        break;



        case "icon-star-full icon":
            eo.target.classList.add("gold");
            container.prepend(eo.target.parentElement);
        break;


        case "icon-star-full icon gold":
            eo.target.classList.remove("gold");
            //container.append(eo.target.parentElement);
        break;
        default:
            //alert("what do you want ");
        break;    
    }
})




















