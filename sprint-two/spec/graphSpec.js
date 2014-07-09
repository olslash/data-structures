describe('graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addNode", "containsId", "removeNode", "addEdge", "getEdge", "removeEdge" and "forEachNode"', function() {
    expect(graph.addNode).to.be.a("function");
    expect(graph.containsId).to.be.a("function");
    expect(graph.removeNode).to.be.a("function");
    expect(graph.getEdge).to.be.a("function");
    expect(graph.addEdge).to.be.a("function");
    expect(graph.removeEdge).to.be.a("function");
  });

  it('should store values as nodes that were inserted', function() {
    graph.addNode('kittens');
    graph.containsId('kittens');
    expect(graph.containsId('kittens')).to.equal(true);
  });

  it('should remove nodes that were inserted', function() {
    graph.addNode('puppies');
    graph.removeNode('puppies');
    expect(graph.containsId('puppies')).to.equal(false);
  });

  it('should automatically create an edge between two nodes if there is only one node in the graph', function() {
    graph.addNode('puppies');
    graph.addNode('kittens');
    expect(graph.getEdge('puppies', 'kittens')).to.equal(true);
  });

  it('should create edges between two nodes', function() {
    graph.addNode('puppies');
    graph.addNode('kittens');
    graph.addNode('penguins', 'puppies');
    expect(graph.getEdge('penguins', 'puppies')).to.equal(true);
    expect(graph.getEdge('penguins', 'kittens')).to.equal(false);
  });

  it('should create edges between a new node and many other nodes', function() {
    graph.addNode('puppies');
    graph.addNode('kittens');
    graph.addNode('dogs', 'puppies');
    graph.addNode('cats', ['puppies', 'kittens']);

    expect(graph.getEdge('dogs', 'puppies')).to.equal(true);
    expect(graph.getEdge('puppies', 'dogs')).to.equal(true);
    expect(graph.getEdge('cats', 'puppies')).to.equal(true);
    expect(graph.getEdge('cats', 'kittens')).to.equal(true);
    expect(graph.getEdge('kittens', 'cats')).to.equal(true);
  });

  it('should remove edges between nodes', function() {
    graph.addNode('apples');
    graph.addNode('bananas');
    graph.addNode('satsumas', 'bananas');
    graph.addEdge('satsumas', 'apples');
    graph.removeEdge('apples', 'bananas');
    expect(graph.getEdge('apples', 'bananas')).to.equal(false);
  });

  it('should remove nodes without any edges', function() {
    graph.addNode('jacket');
    graph.addNode('hat');
    graph.removeEdge('jacket', 'hat');
    expect(graph.containsId('hat')).to.equal(false);
    expect(graph.containsId('jacket')).to.equal(false);
  });

  it('should traverse the graph, calling the passed-in function once on each node.', function(){
    graph.addNode('apples');
    graph.addNode('bananas');
    graph.addNode('satsumas', 'bananas');
    graph.addEdge('satsumas', 'apples');

    var result = [];
    graph.forEachNode(function(value){
      result.push(value);
    });

    expect(result).to.include('apples');
    expect(result).to.include('bananas');
    expect(result).to.include('satsumas');
    expect(result).not.to.include('something');
  });

  it('should traverse the graph with DFS, calling the passed-in function once on each node.', function() {
    graph.addNode('hi');
    graph.addNode('mom');
    graph.addNode('mom2', 'hi');
    graph.addNode('mom3', 'hi');
    graph.addNode('mom4', 'mom2');
    graph.addNode('mom6', ['mom3', 'mom4']);

    var result = [];
    graph.traverseDFS('mom', function(nodeId){
      result.push(nodeId);
    });

    expect(result).to.include('hi');
    expect(result).to.include('mom');
    expect(result).to.include('mom2');
    expect(result).to.include('mom3');
    expect(result).to.include('mom4');
    expect(result).to.include('mom6');
  });

});
