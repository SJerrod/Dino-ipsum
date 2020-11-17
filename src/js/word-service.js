export default class Word {
  static getWord() {
    return new Promise(function(resolve,reject) {
      let word = new XMLHttpRequest();
      const url = 'http://dinoipsum.herokuapp.com/api?format=json&paragraphs=1&words=1';
      word.onload = function() {
        if (this.status === 200) {
          resolve(word.response);
        } else {
          reject(word.response);
        }
      };
      word.open("GET", url, true);
      word.send();
    });
  }
}