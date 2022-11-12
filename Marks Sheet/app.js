
function markssheet(){

let obtainmarks1 =+document.querySelector("#sub1").value;
let obtainmarks2 =+document.querySelector("#sub2").value;
let obtainmarks3 =+document.querySelector("#sub3").value;
let obtainmarks4 =+document.querySelector("#sub4").value;
let obtainmarks5 =+document.querySelector("#sub5").value;

let obtain=obtainmarks1+obtainmarks2+obtainmarks3+obtainmarks4+obtainmarks5;    
document.querySelector("#obtainmarks").innerHTML=`Obtain Marks = ${obtain}`;

// the above code is for to get total Obtain Marks of all the 5 subjects
// ....................................................................................................................................

let totalmarks1 =+document.querySelector("#sub1total").value;
let totalmarks2 =+document.querySelector("#sub2total").value;
let totalmarks3 =+document.querySelector("#sub3total").value;
let totalmarks4 =+document.querySelector("#sub4total").value;
let totalmarks5 =+document.querySelector("#sub5total").value;

let total=totalmarks1+totalmarks2+totalmarks3+totalmarks4+totalmarks5;
document.querySelector("#totalmarks").innerHTML=`Total Marks = ${total}`;

// the above code is for to get total  Marks of all the 5 subjects
// ...................................................................................................................................
let percentage= (obtain*100)/total;
document.querySelector("#percent").innerHTML=`${percentage} % `;

// the above code is for to show the Percentage  of all subjects
// ...................................................................................................................................

if(percentage>=80)
{
    document.querySelector("#grade").innerHTML=`A+ `;
    document.querySelector("#remarks").innerHTML=`The quality of students's good work reflects his/her positive attitude.Well done `;
}
else if(percentage>=70 && percentage<80)
{
    document.querySelector("#grade").innerHTML=`A`;
    document.querySelector("#remarks").innerHTML=`Student shows a positive attitude in projects and activities, and takes suggestions and directions effectively.`;
}
else if(percentage>=60 && percentage<70)
{
    document.querySelector("#grade").innerHTML=`B `;
    document.querySelector("#remarks").innerHTML=`Academically, Student is making steady progress.Keep it up `;
}
else if(percentage>=50 && percentage<60)
{
    document.querySelector("#grade").innerHTML=`C `;
    document.querySelector("#remarks").innerHTML=`Student is encouraged to demonstrate more responsible attitudes and behavior in the classroom. `;
}
else if(percentage>=40 && percentage<50)
{
    document.querySelector("#grade").innerHTML=`D `;
    document.querySelector("#remarks").innerHTML=`Student is capable of doing a much better job.Need Hard work. `;
}
else
{
    document.querySelector("#grade").innerHTML=`Fail `;
    document.querySelector("#remarks").innerHTML=` The Performance of the student is not up the marks, need more and more improvement  `;
}
// the above code is for to show the Grade of all subjects
// ...................................................................................................................................

let subject1percentage= (obtainmarks1 *100) / totalmarks1;
document.querySelector("#percent1").innerHTML=`${subject1percentage} % `;
// the above code is for to show the percentage of subjects 1

let subject2percentage= (obtainmarks2 *100) / totalmarks2;
document.querySelector("#percent2").innerHTML=`${subject2percentage} % `;
// the above code is for to show the percentage of subjects 2

let subject3percentage= (obtainmarks3 *100) / totalmarks3;
document.querySelector("#percent3").innerHTML=`${subject3percentage} % `;
// the above code is for to show the percentage of subjects 3

let subject4percentage= (obtainmarks4 *100) / totalmarks4;
document.querySelector("#percent4").innerHTML=`${subject4percentage} % `;
// the above code is for to show the percentage of subjects 4

let subject5percentage= (obtainmarks5 *100) / totalmarks5;
document.querySelector("#percent5").innerHTML=`${subject5percentage} % `;
// the above code is for to show the percentage of subjects 5
// ...................................................................................................................................

if(subject1percentage>=80)
{
    document.querySelector("#grade1").innerHTML=`A+ `;

}
else if(subject1percentage>=70 && subject1percentage<80)
{
    document.querySelector("#grade1").innerHTML=`A `;

}
else if(subject1percentage>=60 && subject1percentage<70)
{
    document.querySelector("#grade1").innerHTML=`B `;

}
else if(subject1percentage>=50 && subject1percentage<60)
{
    document.querySelector("#grade1").innerHTML=`C `;

}
else if(subject1percentage>=40 && subject1percentage<50)
{
    document.querySelector("#grade1").innerHTML=`D `;

}
else{
    document.querySelector("#grade1").innerHTML=`Fail`
}
// the above code is for to show the Grade of  subjects 1
// ...................................................................................................................................

if(subject2percentage>=80)
{
    document.querySelector("#grade2").innerHTML=`A+ `;

}
else if(subject2percentage>=70 && subject2percentage<80)
{
    document.querySelector("#grade2").innerHTML=`A `;

}
else if(subject2percentage>=60 && subject2percentage<70)
{
    document.querySelector("#grade2").innerHTML=`B `;

}
else if(subject2percentage>=50 && subject2percentage<60)
{
    document.querySelector("#grade2").innerHTML=`C `;

}
else if(subject2percentage>=40 && subject2percentage<50)
{
    document.querySelector("#grade2").innerHTML=`D `;

}
else{
    document.querySelector("#grade2").innerHTML=`Fail`
}
// the above code is for to show the Grade of  subjects 2
// ...................................................................................................................................


if(subject3percentage>=80)
{
    document.querySelector("#grade3").innerHTML=`A+ `;

}
else if(subject3percentage>=70 && subject3percentage<80)
{
    document.querySelector("#grade3").innerHTML=`A `;

}
else if(subject3percentage>=60 && subject3percentage<70)
{
    document.querySelector("#grade3").innerHTML=`B `;

}
else if(subject3percentage>=50 && subject3percentage<60)
{
    document.querySelector("#grade3").innerHTML=`C `;

}
else if(subject3percentage>=40 && subject3percentage<50)
{
    document.querySelector("#grade3").innerHTML=`D `;

}
else{
    document.querySelector("#grade3").innerHTML=`Fail`
}
// the above code is for to show the Grade of  subjects 3
// ...................................................................................................................................


if(subject4percentage>=80)
{
    document.querySelector("#grade4").innerHTML=`A+ `;

}
else if(subject4percentage>=70 && subject4percentage<80)
{
    document.querySelector("#grade4").innerHTML=`A `;

}
else if(subject4percentage>=60 && subject4percentage<70)
{
    document.querySelector("#grade4").innerHTML=`B `;

}
else if(subject4percentage>=50 && subject4percentage<60)
{
    document.querySelector("#grade4").innerHTML=`C `;

}
else if(subject4percentage>=40 && subject4percentage<50)
{
    document.querySelector("#grade4").innerHTML=`D `;

}
else{
    document.querySelector("#grade4").innerHTML=`Fail`
}
// the above code is for to show the Grade of  subjects 4
// ...................................................................................................................................


if(subject5percentage>=80)
{
    document.querySelector("#grade5").innerHTML=`A+ `;

}
else if(subject5percentage>=70 && subject5percentage<80)
{
    document.querySelector("#grade5").innerHTML=`A `;

}
else if(subject5percentage>=60 && subject5percentage<70)
{
    document.querySelector("#grade5").innerHTML=`B `;

}
else if(subject5percentage>=50 && subject5percentage<60)
{
    document.querySelector("#grade5").innerHTML=`C `;

}
else if(subject5percentage>=40 && subject5percentage<50)
{
    document.querySelector("#grade5").innerHTML=`D `;

}
else{
    document.querySelector("#grade5").innerHTML=`Fail`
}
// the above code is for to show the Grade of  subjects 5
// ...................................................................................................................................

}
