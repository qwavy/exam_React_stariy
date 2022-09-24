import React, { useState, useEffect } from 'react';

export default function FilterCategory() {
    const [recipe, setRecipe] = useState()
    const items = [
        {
            name: 'banan',
            category: ['fruits', 'all']
        },
        {
            name: 'fortnite battle pass',
            category: ['game', 'all']
        }
    ];
    useEffect(() => {
        setRecipe(recipe);
    }, []);
    let gameRecipe = items.filter((el) => 
        el.category.includes('game')
    )
    let fruitsRecipe = items.filter((el) => 
        el.category.includes('fruits')
    )
    let allRecipe = items.filter((el) => 
    el.category.includes('all')
)
    // let AllRecipe = items.filter((el) => {
    //     e.category.includes('all')
    // })
    const handleFilter = (value) => {
        setRecipe(value);
    };
    return (
        <div>
            <h1>Filter category</h1>
            <button onClick={() => {
                handleFilter(gameRecipe)
            }}>
                GAME
            </button>
            <button onClick={() => {
                handleFilter(fruitsRecipe)
            }}>
                fruits
            </button>
            <button onClick={() =>{
                handleFilter(allRecipe)
            }}>
                all
            </button>
            <div>
                {recipe ? recipe.map((el) => <p>{el.name}</p>) : 'выберите категорию'}
            </div>
        </div>
    )
}