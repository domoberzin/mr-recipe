const Ingredients = ({ isOpen, onToggle, ingredients, index }) => {

    return (
        <div>
            <IngredientButton isOpen={isOpen} onClick={onToggle} index={index} />
            <IngredientList isOpen={isOpen} ingredients={ingredients} />
        </div>
    )
}

const IngredientButton = ({ isOpen, onClick, index }) => {
    return (
        <div 
            className={`ingredient-button ${isOpen ? 'open' : ''}`}
            onClick={() => onClick(index)}>
            <span className='arrow text-white' />
            <span className='text-2xl text-white font-bold'>Ingredients</span>
        </div>
    )
}

const IngredientList = ({ isOpen, ingredients }) => {
    return (
        <div className={`ingredients ${isOpen ? 'open' : ''}`}>
            <ul className="list-disc list-inside text-xl font-semibold text-white">{ingredients.map(element => <li>{element}</li>)}</ul>
        </div>
    )
}

export default Ingredients;
