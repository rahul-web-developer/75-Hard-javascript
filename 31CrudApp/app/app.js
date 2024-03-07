{/* <div id="horizontal">
    <input type="text" name="subjects" placeholder="Subjects Name...">
    <input type="number" name="fullmarks" placeholder="fullmarks">
    <input type="number" name="obtainedMarks" placeholder="obtained Marks">

  </div> */}


//   <tr>
//   <th width="200px">Students Name</th>
//   <td>Rahul</td>
//   <th width="200px">father's Name</th>
//   <td>Mr  Ramniwas</td>
// </tr>

// <tr>
//   <th width="200px">DOB</th>
//   <td>00-00-0000</td>
//   <th width="200px">Gender</th>
//   <td>male</td>
// </tr>

// <tr>
//   <th width="200px">Class</th>
//   <td>12th</td>
//   <th width="200px">Roll No</th>
//   <td>2324</td>
// </tr>




   window.onload = function(){



    //adding subject filled

  var addsubjectBtn  = document.querySelector("#add-sub")

  addsubjectBtn.onclick = function(){

     var div = document.createElement("div");

     div.id = "horizontal";


     //subject

     var subject  = document.createElement("input");


     subject.name = "subject";

     subject.placeholder = "subject name";
     subject.type = "text";
     

    //  fullmarks

    var fullmarks  = document.createElement("input");


    fullmarks.name = "fullmarks";

    fullmarks.placeholder = "fullmarks";

    fullmarks.type = "number";
    fullmarks.value = 100;

// obtained marks

var obtainedMarks  = document.createElement("input");


obtainedMarks.name = "obtained marks";

obtainedMarks.placeholder = "obtained marks";

obtainedMarks.type = "number";
obtainedMarks.className = "obtained-marks";

 

var deletebutton = document.createElement('button');

deletebutton.innerHTML = "<i class='fa fa-trash'></i>";
deletebutton.className = "btn"
deletebutton.type = "button";

div.append(subject);
div.append(fullmarks);
div.append(obtainedMarks);
div.append(deletebutton)


// marksheet form

let dynamicarea = document.getElementById("dynamic-area");

dynamicarea.append(div);




// creating subjcets tr
var subjectTr = document.createElement("tr");

subjectTr.align = "center";

var subjcetsTd = document.createElement("td");

subjcetsTd.colSpan = 3;

var fullmarksTd = document.createElement("td");
  fullmarksTd.innerHTML = 100;


var obtainedTd = document.createElement("td");

obtainedTd.colSpan = 2;

subjectTr.append(subjcetsTd);
subjectTr.append(fullmarksTd);
subjectTr.append(obtainedTd);



var subjectbody = document.querySelector("#subjectbody");

subjectbody.append(subjectTr)



// live previw subjact and marks entry
subject.oninput = function(){

 

  subjcetsTd.innerHTML = this.value;

}


// obtainedMarks update

obtainedMarks.oninput = function(){



  obtainedTd.innerHTML = this.value;

// calculate total marks

var obm = document.getElementsByClassName("obtained-marks");
let summarks = 0;


for(let i = 0; i<obm.length; i++){


 let num = Number(obm[i].value);
 
 summarks = summarks+num;

 

}

var totalmarks = document.querySelector("#totalmarks");

totalmarks.innerHTML = summarks;

console.log(summarks)

// percantgae calculate


var numofsubjects = obm.length

let result = summarks/numofsubjects

console.log(result)

let Percentage = document.querySelector("#Percentage");

Percentage.innerHTML = result +  '%';

// grade update

let grade = document.querySelector("#grade");

let graderesult = '';
if(result<40)graderesult = "fail";
else if(result> 40 && result <59)graderesult = "D"

else if(result> 60 && result<70)graderesult = "C"

else if(result > 70 && result <80)graderesult = "B"

else if(result> 80 && result <90)graderesult = "A" 

else if(result > 90 && result <100) graderesult = "A++ superb!";

grade.innerHTML = graderesult;


console.log(grade.innerHTML)


}




// fullmarks update live previw
fullmarks.oninput = function(){

 
  fullmarksTd.innerHTML = this.value;

}






// deleting row

deletebutton.onclick = function(){

  // alert("working fine")
  div.remove()
  subjectTr.remove()
}




    
  }

 
  // image choosing upload preve student img

  var studentpicid = document.querySelector("#studentpicid");
  var schoolid = document.querySelector("#schoolid");
 
// upload school imag
  schoolid.onchange = function(){
    var file = this.files[0];

   var url =  URL.createObjectURL(file)

console.log(url)

var schoollogo = document.querySelector("#schoollogo");

schoollogo.src = url;

  }




// upload candidate image

  studentpicid.onchange = function(){

    var file = this.files[0];

   var url =  URL.createObjectURL(file)

console.log(url)

var stuimg = document.querySelector("#stuimg");

stuimg.src = url;

  }
    


  // schoolname update

let schoolname = document.querySelector("#schoolname");


schoolname.oninput = function(){

  let schooltitlename  = document.querySelector("#school-title");

  schooltitlename.innerHTML = this.value;




}

  // school tagline update

  let schooltaglines = document.querySelector("#schooltaglines");


  schooltaglines.oninput = function(){


    let tagline = document.querySelector("#tagline");




  
    tagline.innerHTML = this.value;
  
  

  }


  // candidate name update

  let Candidatenameinput = document.querySelector("#Candidatename");


  Candidatenameinput.oninput = function(){
 
    let stuname = document.querySelector("#stuname")

    stuname.innerHTML = this.value;



  }



  // father name update

  let fnameinput = document.querySelector("#fname");

  fnameinput.oninput = function(){

    let fathername = document.querySelector("#fathername")

fathername.innerHTML = this.value;




  }

 


  // dob update

 


  let dobinput = document.querySelector("#dobinput");


  dobinput.onchange = function(){


    let dobshow = document.querySelector("#dobshow");


    dobshow.innerHTML = this.value;

    


  }


  // gender update


  let genderinput = document.querySelector("#choose-gender");


  genderinput.onchange = function(){


    let genderinput = document.querySelector("#genderinput");


    genderinput.innerHTML = this.value;

    


  }

  // class update

  let classinputt = document.querySelector("#class-input");


  classinputt.oninput = function(){


    let classshow = document.querySelector("#classshow");


    classshow.innerHTML = this.value;

    


  }


  // roll number update



  let rollinput = document.querySelector("#roll-input");


  rollinput.oninput = function(){


    let rollshow = document.querySelector("#rollshow");


    rollshow.innerHTML = this.value;

    


  }



//   // genrate marksheet

//   var genrate = document.querySelector("#genrate");

// // 

//   // genrate.onclick = function(){
    
//   //   var formcardoutput = document.querySelector("#form-cardoutput");

//   //   console.log(formcardoutput)

//   //   html2canvas(formcardoutput).then(function(photo){


//   //   let strphoto = photo.toDataURL();

//   //   // var a = document.createElement("a");

//   //   // a.href = strphoto;
    
//   //   // a.download = "test.png";

//   //   // a.click(); 
  

//   //  let dock = new jsPDF('p','mm',)
  
//   //  dock.addImage(strphoto,'PNG',10,10)

//   //  dock.save('marksheet.pdf');

     
//   //   });




//   // }

//   genrate.onclick = function(){
//     schoollogo
//   }

  // form submit

  let formmarksheet = document.querySelector("#form-marksheet");

  function feturl(file){

   let url =  URL.createObjectURL(file)


   return url;

  }

     formmarksheet.onsubmit = function(e){

     e.preventDefault();



     var elements = formmarksheet.elements;

     var schoollogo = elements.schoolid.files[0];

     var schoolUrl = feturl(schoollogo)

     
     console.log(schoolUrl)

    
    


  }

   }