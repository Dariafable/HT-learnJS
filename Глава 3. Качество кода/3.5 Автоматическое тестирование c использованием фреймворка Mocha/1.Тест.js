it('Возводит x в степень n', function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

describe('Возводит x в степень n', () => {
  it('Возводит 5 в степень 1', function () {
    assert.equal(pow(5, 1), 5);
  });

  it('Возводит 5 в степень 2', function () {
    assert.equal(pow(5, 2), 25);
  });

  it('Возводит 5 в степень 3', function () {
    assert.equal(pow(5, 3), 125);
  });
});
