function myFunction() {
  RadioBoxCheck();
}

function CompnumCheck() {
  let compname = document.getElementById("compnum").value; //get compnum value
  let text = ""; //initiate empty string

  if (compname.length < 10) {
    //if not correct
    text = "رقم السجل التجاري يجب ان يكون اكثر من ١٠ خانات";
    document.getElementById("errorMassageCompNum").style.visibility = "unset"; //unset div visibilty
    document.getElementById("errorCompNum").innerHTML = text; //concatate the comment
  } else {
    //if correct
    document.getElementById("errorMassageCompNum").style.visibility = "hidden"; //hide div
  }
}

function RadioBoxCheck() {
  let RadioBox = document.querySelector('input[name="storeType"]:checked'); //get if checked
  let text = ""; //initiate empty string

  if (RadioBox == null) {
    //if not correct
    text = "الرجاء اخيار نوع المتجر";
    document.getElementById("errorMassageRadio").style.visibility = "unset"; //unset div visibilty
    document.getElementById("errorRadio").innerHTML = text; //concatate the comment
  } else {
    //if correct
    document.getElementById("errorMassageRadio").style.visibility = "hidden"; //hide div
  }
}

function isEmpty(inputId, inputDiv, pId) {
  //inpui id, input error message wrapper, input text (p)
  let compname = document.getElementById(inputId).value; //get compnum value
  let text = ""; //initiate empty string

  if (compname.length == 0) {
    //if not correct
    text = "يجب تعبئه هذا الصندوق";
    document.getElementById(inputDiv).style.visibility = "unset"; //unset div visibilty
    document.getElementById(pId).innerHTML = text; //concatate the comment
  } else {
    //if correct
    document.getElementById(inputDiv).style.visibility = "hidden"; //hide div
  }
}

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

function addRow() {
  var table = document.getElementById("table");
  var rows = document.getElementById("table").rows.length;
  // add row
  var row = table.insertRow(rows);

  // add input in cell
  for (var i = 1; i <= 4; i++) {
    var cell1 = row.insertCell(i);
    var inputItem = document.createElement("input");
    cell1.appendChild(inputItem);
  }
  table.appendChild(tr);
}

function add() {
  document.getElementById("table").insertRow(1).innerHTML =
    '<tr><th scope="row"><input type="text"id="contactname" ></th> <td><input type="number" id="contactIdNum" ></td> <td><input type="number" id="contactIdNum1"></td> <td><input type="text" id="contactOption" ></td></tr>';
}
function add1() {
  document.getElementById("table1").insertRow(1).innerHTML =
    '<tr><th scope="row"><input type="text"id="contactname" ></th> <td><input type="number" id="contactIdNum" ></td> <td><input type="number" id="contactIdNum1"></td> <td><input type="text" id="contactOption" ></td></tr>';
}

/*
<tr>
  <th scope="row"> <input type="text"id="contactname"></th>
  <td><input type="number" id="contactIdNum" ></td> 
  <td><input type="number" id="contactIdNum1"></td>
  <td><input type="text" id="contactOption" ></td>
</tr>';
*/
