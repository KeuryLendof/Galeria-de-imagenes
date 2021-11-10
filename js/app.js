const d = document;

function buscarFiltros(input, selector){
    d.addEventListener("keyup",(e)=>{
        if(e.target.matches(input)){
            //console.log(e.key);
            //console.log(e.target.value);

            // if(e.key === "Escape"){
            //     e.target.value = "";
            // }

            d.querySelectorAll(selector).forEach((el) =>
            el.textContent.toLowerCase().includes(e.target.value)?el.classList.remove("filter")
            :el.classList.add("filter")
            );
        }
    })
}

function buscarCarros(input, selector){
    d.addEventListener("click",(e)=>{
        if(e.target.matches(input)){
            //console.log(e.key);
            //console.log(e.target.value);

            // if(e.key === "Escape"){
            //     e.target.value = "";
            // }

            d.querySelectorAll(selector).forEach((el) =>
            el.textContent.toLowerCase().includes(e.target.value ="carro")?el.classList.remove("filter")
            :el.classList.add("filter")
            );
        }
    })
}

function buscarMemes(input, selector){
    d.addEventListener("click",(e)=>{
        if(e.target.matches(input)){
            //console.log(e.key);
            //console.log(e.target.value);

            // if(e.key === "Escape"){
            //     e.target.value = "";
            // }

            d.querySelectorAll(selector).forEach((el) =>
            el.textContent.toLowerCase().includes(e.target.value ="meme")?el.classList.remove("filter")
            :el.classList.add("filter")
            );
        }
    })
}

function buscarPersonas(input, selector){
    d.addEventListener("click",(e)=>{
        if(e.target.matches(input)){
            //console.log(e.key);
            //console.log(e.target.value);

            // if(e.key === "Escape"){
            //     e.target.value = "";
            // }

            d.querySelectorAll(selector).forEach((el) =>
            el.textContent.toLowerCase().includes(e.target.value ="pers")?el.classList.remove("filter")
            :el.classList.add("filter")
            );
        }
    })
}

function buscarTecno(input, selector){
    d.addEventListener("click",(e)=>{
        if(e.target.matches(input)){
            //console.log(e.key);
            //console.log(e.target.value);

            // if(e.key === "Escape"){
            //     e.target.value = "";
            // }

            d.querySelectorAll(selector).forEach((el) =>
            el.textContent.toLowerCase().includes(e.target.value ="tecnologia")?el.classList.remove("filter")
            :el.classList.add("filter")
            );
        }
    })
}

function buscarNature(input, selector){
    d.addEventListener("click",(e)=>{
        if(e.target.matches(input)){
            //console.log(e.key);
            //console.log(e.target.value);

            // if(e.key === "Escape"){
            //     e.target.value = "";
            // }

            d.querySelectorAll(selector).forEach((el) =>
            el.textContent.toLowerCase().includes(e.target.value ="naturaleza")?el.classList.remove("filter")
            :el.classList.add("filter")
            );
        }
    })
}





buscarFiltros(".card-filter",".fotos");

buscarCarros(".autos",".fotos")
buscarMemes(".memes", ".fotos")
buscarPersonas(".personas", ".fotos")
buscarTecno(".tecnologia", ".fotos")
buscarNature(".naturaleza",".fotos")
