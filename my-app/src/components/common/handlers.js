export class InteractionWithLocalStorage {
  constructor(name){
      this.name = name;
  }
  createList(){
     return this._getQuestionsFromLS(this.name);
  }

  _getQuestionsFromLS(){
    return JSON.parse(localStorage.getItem(this.name) || '[]');
  }

  addLocalStorage(elem){
      let all = this._getQuestionsFromLS(this.name);
      all.push(elem);
      localStorage.setItem(this.name, JSON.stringify(all));
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
