/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
   if (remainingTime===0) return "Lasagna is done."
   if (remainingTime>0) return "Not done, please wait."
   if (!remainingTime) return "You forgot to set the timer."
}

export function preparationTime(array, averageTimePerLayer) {
   return (!averageTimePerLayer) ? array.length*2 : array.length*averageTimePerLayer
}

export function quantities(array) {
  const gramsOfNoodles=array.filter(ingredient => ingredient=="noodles").length*50
  const litersOfSauce = array.filter(ingredient=> ingredient=="sauce").length*0.2
  return {
    "noodles": gramsOfNoodles,
    "sauce": litersOfSauce
  }
}

export function addSecretIngredient(array1, array2) {
   const secret=array1[array1.length-1]
   array2.push(secret)
}

export function scaleRecipe(recipeForTwo, portions) {
   const scaleBy=portions/2
   const scaledRecipe={}
   for (let ingredient in recipeForTwo) {
      scaledRecipe[ingredient]=scaleBy*recipeForTwo[ingredient]
   }
   return scaledRecipe
}