export default class Currency {
 constructor(code, name) {
  this._code = code;
  this._name = name;
 }
 set code(code) {
  if (typeof code !== "string") {
   return TypeError("code must be string");
  }
  this._code = code;
 }
 get code() {
  return this._code;
 }
 set name(name) {
  if (typeof name !== "string") {
   return TypeError("name must be string");
  }
  this._name = name;
 }
 get name() {
  return this._name;
 }
 displayFullCurrency() {
  return name(code);
 }
}
const dollar = new Currency("$", "Dollars");
console.log(dollar.displayFullCurrency());
