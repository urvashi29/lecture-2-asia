import React from "react";
import data from "./data";

const App = () => {
    console.log(data);
    const { recipe } = data;

    const recipeList = recipe.map((item) => {
        return (
            <div key={item.idCategory} style={{ textAlign: "center" }}>
                <img src={item.strCategoryThumb} alt="recipe-data" />
                <p style={{ color: 'red', fontSize: "20px" }}>Category: {item.strCategory}</p>
                <p style={{ color: 'blue' }}>Category Description: {item.strCategoryDescription}</p>
            </div>
        )
    });

    return (
        <>
            {recipeList}
        </>
    )
}

export default App;


{/* <p style="color: red"; text-align: center; font-size: 20px></p> */ }