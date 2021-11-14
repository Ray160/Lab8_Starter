// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Phone Numbers
test('Phone test true 1', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('Phone test true 2', () => {
    expect(functions.isPhoneNumber('(098)-765-4321')).toBe(true);
});

test('Phone test false 1', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('Phone test false 2', () => {
    expect(functions.isPhoneNumber('0987654321')).toBe(false);
});

// Emails

test('Email test true 1', () => {
    expect(functions.isEmail('abc@def.com')).toBe(true);
});

test('Email test true 2', () => {
    expect(functions.isEmail('test@test.com')).toBe(true);
});

test('Email test false 1', () => {
    expect(functions.isEmail('abc')).toBe(false);
});

test('Email test false 2', () => {
    expect(functions.isEmail('test')).toBe(false);
});

// Strong Password

test('Strong password test true 1', () => {
    expect(functions.isStrongPassword('abcdefg')).toBe(true);
});

test('Strong password test true 2', () => {
    expect(functions.isStrongPassword('nuggets')).toBe(true);
});

test('Strong password test false 1', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});

test('Strong password test false 2', () => {
    expect(functions.isStrongPassword('asdasdasdasdasdasdasd')).toBe(false);
});

// Date

test('Date test true 1', () => {
    expect(functions.isDate('10/01/1010')).toBe(true);
});

test('Date test true 2', () => {
    expect(functions.isDate('2/22/2222')).toBe(true);
});

test('Date test false 1', () => {
    expect(functions.isDate('10/011/1010')).toBe(false);
});

test('Date test false 2', () => {
    expect(functions.isDate('2/222/2222')).toBe(false);
});

// Hex Color

test('Hex test true 1', () => {
    expect(functions.isHexColor('#ABC')).toBe(true);
});

test('Hex test true 2', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('Hex test false 1', () => {
    expect(functions.isHexColor('ABC**')).toBe(false);
});

test('Hex test false 2', () => {
    expect(functions.isHexColor('FFF\\')).toBe(false);
});