// You are given an array of strings products and a string searchWord.

// Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

// Return a list of lists of the suggested products after each character of searchWord is typed.

 

// Example 1:

// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
// Example 2:

// Input: products = ["havana"], searchWord = "havana"
// Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
// Explanation: The only word "havana" will be always suggested while typing the search word.


class TrieNode {
    constructor() {
        this.children = {};
        this.suggestions = [];
    }
}

var suggestedProducts = function(products, searchWord) {
    products.sort(); // Sort the products lexicographically.
    
    const root = new TrieNode();
    let node = root;
    const result = [];
    let currentPrefix = "";

    // Build the Trie and store suggestions for each node.
    for (const product of products) {
        node = root;
        for (const char of product) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.suggestions.push(product);
            // Sort the suggestions lexicographically.
            node.suggestions.sort();
            if (node.suggestions.length > 3) {
                node.suggestions.pop();
            }
        }
    }

    for (let i = 0; i < searchWord.length; i++) {
        currentPrefix += searchWord[i];
        node = root;
        const suggestions = [];

        // Traverse the Trie to find suggestions.
        for (const char of currentPrefix) {
            if (!node.children[char]) {
                suggestions.push([]);
                node = null;
                break;
            }
            node = node.children[char];
        }

        if (node) {
            suggestions.push(...node.suggestions);
        }

        result.push(suggestions);
    }

    return result;
};

// Example 1
const products1 = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord1 = "mouse";
console.log(suggestedProducts(products1, searchWord1));

// Example 2
const products2 = ["havana"];
const searchWord2 = "havana";
console.log(suggestedProducts(products2, searchWord2));
