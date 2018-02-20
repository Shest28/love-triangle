/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let arr = [];
  let lvrs = [];
  let count = 0;
  let n = preferences.length;
  for (let i = 0 ; i < n; i++) {
	  lvrs[0] =  preferences[i];
	  lvrs[1] =  preferences[ preferences[i] - 1 ];
	  lvrs[2] = preferences[ preferences[ preferences[i] - 1 ] - 1 ]
	  if (( lvrs[2]  == (i  + 1) ) && ( lvrs[2] != lvrs[0] )) {
		  let filterLvrs = lvrs.filter( function (item) {return arr.indexOf(item) == -1}) 
		  if (filterLvrs.length > 0) {
			  count++;
			  filterLvrs.forEach(item => arr.push(item));
		  }
	  }
  }
  return count;
};
