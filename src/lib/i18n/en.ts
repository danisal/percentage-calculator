const en = {
	app: {
		title: 'Percentage Calculator',
		description:
			'A simple, fast percentage calculator. Calculate percentage of a number, what percent one number is of another, and percentage change between two values.',
		header: 'Percentage calculator'
	},
	toggleTheme: 'Toggle theme',
	toggleLanguage: 'PT',
	tabs: {
		percentOf: '% of a number',
		whatPercent: 'What percent?',
		percentChange: '% change'
	},
	footer: {
		madeBy: 'Made by Daniel Salvado',
		inspiredBy: 'Inspired by percentagecalculator.net'
	},
	result: 'RESULT',
	errors: {
		divByZero: 'Cannot divide by zero'
	},
	percentOfNumber: {
		formula: 'result = (percentage / 100) × number',
		percentageLabel: 'Percentage',
		percentagePlaceholder: 'e.g. 20',
		ofConnector: 'of',
		numberLabel: 'Number',
		numberPlaceholder: 'e.g. 250',
		summaryOf: 'of'
	},
	percentChange: {
		formula: 'change = ((to − from) / |from|) × 100',
		fromLabel: 'From',
		fromPlaceholder: 'e.g. 100',
		toConnector: 'to',
		toLabel: 'To',
		toPlaceholder: 'e.g. 150',
		summaryFrom: 'From',
		summaryTo: 'to',
		summaryChange: 'change'
	},
	percentBetween: {
		formula: 'percentage = (part / whole) × 100',
		partLabel: 'Part',
		partPlaceholder: 'e.g. 50',
		dividedBy: 'divided by',
		wholeLabel: 'Whole',
		wholePlaceholder: 'e.g. 200',
		summaryIs: 'is',
		summaryOf: 'of'
	}
};

export default en;
export type Translations = typeof en;
