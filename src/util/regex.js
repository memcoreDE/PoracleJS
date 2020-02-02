module.exports = (translator) => ({
	nameRe: new RegExp(`${translator.translate('name')}\\S+`, 'gi'),
	formRe: new RegExp(`${translator.translate('form')}\\S+`, 'gi'),
	genRe: new RegExp(`${translator.translate('gen')}[1-7]+`, 'gi'),
	maxlevelRe: new RegExp(`${translator.translate('maxlevel')}\\d{1,2}`, 'gi'),
	templateRe: new RegExp(`${translator.translate('template')}\\d{1,4}`, 'gi'),
	maxcpRe: new RegExp(`${translator.translate('maxcp')}\\d{1,5}`, 'gi'),
	maxivRe: new RegExp(`${translator.translate('maxiv')}\\d{1,3}`, 'gi'),
	maxweightRe: new RegExp(`${translator.translate('maxweight')}\\d{1,6}`, 'gi'),
	maxatkRe: new RegExp(`${translator.translate('maxatk')}\\d{1,2}`, 'gi'),
	maxdefRe: new RegExp(`${translator.translate('maxdef')}\\d{1,2}`, 'gi'),
	maxstaRe: new RegExp(`${translator.translate('maxsta')}\\d{1,2}`, 'gi'),
	cpRe: new RegExp(`${translator.translate('cp')}\\d{1,5}`, 'gi'),
	levelRe: new RegExp(`${translator.translate('level')}\\d{1,2}`, 'gi'),
	ivRe: new RegExp(`${translator.translate('iv')}\\d{1,3}`, 'gi'),
	atkRe: new RegExp(`${translator.translate('atk')}\\d{1,2}`, 'gi'),
	defRe: new RegExp(`${translator.translate('def')}\\d{1,2}`, 'gi'),
	staRe: new RegExp(`${translator.translate('sta')}\\d{1,2}`, 'gi'),
	weightRe: new RegExp(`${translator.translate('weight')}\\d{1,8}`, 'gi'),
	dRe: new RegExp(`(${translator.translate('d')})[\d.]{1,}`, 'gi'),
	stardustRe: new RegExp(`${translator.translate('stardust')}\\d{1,8}`, 'gi'),

})