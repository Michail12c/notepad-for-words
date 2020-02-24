export class InteractionWithLocalStorage {
  constructor(name, status){
      this.name = name
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
  
  changeStatusElements(elem1){
    let myElem = this._getQuestionsFromLS(this.name);
    myElem[elem1].status = true;
    localStorage.setItem(elem1, JSON.stringify(myElem));
  }

  changeStatusElementsOnStart(){
    let a =this._getQuestionsFromLS(this.name);
    a.map(el => {
      el.status = false;
    })
    localStorage.setItem(this.name, JSON.stringify(a));
  }
}
