const variableName = getRandomNumber();
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
61,93,95,65,98,22,51,80,45,37,10,32,44,8,22,22,37,59,63,60,35,11,97 + 66,37,63,14,84,18,71,55,37,0,18,85,45,71,60,64,58,90,12,48,15,40,22,41,21,28,28,75,40,25,75,63,89,36,96,59,78,98,45,13,72,11,53,9,66,51,75,80,10,86,97,41,35,52,1,70,89,25,58,23,83,44,94,20,49
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const multiply = (a, b) => a * b;
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const multiply = (a, b) => a * b;
