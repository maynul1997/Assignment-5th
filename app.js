
function lookForMeal() {
    const dishName = document.getElementById('dish-catagory').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
        .then(res => res.json())
        .then(data => displayMeal(data))
        .catch(error => window.alert('Can not find your food'))
    const displayMeal = meals => {
        const mealsDiv = document.getElementById('foods');
        const menu = meals.meals;
        mealsDiv.innerHTML = "";
        menu.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.className = 'food'
            const foodInfo = `
        <div onclick="displayMealsDetails('${meal.strMeal}')">
        <img id="firstImg" src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h>
            
        </div>    

        `;

            mealDiv.innerHTML = foodInfo;
            mealsDiv.appendChild(mealDiv);

        });
    }

}


const displayFoodsDetails = strMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetail(data));
}

const displayFoodssDetail = meals => {
    const mealsDiv = document.getElementById('ingradiense');
    const menu = meals.meals;
    mealsDiv.innerHTML = "";
    menu.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'food'
        const foodInfo = `
        <img src="${meal.strMealThumb}">
         <h3>${meal.strMeal}</h3>
         <p>Ingredints</p>
         <ul class="list-item">
            <li>${meal.strIngredient1}</li> 
            <li>${meal.strIngredient2}</li> 
            <li>${meal.strIngredient3}</li> 
            <li>${meal.strIngredient4}</li> 
            <li>${meal.strIngredient5}</li> 
            <li>${meal.strIngredient6}</li> 
            </ul>
        `;
        mealDiv.innerHTML = foodInfo;
        mealsDiv.appendChild(mealDiv);
    });
}