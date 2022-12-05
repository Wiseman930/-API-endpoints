
//For the cars
const carsTemplateText = document.querySelector('.carsTemplate');
const theCarsTemplate = Handlebars.compile(carsTemplateText.innerText);
//For the color
const colorTemplateText = document.querySelector('.colorsTemplate');
const theColorTemplate = Handlebars.compile(colorTemplateText.innerText);
//For the brand
const brandTemplateText = document.querySelector('.brandTemplate');
const theBrandTemplate = Handlebars.compile(brandTemplateText.innerText);

const filterTemplateText = document.querySelector('.filterTemplate');
const theFilterTemplate = Handlebars.compile(filterTemplateText.innerText);

const filterTemplateTextColor = document.querySelector('.filterTemplateColor');
const theFilterTemplateColor = Handlebars.compile(filterTemplateTextColor.innerText);


//Element for cars
const carsElem = document.querySelector('.cars');
//Element for color
const colorElem = document.querySelector('.colors');
//Element for brand
const brandElem = document.querySelector('.brand');
//Filtering Element
const filterElem = document.querySelector('.filter');
//filterbutton
const chooseMake = document.querySelector(".filters")

//
const chooseColor = document.querySelector(".filterColors")
const filterElemColor = document.querySelector('.filterColor');

//Filtering
carsElem.addEventListener('click', function(evt){

});

axios
.get("https://api-tutor.herokuapp.com/v1/cars")
.then(result => {
    const cars = result.data

    carsElem.innerHTML = theCarsTemplate({
        cars
    });
});

axios
.get("https://api-tutor.herokuapp.com/v1/colors")
.then(result => {
    const color = result.data;

    colorElem.innerHTML = theColorTemplate({
        color
    });
});

axios
.get("https://api-tutor.herokuapp.com/v1/makes")
.then(result => {
    const brand = result.data;

    brandElem.innerHTML = theBrandTemplate({
        brand
    });
});


function changeYourOption(){

axios
.get(`http://api-tutor.herokuapp.com/v1/cars/make/${chooseMake.value}`)
.then(result => {
    const make = result.data;

    filterElem.innerHTML = theFilterTemplate({
        make
    });
});
}
chooseMake.addEventListener('change', changeYourOption)

function changeYourColor(){

    axios
    .get(`http://api-tutor.herokuapp.com/v1/cars/color/${chooseColor.value}`)

    .then(result => {
        const color = result.data;
        console.log(color)

        filterElemColor.innerHTML = theFilterTemplateColor({
            color
        });
    });
    }
    chooseColor.addEventListener('change', changeYourColor)

