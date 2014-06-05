var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);

    if(!list.head) { // we only get here the first time
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;


  };

  list.removeHead = function(){
    var nodeValue;

    if(list.head) { // if the list isnt empty
      nodeValue = list.head.value; // store the old head value
      list.head = list.head.next; //
    }

    return nodeValue;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode){
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
