var Graph = function(){
  // Node format _nodes =
  // {'puppies': {edges: {kittens: true}}, 'kittens': {edges: {puppies: true}}}
  this._nodes = {};

};

var Node = function(){
  this.edges = {};
};

Graph.prototype.addNode = function(newNodeId, toNodeId){
  this._nodes[newNodeId] = new Node();

};

Graph.prototype.contains = function(node){
  return this._nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
