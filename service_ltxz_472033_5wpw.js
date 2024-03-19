function addNumbers(a, b) { return a + b; }

34 + 94
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
10,1,4,7,53,64,45,61,93,55,68,31,44,80,3,60,89,63,6,30,97,52,41,41,42,3,94,96,91,86,59,87,51,90,26,26,81,96,67 + orange
const fetchData = async url => { const response = await fetch(url); return response.json(); }
apple * apple
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
false * 38,25,40,8,36,61,93,77,65,18,7,45,5,55,84,90,2,82
const findSmallestNumber = numbers => Math.min(...numbers);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
