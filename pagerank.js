let N = 6;

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

let L = [
    [0  , 1/2, 0  , 1/3, 1/2, 1],
    [1/4, 0  , 1/2, 0  , 0  , 0],
    [0  , 1/2, 0  , 1/3, 0  , 0],
    [1/4, 0  , 1/2, 0  , 1/2, 0], 
    [1/4, 0  , 0  , 1/3, 0  , 0],
    [1/4, 0  , 0  , 0  , 0  ,0], 
];
let r = Array(N).fill(1/N);
let epoch = 0;

while (epoch < 70) {
  let res = multiply(L, r);
  r = res;
  console.log(res);
  epoch++;
}
