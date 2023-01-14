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
            <span className='arrow' />
            <span className='label'>Ingredients</span>
        </div>
    )
}

const IngredientList = ({ isOpen, ingredients }) => {
    return (
        <div className={`ingredients ${isOpen ? 'open' : ''}`}>
            <ul class="list-disc">{ingredients.map(element => <li>{element}</li>)}</ul>
        </div>
    )
}

export default Ingredients;
