describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    binarySearchTree.insert(20);
    binarySearchTree.insert(6);
    binarySearchTree.insert(10);
    binarySearchTree.insert(25);

    expect(binarySearchTree.contains(5)).to.equal(true);
    expect(binarySearchTree.contains(3)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(true);
    expect(binarySearchTree.contains(2)).to.equal(true);
    expect(binarySearchTree.contains(4)).to.equal(true);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(20)).to.equal(true);
    expect(binarySearchTree.contains(6)).to.equal(true);
    expect(binarySearchTree.contains(10)).to.equal(true);
    expect(binarySearchTree.contains(25)).to.equal(true);

    expect(binarySearchTree.contains(28)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    binarySearchTree.insert(20);
    binarySearchTree.insert(6);
    binarySearchTree.insert(10);
    binarySearchTree.insert(25);
    binarySearchTree.depthFirstLog(func);

    expect(array).to.eql([5, 3, 2, 4, 8, 7, 6, 20, 10, 25]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function(){
    var array = [];
    var func = function(value, name){ array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    binarySearchTree.insert(20);
    binarySearchTree.insert(6);
    binarySearchTree.insert(10);
    binarySearchTree.insert(25);
    binarySearchTree.breadthFirstLog(func);

    expect(array).to.eql([5, 3, 8, 2, 4, 7, 20, 6, 10, 25]);
  });

it('should report the correct minimum and maximum depth', function(){
    var array = [];
    var func = function(value, name){ array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    binarySearchTree.insert(20);
    binarySearchTree.insert(6);
    binarySearchTree.insert(10);
    binarySearchTree.insert(25);
    expect(binarySearchTree.getDepth()).to.eql({max: 4, min: 3});
  });

  it('should return a sorted list of all values', function(){
      binarySearchTree.insert(3);
      binarySearchTree.insert(8);
      binarySearchTree.insert(2);
      binarySearchTree.insert(4);
      binarySearchTree.insert(7);
      binarySearchTree.insert(20);
      binarySearchTree.insert(6);
      binarySearchTree.insert(10);
      binarySearchTree.insert(25);
      expect(binarySearchTree.getSortedList()).to.eql([2,3,4,5,6,7,8,10,20,25]);
  });
});
