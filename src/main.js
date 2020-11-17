import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#start').click(function() {
    $('#start').hide();
    // let letter = $('.guess').val();

    let promise = new Promise(function(resolve, reject) {
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

    promise.then(function(response) {
      const gameWord = JSON.parse(response);
      console.log(`${gameWord[0][0]}`);
      $('.guessed').text(`${gameWord[0][0]}`);
    }, function(error) {
      $('.guessed').text(`There was an error: ${error}`);
    });
  });
});