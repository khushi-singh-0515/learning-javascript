// let colour =["red","yellow","blue","green","black"]
// for(let i=0;i< colour.length;i++){
//     let a =colour
//     console.log(a)
// }
// let colour =["red","yellow","blue","green","black"]
// for(let i=0;i< colour.length;i++){
   
//     console.log(colour[i])
// }
// let colour =["red","yellow","blue","green","black"]
// let a=0
// while(a<5){
//     console.log(colour[a])
//     a++
// }

// // we are print here reverse 50to1



// for(let x=50;x>=1;x--){
//     console.log(x)
// }

//500 table

// for(let r=1;r<=10;r++){
//     console.log(r*100)
// }
// Print the numbers from 0 to 15

// for(let y= 0;y<=15;y++){
//     console.log(y)
// }

// Print the numbers from 12 to 24

// for(let a =12;a<=24;a++){
//     console.log(a)
// }
//Print the ODD numbers from 7 to 31
// for(let a=7;a<=31;a++){
//     if (a % 2!=0)
//     console.log(a)

// }
// Print the EVEN numbers from 10 to -20
// for( let a=0;a<=100;a++){
//     console.log(a)   


// }
// let x ="2"
// for( let a=x;a <= 30;a--){
//         console.log(a) 
//         a++
//         a++

// }//99,100,101,102,103


// let name = "khushi"
// for(let x=0;x<=name.length;x++){
//     console.log(name[x])
// }

// let colour =["red","yellow","blue","black","pink"]
// for(let i=0;i<colour.length;i++){
//     let colours=colour[i]
//     for(let x =0;x<colours.length;x++){
//         console.log(colours[x])
    // }

// }
// let char=["(",")","{","}","[","]"]
// for(let i =0;i<char.length;i++){
 
//     console.log(char[i])
    
// }
// let a ="khushi"
// console.log(a[4])
// let a= "khushi"  
// let y = false
// for(let x=0;x<a.length;x++){
   
//     if (a[x]=="a"||a[x]=="i"||a[x]=="e"||a[x]=="o"||a[x]=="u"){
//       y =true
//     }
// }
// // console.log(y)
// let name ="i am khushi"

// for(let i=9;i <name.length;i--){
//     console.log(name)
// }

var isValid = function(s) {
    let round=[]
   //s = ()[]{}
    for(let r =0;r<s.length;r++){
        if(s[r]=="("||s[r]=="{"||s[r]=="["){
            round.push(s[r])
        }else{
            if(round.length==0){
                return false
            }else if(s[r]==")"&& round[round.length-1]=="("){
                round.pop()

            }else if(s[r]=="}"&& round[round.length-1]=="{"){
                round.pop()
            }else if(s[r]=="]"&& round[round.length-1]=="["){
                round.pop()
            }else{
                return false
            }

        
            
        }

    }
    if(round.length==0){
        return  
    }else{
        return false
    }



    
};
console.log(isValid("([)]"))