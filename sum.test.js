const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });


  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

// Simulate the fetchData function
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('peanut butter'); // Simulate fetching data asynchronously
    }, 1000); // Simulate a 1-second delay
  });
}

// Jest test case
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});
