/**
 * Created by YSingh on 02/06/17.
 */


  var tree = {
    "value": 1,
    "left": {
      "value": 2,
      "left": {
        "value": 4,
        "left": null,
        "right": null
      },
      "right": {
        "value": 5,
        "left": null,
        "right": null
      }
    },
    "right": {
      "value": 3,
      "left": {
        "value": 6,
        "left": null,
        "right": {
          "value": 8,
          "left": null,
          "right": null
        }
      },
      "right": {
        "value": 7,
        "left": null,
        "right": null
      }
    }
  };

  var nodeToFind = 8;

  function getPathToNode(tree, nodeToFind) {
    var arr = [];
    getPath(tree, nodeToFind, arr);
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i] + '->');
    }
  }

  function getPath(tree, nodeToFind, arr) {
    if(!tree) {
        return false;
    }
    if(tree.value === nodeToFind) {
        arr.push(tree.value);
        return true;
    }
    if(getPath(tree.left, nodeToFind, arr)) {
        arr.push('left');
        arr.push(tree.value);
        return true;
    }
    if(getPath(tree.right, nodeToFind, arr)) {
        arr.push('right');
        arr.push(tree.value);
        return true;
    }
    return false;

  }

  getPathToNode(tree, nodeToFind);