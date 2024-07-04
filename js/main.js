var myMealsHttpReq = new XMLHttpRequest()

var mealsArray = []


myMealsHttpReq.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=`)

myMealsHttpReq.send()

myMealsHttpReq.addEventListener('loadend', function () {
    if (myMealsHttpReq.status == 200) {
        mealsArray = JSON.parse(myMealsHttpReq.response).meals
        console.log(mealsArray)
        displayMeals()
    }
})




function displayMeals() {

    document.querySelector('.allCountries').classList.add('d-none')
    document.querySelector('.allIngredients').classList.add('d-none')
    document.querySelector('.contactUs').classList.add('d-none')
    document.querySelector('#info').classList.add('d-none')
    document.querySelector('.mealsCaregory').classList.add('d-none')
    // document.querySelector('.search-inputs').classList.add('d-none')
    document.querySelector('.allCategory').classList.add('d-none')
    document.querySelector('.SpecificIngredient').classList.add('d-none')


    document.querySelector('.allMeals').classList.remove('d-none')


    var cartona = ``;

    for (var i = 0; i < mealsArray.length; i++) {

        cartona += `    <div class="col-lg-3"> 
        <article  onclick="displayMealInfo(${i})">
            <img src="${mealsArray[i].strMealThumb}" alt="kb9" class="im w-100 rounded-3">
            <div class="white-layer fs-2 d-flex align-items-center"> ${mealsArray[i].strMeal} </div>
        </article>
    </div>`
    }

    document.querySelector('.allMeals').innerHTML = cartona
}

$('.fa-bars').click(function () {
    $('#side-nav').animate({ left: "0px" }, 600)
    $('.fa-x').css('display', 'block')
    $('.fa-bars').css('display', 'none')
    $('.inner-menu').css('display', 'flex')

})

$('.fa-x').click(function () {
    $('#side-nav').animate({ left: "-280px" }, 600)
    $('.fa-x').css('display', 'none')
    $('.fa-bars').css('display', 'block')

})




$(window).on('load', function () {
    $('#spinner').fadeOut('1000')
})


let search = document.querySelector('#search')

search.addEventListener('click', function () {
    displaySearchInputs()
})

function displaySearchInputs() {

    document.querySelector('.contactUs').classList.add('d-none')
    document.querySelector('.allCategory').classList.add('d-none')
    document.querySelector('.allCountries').classList.add('d-none')
    document.querySelector('.allIngredients').classList.add('d-none')
    document.querySelector('#info').classList.add('d-none')
    document.querySelector('.SpecificIngredient').classList.add('d-none')

    document.querySelector('.allMeals').classList.remove('d-none')
    document.querySelector('.search-inputs').classList.remove('d-none')

    $('#side-nav').animate({ left: "-280px" }, 800)
    $('.fa-x').css('display', 'none')
    $('.fa-bars').css('display', 'block')



}


function getCategory() {

    let myCategoryHttpReq = new XMLHttpRequest()

    myCategoryHttpReq.open('GET', 'https://www.themealdb.com/api/json/v1/1/categories.php')

    myCategoryHttpReq.send()

    categoryArray = []

    myCategoryHttpReq.addEventListener('loadend', function () {
        if (myCategoryHttpReq.status == 200) {
            categoryArray = JSON.parse(myCategoryHttpReq.response).categories
            displayCategory()
        }
    })
}

function displayCategory() {
    document.querySelector('.allMeals').classList.add('d-none')
    document.querySelector('.allCountries').classList.add('d-none')
    document.querySelector('.allIngredients').classList.add('d-none')
    document.querySelector('.contactUs').classList.add('d-none')
    document.querySelector('#info').classList.add('d-none')
    document.querySelector('.mealsCaregory').classList.add('d-none')
    // document.querySelector('.search-inputs').classList.add('d-none')
    document.querySelector('.allCategory').classList.add('d-none')
    document.querySelector('.SpecificIngredient').classList.add('d-none')



    document.querySelector('.allCategory').classList.remove('d-none')

    var cartona = ``

    for (var i = 0; i < categoryArray.length; i++) {
        cartona += `    <div class="col-lg-3"> 
        <article onclick="getMealsByCategory('${categoryArray[i].strCategory}')" >
            <img src="${categoryArray[i].strCategoryThumb}" alt="kb9" class="w-100 rounded-3">
            <div class="white-layer fs-6">
            <h4> ${categoryArray[i].strCategory} </h4>
            <p> ${categoryArray[i].strCategoryDescription} </p>
             </div>

        </article>
    </div>`
    }

    document.querySelector('.allCategory').innerHTML = cartona

    $('#side-nav').animate({ left: "-280px" }, 800)
    $('.fa-x').css('display', 'none')
    $('.fa-bars').css('display', 'block')



}

function getArea() {

    let myAreaHttpReq = new XMLHttpRequest()

    myAreaHttpReq.open('GET', 'https://www.themealdb.com/api/json/v1/1/list.php?a=list')

    myAreaHttpReq.send()

    areaArray = []

    myAreaHttpReq.addEventListener('loadend', function () {
        if (myAreaHttpReq.status == 200) {
            areaArray = JSON.parse(myAreaHttpReq.response).meals
            displayCountries()
        }
    })
}

function displayCountries() {
    document.querySelector('.allMeals').classList.add('d-none')
    document.querySelector('.allIngredients').classList.add('d-none')
    document.querySelector('#info').classList.add('d-none')
    document.querySelector('.mealsCaregory').classList.add('d-none')
    // document.querySelector('.search-inputs').classList.add('d-none')
    document.querySelector('.contactUs').classList.add('d-none')
    document.querySelector('.allCategory').classList.add('d-none')
    document.querySelector('.SpecificIngredient').classList.add('d-none')





    document.querySelector('.allCountries').classList.remove('d-none')


    var cartona = ``

    for (var i = 0; i < areaArray.length; i++) {
        cartona += `    <div class="col-lg-3"> 
        <article class="text-center">
            <img src="imgs/world.jpg" alt="kb9" class="w-100 rounded-3">
            <h2 class="text-white"> ${areaArray[i].strArea} </h2>
        </article>
    </div>`
    }

    document.querySelector('.allCountries').innerHTML = cartona

    $('#side-nav').animate({ left: "-280px" }, 800)
    $('.fa-x').css('display', 'none')
    $('.fa-bars').css('display', 'block')
}

function getIngredients() {
    let myIngHttpReg = new XMLHttpRequest()

    myIngHttpReg.open('GET', 'https://www.themealdb.com/api/json/v1/1/list.php?i=list')

    myIngHttpReg.send()

    ingredientsArray = []

    myIngHttpReg.addEventListener('loadend', function () {
        if (myIngHttpReg.status == 200) {
            ingredientsArray = JSON.parse(myIngHttpReg.response).meals
            displayIngredients()
        }
    })
}

function displayIngredients() {
    document.querySelector('.allMeals').classList.add('d-none')
    document.querySelector('.contactUs').classList.add('d-none')
    document.querySelector('#info').classList.add('d-none')
    document.querySelector('.mealsCaregory').classList.add('d-none')
    // document.querySelector('.search-inputs').classList.add('d-none')
    document.querySelector('.contactUs').classList.add('d-none')
    document.querySelector('.allCategory').classList.add('d-none')
    document.querySelector('.allCountries').classList.add('d-none')
    document.querySelector('.SpecificIngredient').classList.add('d-none')

    document.querySelector('.allIngredients').classList.remove('d-none')


    var cartona = ``

    for (var i = 0; i < 20; i++) {
        // console.log(ingredientsArray[i].strIngredient);
        cartona += `<div class="col-lg-3"> 
        <article onClick="getSpecificIngredients('${ingredientsArray[i].strIngredient}')" class="text-center">
            <img src="imgs/Handaan_Regular.jpg" alt="kb9" class="w-100 rounded-3">
            <h3 class="text-white"> ${ingredientsArray[i].strIngredient} </h3>
        </article>
    </div>`
    }

    document.querySelector('.allIngredients').innerHTML = cartona

    $('#side-nav').animate({ left: "-280px" }, 800)
    $('.fa-x').css('display', 'none')
    $('.fa-bars').css('display', 'block')
}

function getSpecificIngredients(namee) {
    console.log(namee);
    let myIngHttpReg = new XMLHttpRequest()

    myIngHttpReg.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?i=${namee}`)

    myIngHttpReg.send()

    SpecingredientsArray = []

    myIngHttpReg.addEventListener('loadend', function () {
        if (myIngHttpReg.status == 200) {
            SpecingredientsArray = JSON.parse(myIngHttpReg.response).meals
            displaySpecificIngredients()
            console.log(SpecingredientsArray);
        }
    })
}
function displaySpecificIngredients() {

    document.querySelector('.allMeals').classList.add('d-none')
    document.querySelector('.contactUs').classList.add('d-none')
    document.querySelector('#info').classList.add('d-none')
    document.querySelector('.mealsCaregory').classList.add('d-none')
    // document.querySelector('.search-inputs').classList.add('d-none')
    document.querySelector('.contactUs').classList.add('d-none')
    document.querySelector('.allCategory').classList.add('d-none')
    document.querySelector('.allIngredients').classList.add('d-none')
    document.querySelector('.allCountries').classList.add('d-none')

    document.querySelector('.SpecificIngredient').classList.remove('d-none')

    var cartona = ``

    for (var i = 0; i < SpecingredientsArray.length; i++) {
        cartona += `    <div class="col-lg-3"> 
        <article >
            <img src='${SpecingredientsArray[i].strMealThumb}' class="w-100 rounded-3">
            <h2 class="text-white"> ${SpecingredientsArray[i].strMeal} </h2>
        </article>
    </div>`
    }

    document.querySelector('.SpecificIngredient').innerHTML = cartona
}

function displayContactUs() {

    document.querySelector('.allMeals').classList.add('d-none')
    document.querySelector('#info').classList.add('d-none')
    document.querySelector('.mealsCaregory').classList.add('d-none')
    // document.querySelector('.search-inputs').classList.add('d-none')
    document.querySelector('.contactUs').classList.add('d-none')
    document.querySelector('.allCategory').classList.add('d-none')
    document.querySelector('.allCountries').classList.add('d-none')
    document.querySelector('.allIngredients').classList.add('d-none')
    document.querySelector('.SpecificIngredient').classList.add('d-none')



    document.querySelector('.contactUs').classList.remove('d-none')

    $('#side-nav').animate({ left: "-280px" }, 800)
    $('.fa-x').css('display', 'none')
    $('.fa-bars').css('display', 'block')
}


function displayMealInfo(index) {


    document.querySelector('.allMeals').classList.add('d-none')
    document.querySelector('.mealsCaregory').classList.add('d-none')
    // document.querySelector('.search-inputs').classList.add('d-none')
    document.querySelector('.contactUs').classList.add('d-none')
    document.querySelector('.allCategory').classList.add('d-none')
    document.querySelector('.allCountries').classList.add('d-none')
    document.querySelector('.allIngredients').classList.add('d-none')
    document.querySelector('.SpecificIngredient').classList.add('d-none')

    document.querySelector('#info').classList.remove('d-none')




    var imgSorc = mealsArray[index].strMealThumb
    console.log(mealsArray[index]);
    console.log(imgSorc)


    $('#info-img').attr('src', imgSorc)
    $('.infoName').html(mealsArray[index].strMeal)
    $('.description').html(mealsArray[index].strInstructions)
    $('.areaName').html(mealsArray[index].strArea)
    $('.category').html(mealsArray[index].strCategory)

    $('.rescipies').html(mealsArray[index].strIngredient1)


    $('.videoBtn').attr('href', mealsArray[index].strYoutube)


}


function getMealsBysearch(x) {
    document.querySelector('.allMeals').classList.remove('d-none')

    var mySearchHttpsReq = new XMLHttpRequest()


    mySearchHttpsReq.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)

    mySearchHttpsReq.send()

    mySearchHttpsReq.addEventListener('loadend', function () {
        if (mySearchHttpsReq.status == 200) {
            mealsArray = JSON.parse(mySearchHttpsReq.response).meals
            console.log(mealsArray)
            displayMeals()
        }
    })

}

function getMealsBy1stLetter(y) {

    document.querySelector('.allMeals').classList.remove('d-none')


    var regex = / ^[a-z]{1}$ /

    console.log(regex)

    console.log(regex.test(y))

    if (regex.test(y) == false) {
        var mySearchHttpsReq = new XMLHttpRequest()

        mySearchHttpsReq.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?f=${y}`)

        mySearchHttpsReq.send()

        mySearchHttpsReq.addEventListener('loadend', function () {
            if (mySearchHttpsReq.status == 200) {
                mealsArray = JSON.parse(mySearchHttpsReq.response).meals
                console.log(mealsArray)
                displayMeals()
            }
        })
    }
    else {
        console.log('wrong')
    }


}



function getMealsByCategory(z) {
    var myCategoryMealsHttp = new XMLHttpRequest()

    myCategoryMealsHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?c=${z}`)

    myCategoryMealsHttp.send()

    myCategoryMealsHttp.addEventListener('loadend', function () {
        if (myCategoryMealsHttp.status == 200) {
            mealsArray = JSON.parse(myCategoryMealsHttp.response).meals
            console.log(mealsArray)
            displayCategoryMeals()
        }
    })

}

function displayCategoryMeals() {

    document.querySelector('.allMeals').classList.add('d-none')
    // document.querySelector('.search-inputs').classList.add('d-none')
    document.querySelector('.contactUs').classList.add('d-none')
    document.querySelector('.allCategory').classList.add('d-none')
    document.querySelector('.allCountries').classList.add('d-none')
    document.querySelector('.allIngredients').classList.add('d-none')
    document.querySelector('#info').classList.add('d-none')
    document.querySelector('.SpecificIngredient').classList.add('d-none')


    document.querySelector('.mealsCaregory').classList.remove('d-none')



    var cartona = ``

    for (var i = 0; i < mealsArray.length; i++) {
        cartona += `    <div class="col-lg-3"> 
        <article >
            <img src="${mealsArray[i].strMealThumb}" alt="kb9" class="w-100 rounded-3">
            <div class="white-layer fs-6">
            <h4 class="fs-2 d-flex align-items-center"> ${mealsArray[i].strMeal} </h4>
          
             </div>

        </article>
    </div>`
    }

    document.querySelector('.mealsCaregory').innerHTML = cartona
}




for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 2000);
}