/*
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

let fullName: string = "mubarak alsumairi"
let yearOfBirth: number = 1992
let hobby: string = "play football"
let funFact: string = "lab"
let image: string = "https://www.bing.com/images/search?view=detailV2&ccid=CSUdqwWS&id=10456E76E1051E167E676121B0D414A23727522E&thid=OIP.CSUdqwWSMRk8725g4Jp2ywHaEK&mediaurl=https%3a%2f%2fe0.365dm.com%2f22%2f11%2f2048x1152%2fskysports-cristiano-ronaldo_5966203.jpg%3f20221221162947&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.09251dab059231193cef6e60e09a76cb%3frik%3dLlInN6IU1LAhYQ%26pid%3dImgRaw%26r%3d0&exph=1152&expw=2048&q=ronaldo&FORM=IRPRST&ck=01C11DBA46BFDD22029CEBDE691FB0AC&selectedIndex=3&itb=0&ajaxhist=0&ajaxserp=0"

/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it: "My name is {fullName}""
 * 2. ageString           -> assign it: "I am {YOUR_AGE}"", and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it: "My hobby is {YOUR_HOBBY}""
 */

let fullNameString: string = `My name is ${fullName}`;
let ageString: string = `I am ${2025 - yearOfBirth }`;
let hobbyString: string = `My hobby is ${hobby}`;

/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let hackerScore = 0;

function incrementBy1() {
  // crement hackerScore by 1 👇🏻
  hackerScore = hackerScore + 1 ;
}
function decrementBy1() {
  // decrement hackerScore by 1 👇🏻
  hackerScore = hackerScore - 1 ;
}

function incrementBy2() {
  // Increment hackerScore by 2 👇🏻
  hackerScore = hackerScore + 2 ;
}
function decrementBy2() {
  // decrement hackerScore by 2 👇🏻
  hackerScore = hackerScore - 2 ;
}

// Ignore this part (:
export {
  fullName,
  yearOfBirth,
  hobby,
  funFact,
  image,
  fullNameString,
  ageString,
  hobbyString,
  incrementBy1,
  incrementBy2,
  decrementBy1,
  decrementBy2,
};
