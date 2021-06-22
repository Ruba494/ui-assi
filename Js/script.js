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

function isEmpty(inputId,inputDiv,pId) {//inpui id, input error message wrapper, input text (p)
  let compname = document.getElementById(inputId).value; //get compnum value
  let text = ""; //initiate empty string

  if (compname.length==0) {
    //if not correct
    text = "يجب تعبئه هذا الصندوق";
    document.getElementById(inputDiv).style.visibility = "unset"; //unset div visibilty
    document.getElementById(pId).innerHTML = text; //concatate the comment
  } else {
    //if correct
    document.getElementById(inputDiv).style.visibility = "hidden"; //hide div
  }
}

