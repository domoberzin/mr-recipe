import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import RecipeName from "./RecipeName";

const Recipes = ({ apiType, currentResults, openedIngredients, openedInstructions, handleIngredientClick, handleInstructionClick }) => {


return (
    <div className='search-results'>
      {currentResults.map((recipe, index) => (
        <div key={index}>
          <RecipeName name={recipe.name} />
          <Ingredients isOpen={openedIngredients.includes(index)} onToggle={handleIngredientClick} ingredients={recipe.ingredients} index={index} />
          <Instructions apiType={apiType} isOpen={openedInstructions.includes(index)} onToggle={handleInstructionClick} index={index} instructions={recipe.instructions} />
        </div>
      ))}
    </div>
)};

export default Recipes;



