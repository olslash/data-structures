var Graph = function(){
  // Node format _nodes =
  // {'puppies': {edges: {kittens: true}}, 'kittens': {edges: {puppies: true}}}
  this._nodes = {};
  this._nodeCount = 0;

};

var Node = function(){
  this.edges = {};
};

Graph.prototype.addNode = function(newNodeId, toNodeIds){
  // toNodeIds is an array containing nodes the new node should have edges to.
  var count = this._nodeCount;
  if (count === 1) {
    // if there's only one node in the graph, the new node must connect to it.
    toNodeIds = Object.keys(this._nodes);
  }
  if(!Array.isArray(toNodeIds)) {
    // if toNodeIds is a single node not contained in an array, put it in one 
    // for convenience.
    
    toNodeIds = [toNodeIds]; 
  }
  this._nodes[newNodeId] = new Node();
  
  if (count > 0) {
    // unless this is the first node, add edges between 
    // this node and any specified.
    for (var i = toNodeIds.length - 1; i >= 0; i--) {
      this.addEdge(newNodeId, toNodeIds[i]);
    }
  }
  
  this._nodeCount++;
};

Graph.prototype.containsId = function(nodeId){
  return this._nodes.hasOwnProperty(nodeId);
};

Graph.prototype.traverseDFS = function(rootId, func, visited) {
  // DFS of graph-- would be more useful for finding data IN a node.
  visited || (visited = {});
  if (rootId === undefined) { return; }
  
  func(rootId);
  visited[rootId] = true;
  
  for(var adjacentNodeId in this._nodes[rootId].edges) {
    if(!visited[adjacentNodeId]) {
      this.traverseDFS(adjacentNodeId, func, visited);
    }
  }
};

Graph.prototype.removeNode = function(nodeId){
  for(var key in this._nodes[nodeId].edges){
    delete this._nodes[key].edges[nodeId];
  }

  delete this._nodes[nodeId];
  this._nodeCount--;


};

Graph.prototype.getEdge = function(fromNodeId, toNodeId){
  return this._nodes[fromNodeId].edges.hasOwnProperty(toNodeId);
};

Graph.prototype.addEdge = function(fromNodeId, toNodeId){
  var fromNode = this._nodes[fromNodeId];
  var toNode = this._nodes[toNodeId];

  fromNode.edges[toNodeId] = true;
  toNode.edges[fromNodeId] = true;
};

Graph.prototype.removeEdge = function(fromNodeId, toNodeId){
  var fromNode = this._nodes[fromNodeId];
  var toNode = this._nodes[toNodeId];

  delete fromNode.edges[toNodeId];
  delete toNode.edges[fromNodeId];

  if(Object.keys(fromNode.edges).length === 0) {
    this.removeNode(fromNodeId);
  }
  if(Object.keys(toNode.edges).length === 0) {
    this.removeNode(toNodeId);
  }
};

Graph.prototype.forEachNode = function(func) {
  for(var key in this._nodes) {
    if(this._nodes.hasOwnProperty(key)) {
      func(key);
    }
  }
};

var g = new Graph();
g.addNode('hi');
g.addNode('mom');
g.addNode('mom2', 'hi');
g.addNode('mom3', 'hi');
g.addNode('mom4', 'mom2');
g.addNode('mom6', ['mom3', 'mom4']);

g.traverseDFS('hi', function(nodeId){console.log('visited', nodeId);});
/*
 * Complexity: What is the time complexity of the above functions?
 */
