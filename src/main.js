import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Word from './js/word-service.js';

function hideWord(word) {
  let answer = [];
  for (let i=0; i < word.length; i++) {
    answer[i] = "_";
  } 
  return answer;
}

$(document).ready(function() {
  $('#start').click(function() {
    $('#start').hide();
    // let letter = $('.guess').val();

    let promise= Word.getWord();

    promise.then(function(response) {
      const gameWord = JSON.parse(response);
      $('.guessed').text(`${gameWord[0][0]}`);
      let word = (`${gameWord[0][0]}`);
      let hiddenWord = hideWord(word);
      $('#keyWord').text(hiddenWord.join(" "));
    }, function(error) {
      $('.guessed').text(`There was an error: ${error}`);
    });
  });
});