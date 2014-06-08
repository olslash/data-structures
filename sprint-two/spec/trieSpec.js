describe('trie', function() {
  var trie;
  var words = ['an', 'ant', 'all',
    'allot', 'alloy', 'aloe',
    'are', 'ate', 'be'
  ];

  beforeEach(function() {
    trie = new TrieNode(null);
    words.forEach(function(word) {
      trie.insert(word);
    });
  });

  describe('insert', function() {
    it('should correctly insert nodes', function() {

      expect(trie.links.a.links.l.links.l.links.o.links.y.fullword)
        .to.equal(true);
    });
  });

  describe('find', function() {
    it('should test whether a partial word is in the tree', function() {
      expect(trie.find("alloy")).to.equal(true);
      expect(trie.find("allo")).to.equal(true);
      expect(trie.find("cat")).to.equal(false);
    });

    it('should test whether a full word is in the tree', function() {
      expect(trie.find("alloy", true)).to.equal(true);
      expect(trie.find("allo", true)).to.equal(false);
      expect(trie.find("cat", true)).to.equal(false);
    });
  });
});