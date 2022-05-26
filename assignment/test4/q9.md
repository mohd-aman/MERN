// find output:

async function f1() {
  console.log(1);
}

async function f1() {
  console.log(2);
}

console.log(3);
f1();
console.log(1);
f2();

async function f2() {
  console.log("Go!");
}


options:

A)

3
2
1
Go!

B)

3
1
2
Go!
