window.onload = function () {
  let addbtn = document.getElementById("add-btn");

  addbtn.onclick = function () {
    Swal.fire({
      title: "New Student",
      ShowConfirmButton: false,
      html: `
      <form id="student-form">

      <div id="form-group">

      <label> Student's Name</label>

<input id="student-name" name="student-name" type="text" placeholder="Student Name "required="true" /> 


      </div>


      
      <div id="form-group">

      <label> Class</label>

<input id="class" name="class" type="number" placeholder="4 " required="true" /> 


      </div>

      <div id="form-group">

      <label> Roll No</label>

<input id="roll" name="roll" type="number" placeholder="12 " required="true" /> 


      </div>

      <button id="submit">Submit</button>


      </form>

      `,
    });

    // Add students

    var addStudentsForm = document.getElementById("student-form");

    addStudentsForm.onsubmit = function (e) {
      e.preventDefault();

      var name = document.getElementById("student-name");

      var classstu = document.getElementById("class");

      var roll = document.getElementById("roll");

      var student = {
        name: name.value,
        class: classstu.value,
        roll: roll.value,
      };

      //  console.log(student)

      //  localStorage.setItem("studentData",student)

      var data = localStorage.getItem("student");

      if (data == null) {
        // first time

        localStorage.setItem("student", JSON.stringify([student]));

        Swal.fire({
          icon: "success",
          title: "New Data Added",
        }).then(function () {
          window.location = location.href;
        });
      } else {
        // secod time already data

        var olddata = JSON.parse(data);

        olddata.push(student);

        let aldata = JSON.stringify(olddata);

        localStorage.setItem("student", aldata);

        Swal.fire({
          icon: "success",
          title: "New Data Added",
        }).then(function () {
          window.location = location.href;
        });
      }

      console.log(JSON.parse(data));
    };
  };

  // deteletedata
  function deletedata() {
    alert();
  }

  // show students

  var student = localStorage.getItem("student");

  if (student !== null) {
    var original = JSON.parse(student);

    for (let i = 0; i < original.length; i++) {
      var tr = document.createElement("tr");
      var tdsrno = document.createElement("td");

      tdsrno.innerHTML += i + 1;

      // tdname
      var tdname = document.createElement("td");
      tdname.innerHTML += original[i].name;

      //tdclass

      var classtd = document.createElement("td");

      classtd.innerHTML += original[i].class;

      // tdroll
      var tdroll = document.createElement("td");

      tdroll.innerHTML += original[i].roll;

      // setup acction here

      var actionTd = document.createElement("td");
      var actionDiv = document.createElement("div");

      var editbtn = document.createElement("button");

      editbtn.id = "edit-btn";

      editbtn.innerHTML = `<i class="ri-pencil-line"></i>`;
      editbtn.value = i;
      editbtn.setAttribute("row-index", i);

      var deletebtn = document.createElement("button");

      deletebtn.id = "delete-btn";
      deletebtn.value = i;

      deletebtn.innerHTML = `<i class="ri-delete-bin-7-line"></i>`;

      actionDiv.append(editbtn);
      actionDiv.append(deletebtn);

      actionTd.append(actionDiv);

      // settd inside tr

      tr.append(tdsrno);
      tr.append(tdname);
      tr.append(classtd);
      tr.append(tdroll);
      tr.append(actionTd);

      // set tr inside table

      var StudentTable = document.getElementById("Student-table");

      StudentTable.append(tr);

      // converting localstorage string in array of objects

      let tmp = JSON.parse(student);

      // deletestudent

      deletebtn.onclick = function () {
        var index = this.value;

        tmp.splice(index, 1);

        // alert(this.value)

        console.log(tmp);

        localStorage.setItem("student", JSON.stringify(tmp));

        window.location = location.href;
      };

      editbtn.onclick = function () {
        var ind = this.getAttribute("row-index");

        var editablestudent = tmp[ind];

        console.log(editablestudent);

        console.log(tmp[ind]);

        Swal.fire({
          title: "New Student",
          ShowConfirmButton: false,
          html: `
  <form id="studentEdit-form">

  <div id="form-group">

  <label> Edit Student's Name</label>

<input id="student-name" name="student-name" type="text" placeholder="Student Name "required="true" value="${editablestudent.name}" /> 


  </div>


  
  <div id="form-group">

  <label> Class</label>

<input id="class" name="class" type="number" placeholder="4 " required="true"value="${editablestudent.class}" /> 


  </div>

  <div id="form-group">

  <label> Roll No</label>

<input id="roll" name="roll" type="number" placeholder="12 " required="true" value="${editablestudent.roll}" /> 


  </div>

  <button id="savebtn">Save</button>


  </form>

  `,
        });

        // Save student after editing

        var studentEditform = document.getElementById("studentEdit-form");

        studentEditform.onsubmit = function (e) {
          e.preventDefault();

          var stuname = document.getElementById("student-name").value;

          var stuclass = document.getElementById("class").value;

          var roll = document.getElementById("roll").value;

          console.log(stuname, stuclass, roll);

          var stuobject = {
            name: stuname,
            class: stuclass,
            roll: roll,
          };

          tmp[ind] = stuobject;

          console.log(tmp);

          localStorage.setItem("student", JSON.stringify(tmp));

          Swal.fire({
            icon: "success",
            title: "student Record Saved",
          }).then(function () {
            window.location = location.href;
          });
        };
      };
    }
  }

  // print btn

  var printbtn = document.getElementById("print-btn");

  printbtn.onclick = function () {
    window.print();
  };
};
