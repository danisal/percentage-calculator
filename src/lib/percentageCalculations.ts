type CalcResult = number | null | 'division_by_zero';

function parseInput(value: number | null): number | null {
	return value;
}

export function percentageOfNumber(
	percentage: number | null,
	number: number | null
): number | null {
	if (parseInput(percentage) === null || parseInput(number) === null) {
		return null;
	}

	return (percentage! / 100) * number!;
}

export function percentageBetween(part: number | null, whole: number | null): CalcResult {
	if (part === null || whole === null) {
		return null;
	}

	if (whole === 0) {
		return 'division_by_zero';
	}

	return (part / whole) * 100;
}

export function percentageChange(from: number | null, to: number | null): CalcResult {
	if (from === null || to === null) {
		return null;
	}

	if (from === 0) {
		return 'division_by_zero';
	}

	return ((to - from) / from) * 100;
}

export function formatResult(value: number): string {
	return parseFloat(value.toFixed(2)).toString();
}

export function parseInputString(value: string): number | null {
	const trimmed = value.trim();

	if (trimmed === '' || trimmed === '-' || trimmed === '.') {
		return null;
	}

	const parsed = parseFloat(trimmed);
	return isNaN(parsed) ? null : parsed;
}
