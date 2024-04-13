const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

apple - true

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
banana

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const filterEvenNumbers = numbers => numbers.filter(isEven);

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

kiwi

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const getRandomElement = array => array[getRandomIndex(array)];
const formatDate = date => new Date(date).toLocaleDateString();
true + orange
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
kiwi + 39,33,16,10,24,73,39,20,43,10,20,79,55,67,55,15,13,3,6,88,74,98,58,20,8,90,78,38,57,19,85,51,75,28,43,6,8,97,37,22,40,65,53,93,45,90,25,17,35,64,84,96,3,86,76,42,61,9,36,25,83,24,7,42,24,54,88,2,5,24,81,30,75
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
let result = performOperation(getRandomNumber(), getRandomNumber());
65,16,69,29,2,10,34,78,48,87,98,26,89,54,34,22,56,33,54,31,12,22,7,38,81,39,84,88,25,12,19,3,66,74,95,34,74,45,68,17,13,94,33,0,61,48,30,89,46,20,7,82,94,63,97,22,1,16,20,28,75,62,88,56,60,21,18,42,73,91,20,62,47 * 20
const greet = name => `Hello, ${name}!`;

let array = getRandomArray(); array.forEach(item => console.log(item));
86,39,98,64,55,18,27,3,36,98,53,1,17,47,47,93,90,78,13,21,8,14,78,98,4,7,51,90,14,71,42,74,54,94,92,4,36,78,74,32,76,20,99,79,53,39,68,43,37,3 - 61
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
grape


const variableName = getRandomNumber();
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
apple + banana
const reverseString = str => str.split("").reverse().join("");
const findLargestNumber = numbers => Math.max(...numbers);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const reverseWords = str => str.split(" ").reverse().join(" ");
const randomNumber = getRandomNumber();
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

 - orange
const reverseWords = str => str.split(" ").reverse().join(" ");

console.log(getRandomString());

const getRandomIndex = array => Math.floor(Math.random() * array.length);
orange


const reverseString = str => str.split("").reverse().join("");
23 - 67,36,74,88,50,62,36,24,87,52,65,77,99,67,87,0,57,90,7,84,60,70,51,97,33,5,88,18,16,58,16,23,20,99,28,66,68,41,27,63,33,4,79,29,1,60,55,44,37,35,7,75,59,70,94,28,22,65,73,60,12,72,85,24,9,55,70,73,56,64,4,86,59,98,44,10,25,70,21,16,78,92,3,76,74,49,24,15,38,23,30,23,16,11,21,91
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

apple

const getRandomSubset = (array, size) => array.slice(0, size);
kiwi + 78
const findSmallestNumber = numbers => Math.min(...numbers);
