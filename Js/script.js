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

var infos=[];


function addrow() {
  document.getElementById("table").insertRow(1).innerHTML = 
  '<tr><th scope="row"><input type="text"id="contactname" ></th> <td><input type="number" id="contactIdNum" ></td> <td><input type="number" id="contactIdNum1"></td> <td><input type="text" id="contactOption" ></td></tr>';
 
}

var row=1;
function addinput(){
  let contactname=document.getElementById("contactname").value;
  let contactIdNum=document.getElementById("contactIdNum").value;
  let contactIdNum1=document.getElementById("contactIdNum1").value;
  let contactOption=document.getElementById("contactOption").value;

  if(!(contactname||contactIdNum||contactIdNum1||contactOption)){
    alert("fill input");
    return;
  }
  
  let table =document.getElementById("table");
  let newrow=table.insertRow(row);
  let cell1=newrow.insertCell(0);
  let cell2=newrow.insertCell(1);
  let cell3=newrow.insertCell(2);
  let cell4=newrow.insertCell(3);

cell1.innerHTML=contactname;
cell2.innerHTML=contactIdNum;
cell3.innerHTML=contactIdNum1;
cell4.innerHTML=contactOption;
row++;

document.getElementById("contactname").value="";
  document.getElementById("contactIdNum").value="";
document.getElementById("contactIdNum1").value="";
  document.getElementById("contactOption").value="";


}

 // document.getElementById("table").insertRow(1).innerHTML = 
 //'<tr><th scope="row"><input type="text"id="contactname" ></th> <td><input type="number" id="contactIdNum" ></td> <td><input type="number" id="contactIdNum1"></td> <td><input type="text" id="contactOption" ></td></tr>';


function add1() {
  document.getElementById("table1").insertRow(1).innerHTML =
    '<tr><th scope="row"><input type="text"id="contactname" ></th> <td><input type="number" id="contactIdNum" ></td> <td><input type="number" id="contactIdNum1"></td> <td><input type="text" id="contactOption" ></td></tr>';
}

/* the card code
<tr>
  <th scope="row"> <input type="text"id="contactname"></th>
  <td><input type="number" id="contactIdNum"></td> 
  <td><input type="number" id="contactIdNum1"></td>
  <td><input type="text" id="contactOption"></td>
</tr>';
*/

function addCard(){
  document.getElementById("cardtemp").insertAdjacentHTML("afterend",'<div class="card card-1"> <div class="colm-1"> <div class="img-card"> <img class="company-logo" data-src="https://www.jarir.com/skin/frontend/jarir/default/images/svg/logo.svg" alt="logo" src="https://www.jarir.com/skin/frontend/jarir/default/images/svg/logo.svg" style="margin: 10%;"> </div> <div class="info company-name"> <h4 style="color:#0E8A86;">متاجر مكتبة جرير</h4> <h5>شركه جرير المحدوده</h5> </div> <div class="vl1 last-vl"></div> <div class="info more-info"> <h4 style="color:#353C43;">رقم السجل</h4> <h5>10345876732</h5> </div> <div class="vl1"></div> <div class="info more-info"> <h4>عدد المتاجر</h4> <h5>5 متاجر</h5> </div> <div class="vl1"></div> <div class="info more-info"> <h4>رصيد التخفيضات</h4> <h5>30 يوم</h5> </div> <div class="vl1 last-vl"></div> <div class="info more-info last-btn" onclick="location.href="#"" style="cursor: pointer;"> <h3>استعراض المتجر</h3> <i class="bi bi-chevron-left"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" /> </svg></i> </div> </div> </div>')
}
/* the card code
<div class="card card-1" >


        <div class="colm-1">

          <div class="img-card">
            <img class="company-logo" data-src="https://www.jarir.com/skin/frontend/jarir/default/images/svg/logo.svg"
              alt="logo" src="https://www.jarir.com/skin/frontend/jarir/default/images/svg/logo.svg"
              style="margin: 10%;">
          </div>

          <div class="info company-name">
            <h4 style="color:#0E8A86;">متاجر مكتبة جرير</h4>
            <h5>شركه جرير المحدوده</h5>
          </div>

          <div class="vl1 last-vl"></div>

          <div class="info more-info">
            <h4 style="color:#353C43;">رقم السجل</h4>
            <h5>10345876732</h5>
          </div>

          <div class="vl1"></div>
          <div class="info more-info">
            <h4>عدد المتاجر</h4>
            <h5>5 متاجر</h5>
          </div>
          <div class="vl1"></div>

          <div class="info  more-info">
            <h4>رصيد التخفيضات</h4>
            <h5>30 يوم</h5>
          </div>

          <div class="vl1 last-vl"></div>
          <div class="info more-info last-btn" onclick="location.href='#'" style="cursor: pointer;">
            <h3>استعراض المتجر</h3>
            <i class="bi bi-chevron-left"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg></i>

          </div>

        </div>

      </div>
*/