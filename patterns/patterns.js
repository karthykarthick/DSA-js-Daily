// * * *
// * * *
// * * *
let str = "";
function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      str = str + "*";
    }
    str = str + "\n";
  }
  console.log(str);
}

function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);
}

pattern4(5);
