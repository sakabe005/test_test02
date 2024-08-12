import { add } from '../add';
import { test, expect, describe } from '@jest/globals';

describe('add', () => {
  test('add 2 + 4', () => {
    expect(add(2, 4)).toBe(6);
  });

  test('doubles 5 + 5', () => {
    expect(add(5, 5)).toBe(10);
  });
});