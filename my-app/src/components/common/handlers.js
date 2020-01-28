export class InteractionWithLocalStorage {
  constructor(name){
      this.name = name;
  }
  createList(name3){
     console.log(this.name, name3)
  }

  _getQuestionsFromLS(){
    return JSON.parse(localStorage.getItem(this.name) || '[]');
  }

  addLocalStorage(elem1, elem2){
    let setWord = {
      word: elem1,
      transfer: elem2,
      status: false
    }
      let all = this._getQuestionsFromLS(this.name);
      all.push(setWord);
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
