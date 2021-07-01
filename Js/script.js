//validating the company number 
function CompnumCheck() {
  let compname = document.getElementById("compnum").value; //get compnum value
  let errorMassageCompNum = document.getElementById("errorMassageCompNum"); //get error message div 
  let errorCompNum = document.getElementById("errorCompNum"); //get error message (text)
  let text = ""; //initiate empty string
  let pattern = /[0-9]{10}/;//used the regex to make sure that it dosent accept other pattens
  
  if (!pattern.test(compname)) {
    //if not correct
    text = "رقم السجل التجاري يجب ان يكون اكثر من ١٠ خانات";
    errorMassageCompNum.style.visibility = "unset";//unset div visibilty
    errorCompNum.innerHTML = text;//concatate the comment
  } else {
    //if correct
    errorMassageCompNum.style.visibility = "hidden"; //hide div
  }
}

//validating the radio box
function RadioBoxCheck() {
  let RadioBox = document.querySelector('input[name="storeType"]:checked'); //get if checked
  let errorMassageRadio = document.getElementById("errorMassageRadio"); //get error message div 
  let errorRadio = document.getElementById("errorRadio");//get error message (text)
  let text = ""; //initiate empty string

  if (RadioBox == null) {
    //if not correct
    text = "الرجاء اخيار نوع المتجر";
    errorMassageRadio.style.visibility = "unset"; //unset div visibilty
    errorRadio.innerHTML = text; //concatate the comment
  } else {
    //if correct
    errorMassageRadio.style.visibility = "hidden"; //hide div
  }
}


//if the text fileds became empty
function isEmpty(inputId, inputDiv, pId) {
  //inpui id, input error message wrapper, input text (p)
  let compname = document.getElementById(inputId).value; //get compnum value
  let indiv = document.getElementById(inputDiv);//get input div
  let pid = document.getElementById(pId);//get the eror message (text)
  let text = ""; //initiate empty string

  if (compname.length == 0) {
    //if not correct
    text = "يجب تعبئه هذا الصندوق";
    indiv.style.visibility = "unset"; //unset div visibilty
    pid.innerHTML = text; //concatate the comment
  } else {
    //if correct
    indiv.style.visibility = "hidden"; //hide div
  }
}

//to load and display the logo
var loadFile = function (event) {
  var image = document.getElementById("output"); //get the img
  image.src = URL.createObjectURL(event.target.files[0]);//change the src to the inputed file
};

//not used
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

function addrow() {
  document.getElementById("table").insertRow(1).innerHTML =
    '<tr><th scope="row"><input type="text"id="contactname" ></th> <td><input type="number" id="contactIdNum" ></td> <td><input type="number" id="contactIdNum1"></td> <td><input type="text" id="contactOption" ></td></tr>';
}


var contacts = []; //globla contacts array
var row = 1;
function addcontact() {
//getting the table inputs
  let contactname = document.getElementById("contactname").value;
  let contactIdNum = document.getElementById("contactIdNum").value;
  let contactIdNum1 = document.getElementById("contactIdNum1").value;
  let contactOption = document.getElementById("contactOption").value;


  if (!(contactname || contactIdNum || contactIdNum1 || contactOption)) { //if they are not empty
    alert("fill input");
    return;
  }

  //insiate entry object
  var entry = { //fill with the table inputs
    contactname: contactname,
    contactIdNum: contactIdNum,
    contactIdNum1: contactIdNum1,
    contactOption: contactOption,
  };

  localStorage.setItem("entry", JSON.stringify(entry)); //set entry to the local storage
  contacts.push(entry); //push the object to contacts array


  let table = document.getElementById("table");//get the table
  let newrow = table.insertRow(row);//insert new above 

  //insert new cells
  let cell1 = newrow.insertCell(0); 
  let cell2 = newrow.insertCell(1);
  let cell3 = newrow.insertCell(2);
  let cell4 = newrow.insertCell(3);

  //fill the cells
  cell1.innerHTML = contactname;
  cell2.innerHTML = contactIdNum;
  cell3.innerHTML = contactIdNum1;
  cell4.innerHTML = contactOption;
  
  
  row++;//incremt number of rows

  //empty the input fileds
  document.getElementById("contactname").value = "";
  document.getElementById("contactIdNum").value = "";
  document.getElementById("contactIdNum1").value = "";
  document.getElementById("contactOption").value = "";
}

// document.getElementById("table").insertRow(1).innerHTML =
//'<tr><th scope="row"><input type="text"id="contactname" ></th> <td><input type="number" id="contactIdNum" ></td> <td><input type="number" id="contactIdNum1"></td> <td><input type="text" id="contactOption" ></td></tr>';

//not used
function add1() {
  document.getElementById("table1").insertRow(1).innerHTML =
    '<tr><th scope="row"><input type="text"id="contactname" ></th> <td><input type="number" id="contactIdNum" ></td> <td><input type="number" id="contactIdNum1"></td> <td><input type="text" id="contactOption" ></td></tr>';
/* the card code
<tr>
  <th scope="row"> <input type="text"id="contactname"></th>
  <td><input type="number" id="contactIdNum"></td> 
  <td><input type="number" id="contactIdNum1"></td>
  <td><input type="text" id="contactOption"></td>
</tr>';
*/

}


var stores = [];//globla stores array
var row1 = 1;
function addstore() {

  //getting the table inputs
  let Storename = document.getElementById("Storename").value;
  let city = document.getElementById("city").value;
  let distric = document.getElementById("distric").value;
  let storeOption = document.getElementById("storeOption").value;

  if (!(Storename || city || distric || storeOption)) {//if they are not empty
    alert("fill input");
    return;
  }
//insiate entry object
  var entry = {
    Storename: Storename,
    city: city,
    distric: distric,
    storeOption: storeOption,
  };

  localStorage.setItem("entry", JSON.stringify(entry));//set entry to the local storage
  stores.push(entry);//adding it to the stores array


  let table = document.getElementById("table1");//get the table
  let newrow = table.insertRow(row1);//insert new above 

  //insert new cells
  let cell1 = newrow.insertCell(0);
  let cell2 = newrow.insertCell(1);
  let cell3 = newrow.insertCell(2);
  let cell4 = newrow.insertCell(3);

  //input the cells
  cell1.innerHTML = Storename;
  cell2.innerHTML = city;
  cell3.innerHTML = city;
  cell4.innerHTML = storeOption;

  row++;//incremt number of rows

 //empty the input fileds
  document.getElementById("Storename").value = "";
  document.getElementById("city").value = "";
  document.getElementById("distric").value = "";
  document.getElementById("storeOption").value = "";
}
//not used
function addCard() {
  document
    .getElementById("cardtemp")
    .insertAdjacentHTML(
      "afterend",
      '<div class="card card-1"> <div class="colm-1"> <div class="img-card"> <img class="company-logo" data-src="https://www.jarir.com/skin/frontend/jarir/default/images/svg/logo.svg" alt="logo" src="https://www.jarir.com/skin/frontend/jarir/default/images/svg/logo.svg" style="margin: 10%;"> </div> <div class="info company-name"> <h4 style="color:#0E8A86;">متاجر مكتبة جرير</h4> <h5>شركه جرير المحدوده</h5> </div> <div class="vl1 last-vl"></div> <div class="info more-info"> <h4 style="color:#353C43;">رقم السجل</h4> <h5>10345876732</h5> </div> <div class="vl1"></div> <div class="info more-info"> <h4>عدد المتاجر</h4> <h5>5 متاجر</h5> </div> <div class="vl1"></div> <div class="info more-info"> <h4>رصيد التخفيضات</h4> <h5>30 يوم</h5> </div> <div class="vl1 last-vl"></div> <div class="info more-info last-btn" onclick="location.href="#"" style="cursor: pointer;"> <h3>استعراض المتجر</h3> <i class="bi bi-chevron-left"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" /> </svg></i> </div> </div> </div>'
    );
    /* the card code
<div class="card card-1" >


        <div class="colm-1">

          <div class="img-card">
            <img class="company-logo" data-src="\"+link+\"
              alt="logo" src=\"+link+\"
              style="margin: 10%;">
          </div>

          <div class="info company-name">
            <h4 style="color:#0E8A86;">+name+</h4>
            <h5>+compname+</h5>
          </div>

          <div class="vl1 last-vl"></div>

          <div class="info more-info">
            <h4 style="color:#353C43;">رقم السجل</h4>
            <h5>+compnum+</h5>
          </div>

          <div class="vl1"></div>
          <div class="info more-info">
            <h4>عدد المتاجر</h4>
            <h5>5 +stores length+</h5>
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
}


let AllStores = JSON.parse(localStorage.getItem("AllStores")) || []; //glouble array for the previously stored objects in the local storage 
function myFunction() {//is used in fourm's submit  button 

  let el = document.getElementById("addstore");//get the addstore button 
  el.addEventListener("click", RadioBoxCheck);//when clicked check the RadioBoxCheck() func

  //get all input
  let RadioBox = document.querySelector('input[name="storeType"]:checked').value; 
  let compnum = document.getElementById("compnum").value;
  let compname = document.getElementById("compname").value;
  let onwename = document.getElementById("onwename").value;
  let staorename = document.getElementById("staorename").value;
  let storelink = document.getElementById("storelink").value;
  let storeacti = document.getElementById("storeacti").value;
  let image = document.getElementById("output").src;

  //create Store oblect with all of the inputs
  let Store = {
    RadioBox: RadioBox,
    compnum: compnum,
    compname: compname,
    onwename: onwename,
    staorename: staorename,
    storelink: storelink,
    storeacti: storeacti,
    image: image,
    contacts: contacts,
    stores: stores,
  };


  AllStores.push(Store);//push it to the allstors array

  localStorage.setItem("AllStores", JSON.stringify(AllStores)); //set it to the local storage

  el.addEventListener("click", addCard1);//when clicked check the addCard1() func          ** try another way to do it
}

//do it again
function addCard1() {
  let mystore = AllStores;
  for (let index = 0; index < mystore.length; index++) {
    let element = mystore[index];
    //document.getElementById("cardtemp").insertAdjacentHTML('<div class="card card-1"> <div class="colm-1"><div class="img-card"> <img class="company-logo" data-src="'+element.image+'alt="logo" src='+element.image+' style="margin: 10%;"> </div><div class="info company-name"> <h4 style="color:#0E8A86;">'+element.compname+'</h4> <h5>'+element.onwename+'</h5> </div><div class="vl1 last-vl"></div><div class="info more-info"><h4 style="color:#353C43;">رقم السجل</h4><h5>'+element.compnum+'</h5> </div><div class="vl1"></div><div class="info more-info"><h4>عدد المتاجر</h4> <h5>'+element.stores.length+'</h5></div><div class="vl1"></div><div class="info  more-info"><h4>رصيد التخفيضات</h4><h5>30 يوم</h5></div><div class="vl1 last-vl"></div><div class="info more-info last-btn" onclick="location.href="#" style="cursor: pointer;"> <h3>استعراض المتجر</h3> <i class="bi bi-chevron-left"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" /></svg></i></div></div></div>');
    $(`<div class="card card-1"> <div class="colm-1">
   <div class="img-card"> <img class="company-logo" 
   data-src="${element.image} alt="logo" src=${element.image} 
   style="margin: 10%;"> </div><div class="info company-name"> 
   <h4 style="color:#0E8A86;">${element.compname}</h4> 
   <h5>${element.onwename}</h5> </div><div class="vl1 last-vl"></div>
   <div class="info more-info"><h4 style="color:#353C43;">رقم السجل</h4><h5>${element.compnum}</h5> 
   </div><div class="vl1"></div><div class="info more-info"><h4>عدد المتاجر</h4> <h5>${element.stores.length}</h5></div>
   <div class="vl1"></div><div class="info  more-info"><h4>رصيد التخفيضات</h4>
   <h5>30 يوم</h5></div><div class="vl1 last-vl"></div><div class="info more-info last-btn" onclick="location.href="#" style="cursor: pointer;"> <h3>استعراض المتجر</h3> <i class="bi bi-chevron-left"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" /></svg></i></div></div></div>`).appendTo(
      ".cardtemp"
    );
  }
}
