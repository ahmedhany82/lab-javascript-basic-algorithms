
/* Work done by Ahmed Abdelsalam and Simone Capuano */

//Iteration 1: Names and Input

const hacker1 = "Ahmed";
console.log("The driver's name is " + hacker1);
const hacker2 = "Simone";
console.log("The navigator's name is " + hacker2);


//Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}

//Iteration 3: Loops

//3.1
let str = "";

for(let i=0; i<hacker1.length; i++) {
  str = str + hacker1[i].toUpperCase() + " ";
}

str = str.slice(0,str.length - 1)

console.log(str);

//3.2
let navigatorLength = hacker2.length - 1;
let str2 = "";

while(navigatorLength >= 0) {
  str2 = str2 + hacker2[navigatorLength];
  navigatorLength--;
}
console.log(str2);

//console.log(hacker2.split('').reverse().join(''));

//3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisi in dolor dapibus, at tempus augue convallis. Donec blandit aliquam consectetur. Etiam tincidunt, mi eu sagittis fringilla, lectus lorem tempus elit, ac facilisis felis quam vitae sapien. Vestibulum erat risus, mattis sed dapibus a, placerat vulputate nunc. Curabitur rhoncus eros a dui maximus auctor. Vestibulum rhoncus scelerisque risus, vel ultricies sapien accumsan eget. Suspendisse placerat massa dolor, nec varius nisl consequat in. Donec commodo purus et suscipit semper. In eleifend luctus vehicula. Duis lacinia consequat erat eget feugiat. Donec in magna ut ipsum gravida dignissim. Morbi vitae quam justo. Morbi viverra ac leo non egestas. Vestibulum a odio pellentesque, viverra ante ut, sollicitudin est. Integer tincidunt ornare accumsan.Donec aliquam aliquam nisi nec luctus. Donec interdum elementum diam at posuere. Sed elit mi, tristique non ligula nec, finibus gravida libero. Sed tincidunt nisl et enim malesuada blandit. Quisque auctor rutrum massa. Aliquam porttitor mauris eu finibus cursus. Pellentesque consectetur fermentum auctor. Morbi euismod, purus at lacinia auctor, risus tellus accumsan odio, quis posuere justo orci vel urna. Ut posuere rutrum auctor.Integer vehicula est nibh, et dignissim dolor blandit et. Donec consequat ipsum dignissim est posuere, ac euismod augue convallis. Vivamus lacinia elit a dolor scelerisque commodo. Vestibulum eu augue id elit egestas vestibulum eu sit amet lacus. Fusce non purus sed nunc posuere vulputate. Nam eu aliquam quam. Nulla consequat quis augue vitae viverra. Integer pulvinar semper tempus. Etiam quis vestibulum erat. Sed lectus augue, dignissim ac sapien sed, euismod imperdiet ipsum. Morbi blandit finibus ipsum. Quisque sed ipsum aliquam, condimentum lectus suscipit, accumsan magna. Fusce rutrum varius ipsum at lacinia. Vestibulum cursus imperdiet tortor, ac auctor nisi. Duis in leo et ipsum iaculis dictum dapibus non arcu."

//console.log(text.split(" ").length);

let numberOfSpaces = 0;

for(let i=0; i<text.length; i++) {
  if(text[i] === ' ') {
    numberOfSpaces += 1;
  }
}

console.log(`Number of words is ${numberOfSpaces + 1}.`);



let index = 0;
let count = 0;


while(index !== -1) {
  index = text.indexOf(" et ")
  text = text.slice(index + 4)
  count += 1;
}

console.log(`Number of instances: ${count - 1}`); 


// Bonus 2
let phraseToCheck = "No 'x' in Nixon";

let phraseLength = phraseToCheck.length - 1;
let reversedphraseToCheck = "";

while(phraseLength >= 0) {
  reversedphraseToCheck += phraseToCheck[phraseLength];
  phraseLength--;
}

str1 = phraseToCheck.toLowerCase().replace(/ |,|!|\?|\'/g, "")
str2 = reversedphraseToCheck.toLowerCase().replace(/ |,|!|\?|\'/g, "")

if(str1 === str2) {
  console.log("This is a palindrome.");
}
else
{
  console.log("This is not a palindrome");
}

