import user from '../js/index.js';

describe('checkType', () => {
let Jermey;
  beforeEach(() => {
    Jermey = new user(42, "male");
  });
  test('Should be able to use checktype to return the users age and sex', () => {
    expect(Jermey.checktype(Jermey.user)[0]).toEqual(42);
    expect(Jermey.checktype(Jermey.user)[1]).toEqual("male");
  });
});
