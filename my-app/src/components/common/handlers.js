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
}
