import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import RecipeName from "./RecipeName";
import ReactModal from "react-modal";
import React, { useState } from "react";

// const Recipes = ({ apiType, currentResults, openedIngredients, openedInstructions, handleIngredientClick, handleInstructionClick }) => {


// return (
//     <div className='search-results'>
//       {currentResults.map((recipe, index) => (
//         <div key={index}>
//           <RecipeName name={recipe.name} />
//           <Ingredients isOpen={openedIngredients.includes(index)} onToggle={handleIngredientClick} ingredients={recipe.ingredients} index={index} />
//           <Instructions apiType={apiType} isOpen={openedInstructions.includes(index)} onToggle={handleInstructionClick} index={index} instructions={recipe.instructions} />
//         </div>
//       ))}
//     </div>
// )};

// export default Recipes;

const Recipes = ({ searched, apiType, currentResults, openedIngredients, openedInstructions, handleIngredientClick, handleInstructionClick }) => {

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const [instructionList, setInstructionList] = useState([]);
  const [i, setI] = useState(null);

  // if (currentResults.length === 0 && searchTerm !== '') {
  //   return (
  //     <div className="mt-12">
  //       <span className="text-indigo-600 font-bold text-4xl">
  //         Unfortunately nothing could be found :(
  //       </span>
  //     </div>
  //   )
  // }

  return (
    <>
      <div className='flex flex-col gap-y-6 py-12'>
      { currentResults.length === 0 && searched ? (
      <div className="mt-12">
        <span className="text-indigo-600 font-bold text-4xl">
          Unfortunately nothing could be found :(
        </span>
      </div>
      ) : currentResults.map((recipe, index) => (
          <div key={index} className='bg-indigo-600 rounded-lg drop-shadow-xl cursor-pointer transition ease-in duration-200 hover:bg-green-500 hover:scale-105' onClick={() => {setIsPopUpOpen(true);
                                                setRecipeName(recipe.name);
                                                setIngredientList(recipe.ingredients);
                                                setI(index);
                                                setInstructionList(recipe.instructions)}}>
            <RecipeName name={recipe.name}/>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <ReactModal 
        className="absolute w-4/6 h-4/6 bg-indigo-600 rounded-lg p-4 inset-56 flex" 
        isOpen={isPopUpOpen}
        onRequestClose={() => {setIsPopUpOpen(false);
                              setRecipeName("");
                              setIngredientList([]);
                              setI(null);
                              setIngredientList([]);}}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        preventScroll={true} centered>
          <div className="flex flex-col gap-y-4">
            <span className="text-white text-left text-4xl font-bold">
              {recipeName}
            </span>
            <Ingredients isOpen={openedIngredients.includes(i)} onToggle={handleIngredientClick} ingredients={ingredientList} index={i}/>
            <Instructions apiType={apiType} isOpen={openedInstructions.includes(i)} onToggle={handleInstructionClick} index={i} instructions={instructionList}/>
          </div>
        </ReactModal>
      </div>
    </>
  );
};

export default Recipes;




