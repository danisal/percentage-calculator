import { describe, it, expect } from 'vitest';
import {
	percentageOfNumber,
	percentageBetween,
	percentageChange,
	formatResult,
	parseInputString
} from './percentageCalculations.js';

describe('percentageOfNumber', () => {
	it('calculates correctly', () => {
		expect(percentageOfNumber(25, 200)).toBe(50);
		expect(percentageOfNumber(10, 100)).toBe(10);
		expect(percentageOfNumber(50, 80)).toBe(40);
	});

	it('returns null when either input is null', () => {
		expect(percentageOfNumber(null, 200)).toBeNull();
		expect(percentageOfNumber(25, null)).toBeNull();
		expect(percentageOfNumber(null, null)).toBeNull();
	});

	it('handles 0 percentage', () => {
		expect(percentageOfNumber(0, 200)).toBe(0);
	});

	it('handles negative numbers', () => {
		expect(percentageOfNumber(50, -100)).toBe(-50);
	});
});

describe('percentageBetween', () => {
	it('calculates correctly', () => {
		expect(percentageBetween(50, 200)).toBe(25);
		expect(percentageBetween(1, 4)).toBe(25);
		expect(percentageBetween(75, 300)).toBe(25);
	});

	it('returns null when either input is null', () => {
		expect(percentageBetween(null, 200)).toBeNull();
		expect(percentageBetween(50, null)).toBeNull();
		expect(percentageBetween(null, null)).toBeNull();
	});

	it('returns division_by_zero when whole is 0', () => {
		expect(percentageBetween(50, 0)).toBe('division_by_zero');
	});

	it('handles negative part', () => {
		expect(percentageBetween(-50, 200)).toBe(-25);
	});
});

describe('percentageChange', () => {
	it('calculates increase correctly', () => {
		expect(percentageChange(100, 150)).toBe(50);
		expect(percentageChange(200, 300)).toBe(50);
	});

	it('calculates decrease correctly', () => {
		expect(percentageChange(150, 100)).toBeCloseTo(-33.33, 1);
		expect(percentageChange(200, 100)).toBe(-50);
	});

	it('returns null when either input is null', () => {
		expect(percentageChange(null, 150)).toBeNull();
		expect(percentageChange(100, null)).toBeNull();
		expect(percentageChange(null, null)).toBeNull();
	});

	it('returns division_by_zero when from is 0', () => {
		expect(percentageChange(0, 100)).toBe('division_by_zero');
	});

	it('returns 0 for same values', () => {
		expect(percentageChange(100, 100)).toBe(0);
	});
});

describe('formatResult', () => {
	it('removes trailing zeros', () => {
		expect(formatResult(25.0)).toBe('25');
		expect(formatResult(33.33333)).toBe('33.33');
		expect(formatResult(50)).toBe('50');
	});

	it('keeps relevant decimals', () => {
		expect(formatResult(33.33)).toBe('33.33');
	});
});

describe('parseInputString', () => {
	it('parses valid numbers', () => {
		expect(parseInputString('25')).toBe(25);
		expect(parseInputString('3.14')).toBe(3.14);
		expect(parseInputString('-50')).toBe(-50);
	});

	it('returns null for empty/invalid input', () => {
		expect(parseInputString('')).toBeNull();
		expect(parseInputString('  ')).toBeNull();
		expect(parseInputString('-')).toBeNull();
		expect(parseInputString('.')).toBeNull();
		expect(parseInputString('abc')).toBeNull();
	});
});
