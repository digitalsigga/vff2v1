import { describe, expect, it } from '@jest/globals';
import { parseGameday, parseTeamsJson } from './parse';

describe('parse', () => {
  describe.only('parseTeamsJson', () => {
    it('should have a test', () => {
      expect(parseTeamsJson('{}')).toEqual({});
    });
  });
  
  describe('parseGameday', () => {
    it('should return null if data is invalid json', () => {
      const result = parseGameday('asdf');
      expect(result).toBe(null);
    })
  })

  describe('parseGameday', () => {
    it('should return null if data is midding date', () => {
      const result = parseGameday('{"games": []');
      expect(result).toBe(null);
    })
  })

});