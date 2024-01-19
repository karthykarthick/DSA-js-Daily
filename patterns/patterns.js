// * * *
// * * *
// * * *

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

function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    str += "\n";
  }
  console.log(str);
}

function pattern5(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

function pattern6(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);
}

pattern7(5);
