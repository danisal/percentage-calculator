import type { Translations } from './en.js';

const pt: Translations = {
	app: {
		title: 'Calculadora de Percentagem',
		description:
			'Uma calculadora de percentagem simples e rápida. Calcula a percentagem de um número, que percentagem um número é de outro, e a variação percentual entre dois valores.',
		header: 'Calculadora de percentagem'
	},
	toggleTheme: 'Alternar tema',
	toggleLanguage: 'EN',
	tabs: {
		percentOf: '% de um número',
		whatPercent: 'Que percentagem?',
		percentChange: '% variação'
	},
	footer: {
		madeBy: 'Feito por Daniel Salvado',
		inspiredBy: 'Inspirado em percentagecalculator.net'
	},
	result: 'RESULTADO',
	errors: {
		divByZero: 'Não é possível dividir por zero'
	},
	percentOfNumber: {
		formula: 'resultado = (percentagem / 100) × número',
		percentageLabel: 'Percentagem',
		percentagePlaceholder: 'ex: 20',
		ofConnector: 'de',
		numberLabel: 'Número',
		numberPlaceholder: 'ex: 250',
		summaryOf: 'de'
	},
	percentChange: {
		formula: 'variação = ((para − de) / |de|) × 100',
		fromLabel: 'De',
		fromPlaceholder: 'ex: 100',
		toConnector: 'para',
		toLabel: 'Para',
		toPlaceholder: 'ex: 150',
		summaryFrom: 'De',
		summaryTo: 'para',
		summaryChange: 'variação'
	},
	percentBetween: {
		formula: 'percentagem = (parte / total) × 100',
		partLabel: 'Parte',
		partPlaceholder: 'ex: 50',
		dividedBy: 'dividido por',
		wholeLabel: 'Total',
		wholePlaceholder: 'ex: 200',
		summaryIs: 'é',
		summaryOf: 'de'
	}
};

export default pt;
