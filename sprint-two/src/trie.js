var TrieNode = function(letter) {
    this.letter = letter;
    this.links = {}; // {char: TrieNode}
    this.fullword = false;
};

TrieNode.prototype.insert = function(word) {
    var root = this;
    var c = 0; // current character
    var thisChar;

    while (c < word.length) {
        thisChar = word.charAt(c);

        if (root.links[thisChar]) { // if there's a node for the char
            root = root.links[thisChar];
            c++;
        } else {
            break; // the point where we no longer have prefix nodes
        }
    }

    //start adding nodes for successive characters
    while (c < word.length) {
        thisChar = word.charAt(c);

        root.links[thisChar] = new TrieNode(thisChar);
        root = root.links[thisChar];
        c++;
    }
    
    //flag fullword on the last character
    root.fullword = true;
};

TrieNode.prototype.find = function(word, full) {
    var root = this;

    for (var c = 0, len = word.length; c < len; c++) {
        if (!root.links[word.charAt(c)]) {
            return false;
        } else {
            root = root.links[word.charAt(c)];
        }
    }

    return full ? root.fullword : true;
};