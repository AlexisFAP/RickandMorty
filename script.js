let randomImages = document.getElementById("random-images");
let txtRandom = document.getElementById("txt-random")

let home = document.getElementById("home");
let personajes = document.getElementById("personajes");
let getHome = document.getElementById("getHome");
let getPersonajes = document.getElementById("getPersonajes");
let btn = document.getElementById("btn");

let imgperso = document.getElementById("personajesimg");
let txtPersonajes = document.getElementById("txt-personajes");

let n1 = Math.floor((Math.random() * 493) + 1);
let n2 = Math.floor((Math.random() * 493) + 1);
let n3 = Math.floor((Math.random() * 493) + 1);

let vector = [];
for (var i=0;i<493;i++){
    vector[i]=i+1;
}
console.log(vector);
function imagen_random(){
    fetch("https://rickandmortyapi.com/api/character/"+[n1,n2,n3])
    .then((respuesta) =>{
        return respuesta.json();
    })
    .then((respuesta) =>{
        console.log(respuesta);
        for (var i=0;i<respuesta.length;i++){
            let imagen = document.createElement("img");
            imagen.src = respuesta[i].image;      
            randomImages.appendChild(imagen);
            let txtDetailIdRandom = document.createElement("p");
            txtDetailIdRandom.innerText = "ID:" + " " + respuesta[i].id;
            let txtDetailNameRandom = document.createElement("p");
            txtDetailNameRandom.innerText = "NAME:" + " " + respuesta[i].name;  
            let txtDetailStatusRandom = document.createElement("p");   
            txtDetailStatusRandom.innerText = "STATUS:" + " " + respuesta[i].status;
            let txtDetailSpecieRandom = document.createElement("p");   
            txtDetailSpecieRandom.innerText = "SPECIES:" + " " + respuesta[i].species;
            let txtDetailTypeRandom = document.createElement("p");   
            txtDetailTypeRandom.innerText = "TYPE:" + " " + respuesta[i].type;
            let txtDetailGenderRandom = document.createElement("p");   
            txtDetailGenderRandom.innerText = "GENDER:" + " " + respuesta[i].gender;
            let txtDetailOriginRandom = document.createElement("p");   
            txtDetailOriginRandom.innerText = "ORIGIN NAME:" + " " + respuesta[i].origin.name;
            let txtDetailLocationRandom = document.createElement("p");   
            txtDetailLocationRandom.innerText = "LOCATION NAME:" + " " + respuesta[i].location.name;    
            imagen.addEventListener("click",(evento) =>{
                randomImages.classList.add("select-image");
                console.log(evento);
                evento.target.classList.add("image-selected");
                txtRandom.appendChild(txtDetailIdRandom);
                txtRandom.appendChild(txtDetailNameRandom);
                txtRandom.appendChild(txtDetailStatusRandom);
                txtRandom.appendChild(txtDetailSpecieRandom);
                txtRandom.appendChild(txtDetailTypeRandom);
                txtRandom.appendChild(txtDetailGenderRandom);
                txtRandom.appendChild(txtDetailOriginRandom);   
                txtRandom.appendChild(txtDetailLocationRandom);
            })            
        }
    })
}

function llenar_personajes(){
    fetch("https://rickandmortyapi.com/api/character/"+vector)
    .then((respuesta) =>{
        return respuesta.json();
    })
    .then((respuesta) =>{
        console.log(respuesta);
        for (var i=0;i<respuesta.length;i++){
            let images = document.createElement("img");
            images.src = respuesta[i].image;           
            imgperso.appendChild(images);
            let txtDetailId = document.createElement("p");
            txtDetailId.innerText = "ID:" + " " + respuesta[i].id;
            let txtDetailName = document.createElement("p");
            txtDetailName.innerText = "NAME:" + " " + respuesta[i].name;             
            let txtDetailStatus= document.createElement("p");   
            txtDetailStatus.innerText = "STATUS:" + " " + respuesta[i].status;
            let txtDetailSpecie = document.createElement("p");   
            txtDetailSpecie.innerText = "SPECIES:" + " " + respuesta[i].species;
            let txtDetailType = document.createElement("p");   
            txtDetailType.innerText = "TYPE:" + " " + respuesta[i].type;
            let txtDetailGender = document.createElement("p");   
            txtDetailGender.innerText = "GEMDER:" + " " + respuesta[i].gender;
            let txtDetailOrigin = document.createElement("p");   
            txtDetailOrigin.innerText = "ORIGIN NAME:" + " " + respuesta[i].origin.name;
            let txtDetailLocation = document.createElement("p");   
            txtDetailLocation.innerText = "LOCATION NAME:" + " " + respuesta[i].location.name;
            images.addEventListener("click",(evento) =>{
                imgperso.classList.add("select-image");
                console.log(evento);
                evento.target.classList.add("image-selected");
                imgperso.style.display = "flex";
                imgperso.style.position = "relative";         
                txtPersonajes.appendChild(txtDetailId);
                txtPersonajes.appendChild(txtDetailName);
                txtPersonajes.appendChild(txtDetailStatus);
                txtPersonajes.appendChild(txtDetailSpecie);
                txtPersonajes.appendChild(txtDetailType);
                txtPersonajes.appendChild(txtDetailGender);
                txtPersonajes.appendChild(txtDetailOrigin);
                txtPersonajes.appendChild(txtDetailLocation);
            })
        }
    })
}

getHome.addEventListener('click', function (e) {
    personajes.style.display = "none";
    home.style.display = "block";
    txtRandom.innerText = "";
    txtPersonajes.innerText = "";
    randomImages.classList.remove("select-image");
    let deletImages = document.querySelectorAll(".images img");
    for (var i = 0; i<deletImages.length;i++){
        deletImages[i].classList.remove("image-selected");
    }
});
getPersonajes.addEventListener('click', function (e) {
    personajes.style.display = "block";
    home.style.display = "none";
    txtRandom.innerText = "";
    txtPersonajes.innerText = "";
    imgperso.style.position = "relative";
    imgperso.style.display = "block";
    imgperso.classList.remove("select-image");
    let deletImages = document.querySelectorAll(".personajesimg img");
    for (var i = 0; i<deletImages.length;i++){
        deletImages[i].classList.remove("image-selected");
    }
});
btn.addEventListener("click",function(e) {
    personajes.style.display = "block";
    home.style.display = "none";
    txtRandom.innerText = "";
    txtPersonajes.innerText = "";
    imgperso.style.position = "relative";
    imgperso.style.display = "block";
    imgperso.classList.remove("select-image");
    let deletImages = document.querySelectorAll(".personajesimg img");
    for (var i = 0; i<deletImages.length;i++){
        deletImages[i].classList.remove("image-selected");
    }
});

imagen_random();
llenar_personajes();