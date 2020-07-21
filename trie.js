let Trie = function(words) {
  this.root = {};
  
  for(let p = 0; p < words.length; p++) {
    this.insert(words[p]);
  }
};

Trie.prototype.insert = function(word) {
  let current = this.root;
  word.split('').map(letter => {
    current = current[letter] = current[letter] || {}
  })
  current.isWord = true;
};
