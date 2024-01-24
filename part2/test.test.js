const practice = require('./practice');

describe('HowToo javascript test', function () {
  
  it('runs dummy test', function (done) {
    expect(practice.dummy()).toBe(1);
    
    done();
  });

  it('runs reverse test', function (done) {
    const {reverse} = practice;
    const result1 = reverse([1,2,3]);
    const result2 = reverse([3,2,1]);

    expect(result1).toEqual([3,2,1]);
    expect(result2).toEqual([1,2,3]);

    done();
  });

  it('run stringReverse test', function (done) {
    const {stringReverse} = practice;
    const result1 = stringReverse('hello');
    const result2 = stringReverse('world');

    expect(result1).toBe('olleh');
    expect(result2).toBe('dlrow');

    done();
  });

  it('runs fibonacci test', function (done) {
    const {fibonacci} = practice;
    const result1 = fibonacci(3);
    const result2 = fibonacci(6);

    expect(result1).toEqual([1,1,2]);
    expect(result2).toEqual([1,1,2,3,5,8]);
    done();
  });

  it('runs towSum test', function (done) {
    const {twoSum} = practice;
    const result1 = twoSum([1,2,3,4,5], 5);
    const result2 = twoSum([5,6,7,8,3,9,4], 12);

    const test1 = result1.map(item => {
      item.sort();
      return item.toString();
    }).sort();

    const test2 = result2.map(item => {
      item.sort();
      return item.toString();
    }).sort();

    expect(test1).toEqual(['1,4','2,3']);
    expect(test2).toEqual(['3,9', '4,8', '5,7']);

    done();
  });

  it('runs range test', function (done) {
    const {range} = practice;
    const result1 = range(0,5);
    const result2 = range(99,101);

    expect(result1).toEqual([0,1,2,3,4]);
    expect(result2).toEqual([99,100]);

    done();
  });

  it('runs flatten test', function (done) {
    const {flatten} = practice;
    const result1 = flatten([1,2,3,4,5]);
    const result2 = flatten([1,[2,[3,[4,[5]]]]]);

    expect(result1).toEqual([1,2,3,4,5]);
    expect(result2).toEqual([1,2,3,4,5]);

    done();
  });
});