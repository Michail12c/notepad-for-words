export class HandlerResponse{
  constructor(questions, answer){
    this.questions = questions
    this.answer = answer
  }
  _modifierWords(elem){
       return elem.trim().toLowerCase().replace(/[?!\.]/g, '');
      
  }
 
   _comparison (word1, word2) {
    let result = word1 === word2 ? true : false
    return result; 
  }
  comparisonArray(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
      let result = this._comparison(arr1[i], arr2[i]); 
      if(!result){
        return false
        break
      }
    }
    return true 
  }


  mixedWords(){
    let arr = this._modifierWords(this.questions)
    arr = arr.split(' ')
    let mixedArr = arr.sort(() => {
      return Math.random() - 0.5
    })
    return mixedArr
  }

  collationResult(){
    let a = this._modifierWords(this.questions)
    let b = this._modifierWords(this.answer)
    return this._comparison(a, b) 
  }

  convertingStringToArray(string){
    let newArray = string.split(' '); 
    return newArray; 
  }

   randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  dynamicWidth(elem, fz){
    let arr = elem.split('');
    arr = arr.length; 
    return arr * fz; 
  }
  
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array
  }

}