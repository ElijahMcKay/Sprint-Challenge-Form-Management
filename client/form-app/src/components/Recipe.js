import React, { Fragment } from 'react';

function Recipe(props){ 
    return (
        <div>
            {props.recipe.map((dish) => (
                <>
                    <h2>{dish.name}</h2>
                    <p>Course: {dish.course}</p>
                    <p>Cooking Technique: {dish.technique}</p>
                    <p>Ingredients:</p> 
                    {dish.ingredients.map((ingred) => (
                        <p>{ingred}</p>
                    ))}
                </>
            ))}
        </div>
)
}

export default Recipe; 