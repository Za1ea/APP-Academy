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
let L = [
    [0  , 0.5, 0.5, 0  , 0  , 0  , 0.5],
    [1/3, 0  , 0  , 1/3, 0  , 0  , 0  ],
    [1/3, 0  , 0  , 1/3, 0  , 0  , 0  ],
    [0  , 0.5, 0.5, 0  , 0.5, 0  , 0  ], 
    [0  , 0  , 0  , 1/3, 0  , 0.5, 0  ],
    [0  , 0  , 0  , 0  , 0.5, 0  , 0.5], 
    [1/3, 0  , 0  , 0  , 0  , 0.5, 0  ]
];
let r = Array(7).fill(1/7);
let res1 = multiply(L,r);
let epoch = 0;
// eigenvector = [3/2, 1, 1, 3/2, 1, 1, 1];

while (epoch < 50) {
  let res2 = multiply(L, res1);
  // if (res1 == res2) {
  //   changing = false;
  // }
  res1 = res2;
  console.log(res1);
  epoch++;
}
// console.log(res1);
