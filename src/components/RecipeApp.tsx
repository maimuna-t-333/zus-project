import React, { useState } from 'react'
import { useStore } from '../store/useStore';

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
}

export const RecipeApp = () => {
    const { recipes, addRecipe, removeRecipe } = useStore();
    const [name, setName] = useState<string>("");
    const [ingredients, setIngredients] = useState<string>("");
    const [instructions, setInstructions] = useState<string>("");
    const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
    return (
        <div className='min-h-screen flex items-center justify-center bg-green-100'>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">

                <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Recipe Book</h1>

                <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Recipe Name'
                    className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
                />
                <input type="text" value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder='Ingredients(Comma Separated)'
                    className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
                />
                <textarea value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder='Instructions'
                    className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
                />
            </div>
        </div>
    )
}
