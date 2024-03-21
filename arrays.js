    //QUESTION1
let arr1 = [3,7,34,90,12];
let arr = arr1.length-1
console.log(arr);
console.log(arr1[4]);

let arr2 = [true,"green","where",12,56];
arr2.length-1;
console.log(arr);
console.log(arr2[4]);

let ar = arr2.slice(-1)
console.log(ar);

//QUESTION2
let myPets = ["Cow","Bird","Snake","Dog"];
console.log(myPets.toString());

//Question3
let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
console.log(arr3.sort());

//  Question4
let arr4 = ["apple","mango","apple","orange","mango","mango"];
let elements = new set ();
let duplicates = [];
arr4.forEach(item=> {
    if (elements.has(item)){
        duplicates.push(item);
    }else{
        elements.add(item);
    }
});
console.log(duplicates);

//Question5
let arr5 = ["the","way","x",4];
let a = "way";
let word = arr5.indexOf(a);
if(a==arr5[1]){console.log(a)}
else{console.log("the search word not foun")}

//Question6
let substring = "sevink";
let newstring = function(word){
return substring.split('').sort().join('');
};
console.log(newstring(substring));
