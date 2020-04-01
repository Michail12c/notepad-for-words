export class HandlerResponse{
  constructor(questions, answer){
    this.questions = questions
    this.answer = answer
  }
  _modifierWords(elem){
      return  elem.trim().toLowerCase().replace(/[?!\.]/g, '') 
  }

   _comparison (word1, word2) {
    let result = word1 === word2 ? true : false
    return result; 
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
  

}