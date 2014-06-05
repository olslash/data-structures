describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable.insert).to.be.a("function");
    expect(hashTable.remove).to.be.a("function");
    expect(hashTable.retrieve).to.be.a("function");
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).to.equal(null);
  });

  var oldHashFunction = window.getIndexBelowMaxForKey;

  var breakHashFunction = function(index) {
    window.getIndexBelowMaxForKey = function() { return index; };
  };

  var restoreHashFunction = function() {
    window.getIndexBelowMaxForKey = oldHashFunction;
  };


  it('should handle hash function collisions', function(){
    var v1 = "val1";
    var v2 = "val2";

    breakHashFunction(0);

    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);

    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);

    restoreHashFunction();
  });

  it('should report the correct size', function(){
    expect(hashTable.hashSize()).to.equal(0);

    breakHashFunction(0);

    hashTable.insert(people[1][0],people[1][1]);
    hashTable.insert(people[2][0],people[2][1]);
    expect(hashTable.hashSize()).to.equal(1);

    breakHashFunction(1);

    hashTable.insert(people[0][0],people[0][1]);
    expect(hashTable.hashSize()).to.equal(2);

    restoreHashFunction();
  });

  // (Extra credit! Remove the extra "x" when you want the following tests to run)
  it('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0], lastName = person[1];
      hashTable.insert(firstName,lastName);
    });
    expect(hashTable._limit).to.equal(16);
  });

  it('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0], lastName = person[1];
      hashTable.insert(firstName,lastName);
    });
    expect(hashTable._limit).to.equal(16);
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    expect(hashTable._limit).to.equal(8);
  });
});
