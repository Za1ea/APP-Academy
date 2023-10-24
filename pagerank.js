let N = 7;

function multiply(mat1, mat2) { 
  let i, j, k; 
  let res = Array(N).fill(0);
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {  
      res[i] += mat1[i][j] * mat2[j]; 
    } 
  }
  return res;
}

let changing = true;
let L = [[0, 1/2, 1/2, 0, 0, 0, 1/2],[1/3,0,0,1/3,0,0,0], [1/3,0,0,1/3,0,0,0],[0,1/2,1/2,0,1/2,0,0], [0,0,0,1/3,0,1/2,0],[0,0,0,0,1/2,0,1/2], [1/3,0,0,0,0,1/2,0]];
let r = Array(7).fill(1/7);
let res1 = multiply(L,r);
let res2;

// while (changing == true) {
  // res2 = multiply(res1, r);
  // if (res1 == res2) {
  //   changing = false;
  // }
  // res1 = res2;
// }
alert(L);
