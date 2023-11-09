// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True
 

// Constraints:

// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 104 calls in total will be made to insert, search, and startsWith.

// Object approach

var TrieNode = function() {
    this.children = {};
    this.isEndOfWord = false;
};

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let char of word) {
        if (!node.children[char]) {
            node.children[char] = new TrieNode();
        }
        node = node.children[char];
    }
    node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (let char of word) {
        if (!node.children[char]) {
            return false;
        }
        node = node.children[char];
    }
    return node.isEndOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let char of prefix) {
        if (!node.children[char]) {
            return false;
        }
        node = node.children[char];
    }
    return true;
};

// Example usage:
var trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // should return true
console.log(trie.search("app"));     // should return false
console.log(trie.startsWith("app")); // should return true
trie.insert("app");
console.log(trie.search("app"));     // should return true



// array approach 


var TrieNode = function() {
    this.children = Array(26).fill(null);
    this.isEndOfWord = false;
};

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        const index = word.charCodeAt(i) - 'a'.charCodeAt(0);
        if (!node.children[index]) {
            node.children[index] = new TrieNode();
        }
        node = node.children[index];
    }
    node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        const index = word.charCodeAt(i) - 'a'.charCodeAt(0);
        if (!node.children[index]) {
            return false;
        }
        node = node.children[index];
    }
    return node.isEndOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
        const index = prefix.charCodeAt(i) - 'a'.charCodeAt(0);
        if (!node.children[index]) {
            return false;
        }
        node = node.children[index];
    }
    return true;
};

// Example usage:
var trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // should return true
console.log(trie.search("app"));     // should return false
console.log(trie.startsWith("app")); // should return true
trie.insert("app");
console.log(trie.search("app"));     // should return true
