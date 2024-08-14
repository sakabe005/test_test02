import { add } from '../add.js';
import { test, expect, describe } from '@jest/globals';

describe('add', () => {
  test('add 2 + 4 + 6', () => {
    expect(add(2, 4, 6)).toBe(12);
  });

  test('doubles 5 + 5 + 2', () => {
    expect(add(5, 5, 1)).toBe(11);
  });
});