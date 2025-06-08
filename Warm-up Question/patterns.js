//Start Pattern

/**
 *  ****
 *  ****
 *  ****
 *  ****
 */

const n = 5;

function squarePattern() {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// squarePattern(n);

//Triangle Pattern

/**
 *  *
 *  * *
 *  * * *
 *  * * * *
 */

function trianglePatter(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// trianglePatter(n);

/**
 *  1
 *  1 2
 *  1 2 3
 *  1 2 3 4
 *  1 2 3 4 5
 */

function numTrianglePatter(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

// numTrianglePatter(n);

/**
 *  1
 *  2 2
 *  3 3 3
 *  4 4 4 4
 *  5 5 5 5 5
 */

function numberPatter01(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}

// numberPatter01(n);

/**
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 */

function revNumberPatter02(n) {
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += j + 1 + " ";
    }
    console.log(row);
  }
}

revNumberPatter02(n);
