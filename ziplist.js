const listOne = ['a', 'b', 'c'];

const listTwo = [1, 2, 3];

function zipList(list1, list2) {
  const result = [];
  for (let i = 0; list1.length > i; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

console.log(zipList(listOne, listTwo));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(listOne, listTwo));
