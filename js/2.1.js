function testNum(a) {
    let result;
    if (a > 18) {
      result = 'you are an adult';
    } else {
      result = 'you are not yet an adult';
    }
    return result;
  }

  console.log(testNum(24));