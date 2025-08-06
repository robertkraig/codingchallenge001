import test from 'node:test';
import assert from 'node:assert/strict';
import { sort } from './sortChallenge.js';

test('STANDARD case', () => {
  assert.equal(sort(100, 100, 100, 10), 'STANDARD');
});

test('SPECIAL: bulky', () => {
  assert.equal(sort(200, 50, 50, 10), 'SPECIAL');
});

test('SPECIAL: heavy', () => {
  assert.equal(sort(50, 50, 50, 25), 'SPECIAL');
});

test('REJECTED: both', () => {
  assert.equal(sort(200, 50, 50, 25), 'REJECTED');
});

test('missing values', () => {
  assert.equal(sort(100, 100, 100), 'REJECTED');
  assert.equal(sort(), 'REJECTED');
});
