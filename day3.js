//// Question:
/*
You are creating a function to determine if a person is eligible for a discount at a store. The criteria for eligibility are as follows:
- The person must be a student (isStudent) AND have a valid student ID (hasStudentID), OR
- The person must be a senior citizen (isSenior) OR have a membership card (hasMembershipCard).

Write a JavaScript function called isEligibleForDiscount that takes four parameters:
- isStudent (boolean): Indicates whether the person is a student.
- hasStudentID (boolean): Indicates whether the person has a valid student ID.
- isSenior (boolean): Indicates whether the person is a senior citizen.
- hasMembershipCard (boolean): Indicates whether the person has a membership card.

The function should return true if the person is eligible for a discount according to the criteria, and false otherwise.

*/
let student=true;
let hasstudentid=false;
let issenior=true;
let hasmembershipcard=false;

if(student==hasstudentid){
    console.log("yes")
}else;

console.log("not");
