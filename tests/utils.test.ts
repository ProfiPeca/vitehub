import { describe, it, expect } from 'vitest';
import { AgeFromDateString } from 'age-calculator';

describe('calcAge', () => {
    it('should correctly calculate age for a given birth year', () => {
        const currentYear = new Date().getFullYear();
        const birthYear = 2000;
        const expectedAge = currentYear - birthYear;
        expect(new AgeFromDateString(birthYear + '-1-1').age).toBe(expectedAge);
    });
});