export class InteractionWithLocalStorage {
  constructor(name){
      this.name = name;
  }
  createList(){
     return this._getQuestionsFromLS(this.name);
  }

  _getQuestionsFromLS(){
     return  JSON.parse(localStorage.getItem(this.name) || '[]');
  }
  _searchForWordRepetitions(array, elem){
    return array.find(item => item.word === elem.word)
  }

  addLocalStorage(elem){
      let all = this._getQuestionsFromLS(this.name);
      let statusSearch = this._searchForWordRepetitions(all, elem);
      if(!statusSearch){      
      all.push(elem);
      localStorage.setItem(this.name, JSON.stringify(all)); 
      }
  }

  updateLocalStorage(setElem){
    let previousList = this._getQuestionsFromLS(this.name);
    let newList = previousList.filter( item => item.word !== setElem.word);
    localStorage.setItem(this.name, JSON.stringify(newList)); 
  }

  editionList(newElem, id){
     let previousList = this._getQuestionsFromLS(this.name);
     let newList = previousList.map((item, index) => {
       if(index === id - 1){
        return  item = newElem; 
       }
       return item
     })
     localStorage.setItem(this.name, JSON.stringify(newList)); 
  }
  
  keySearch(name){
    let mas = [];
    let keys = Object.keys(localStorage);
     for( let key of keys){
        mas.push(key)
     }
     if (!mas.includes(name)){
      return false
     }
     return true
  }
  _instalDate(){
    let date = new Date();
    let month = date.getMonth() < 10 ?  0 +''+ ( +date.getMonth() + 1) : +date.getMonth() + 1; 
    let day = date.getDate() < 10 ? 0 +''+ date.getDate() : date.getDate(); 
    let nowDate = month + '.' + day; 
    return nowDate; 
  }
   _processingString(string){
     let masString = string.split('-');
     return masString; 
   }
 
  setCountWord(){
    let prevMas = this._getQuestionsFromLS(); 
    let date = this._instalDate(); 
   /*  let date = '03.31'; */
    let mas = []; 
    let elem = `${date}-1`; 
    if(prevMas.length == 0){
      mas.push(elem); 
      localStorage.setItem(this.name, JSON.stringify(mas))
      return
    }
    let masWithString = this._processingString(prevMas[prevMas.length - 1]);
    if(prevMas.length !== 0 && masWithString[0] !== date){
     prevMas.push(elem); 
     localStorage.setItem(this.name, JSON.stringify(prevMas))
     return
    }
    let count = + masWithString[1] + 1;
    let elem2 = `${date}-${count}`;
    prevMas.pop(); 
    prevMas.push(elem2); 
    localStorage.setItem(this.name, JSON.stringify(prevMas));  
    this.getCountWord();    
  }
  
  getCountWord(){
    let prevMas = this._getQuestionsFromLS();
    let nextMas = prevMas.map(item => this._processingString(item));
    let masWithWords = [];  
    nextMas.map(elem => masWithWords.push([+elem[0], +elem[1]])); 
    return masWithWords; 
  }






}
