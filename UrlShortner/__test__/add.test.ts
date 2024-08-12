import { add } from '../add';
import { test, expect, describe } from '@jest/globals';

describe('add', () => {
  test('add 2 + 4', () => {
    expect(add(2, 4, 5)).toBe(11);
  });

  test('doubles 5 + 5', () => {
    expect(add(5, 5, 2)).toBe(12);
  });
});