import { DogPipe } from './dog.pipe';

describe('DogPipe', () => {
  it('create an instance', () => {
    const pipe = new DogPipe();
    expect(pipe).toBeTruthy();
  });
});
