var btns = document.getElementsByClassName("menu-list");
var listBtns = Array.from(btns);
var tabStep = Array.from(document.getElementsByClassName("step-content"));

var infoUsename = document.getElementById("usename");
var infoEmail = document.getElementById("email");
var infoPhone = document.getElementById("phone");
var invalidUsename = document.getElementById("usename-invalid");
var invalidEmail = document.getElementById("email-invalid");
var invalidPhone = document.getElementById("phone-invalid");

var listAddBtns = Array.from(document.getElementsByClassName("add-input"));

var arcadePrice = document.getElementById("arcade");
var advancedPrice = document.getElementById("advanced");
var proPrice = document.getElementById("pro");

var cardActive = document.getElementsByClassName("card-body--active");
// console.log("cardActive:", cardActive);

var selectBtn = document.getElementById("select-button");
var selectMonthly = document.getElementById("select-monthly");
var selectYearly = document.getElementById("select-yearly");
// console.log("selectYearly:", selectYearly);
// console.log("listAddBtns:", listAddBtns);

// console.log("btns:", btns);
// console.log("tabStep:", tabStep);
var betweenMonthYear;
var betweenMonthYearPrice;
var regexEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function EventOnclickStep(index) {
  var addPrice = document.querySelectorAll(".add-price");
  var selectYearlyStatus = selectYearly.className.includes(
    "select-text--active"
  );
  betweenMonthYear = selectYearlyStatus ? "year" : "month";
  betweenMonthYearPrice = selectYearlyStatus ? 0 : "";
  console.log("betweenMonthYear:", betweenMonthYear);
  var finishCardTitle = document.getElementById("finishing-card--title");
  var finishCardCost = document.getElementById("finishing-card--cost");
  // var finishBottom = document.getElementById("finishing-bottom");
  var total = document.getElementById("total-result");
  var finishingPrice = Array.from(
    document.getElementsByClassName("finishing-price")
  );
  var cardArcade = document.getElementById("card-arcade");
  var cardAdvanced = document.getElementById("card-advanced");
  var cardPro = document.getElementById("card-pro");
  console.log(cardArcade.className.includes("card-body--active"));
  console.log("arcadePrice:", arcadePrice.textContent);
  var cardText = "";
  var arcadeStatus = cardArcade.className.includes("card-body--active"),
    advancedStatus = cardAdvanced.className.includes("card-body--active"),
    proStatus = cardPro.className.includes("card-body--active");

  console.log(
    "selectYearly",
    selectYearly.className.includes("select-text--active")
  );

  for (var component of addPrice) {
    let rp = component.textContent.replace("/month", "0/year");
    let rpZero = component.textContent.replace("0/year", "/month");
    let rs = selectYearlyStatus ? rp : rpZero;
    console.log("component:", rs);
    component.innerText = rs;
  }
  for (var component of addPrice) {
    let rp = component.textContent.replace("/month", "0/year");
    let rpZero = component.textContent.replace("0/year", "/month");
    let rs = selectYearlyStatus ? rp : rpZero;
    component.innerText = rs;
    // console.log("component:", rs);
  }

  // var betweenMonthYear;
  // betweenMonthYear = selectYearly.className.includes("select-text--active")
  //   ? "year"
  //   : "month";
  // var betweenMonthYearPrice;
  // betweenMonthYearPrice = selectYearly.className.includes("select-text--active")
  //   ? 0
  //   : "";

  arcadeStatus && (cardText = cardArcade.textContent);
  advancedStatus && (cardText = cardAdvanced.textContent);
  proStatus && (cardText = cardPro.textContent);
  console.log("cardText:", cardText);
  //   const onlineService = `<div class="finishing-items"><p class="finishing-online">Online service</p><span class="finishing-price finishing-online-price">+$1/month</span></div>`;
  //   const largerStorage = `<div class="finishing-items">
  //   <p class="finishing-large">Larger storage</p>
  //   <span class="finishing-price finishing-large-price">+$2/month</span>
  // </div>`;
  //   const customizableProfile = `<div class="finishing-items">
  //   <p class="finishing-large">Customizable Profile</p>
  //   <span class="finishing-price finishing-large-price">+$3/month</span>
  // </div>`;
  // let listChooseAdd = [];
  // let joinChooseAdd = "";
  // console.log("listChooseAdd:", listChooseAdd);
  // console.log("finishArcade:", finishArcade);
  // console.log("indexstep:", index);
  // console.log("valuestep:", index.value);
  if (index.value == 3) {
    let processTotal;

    let tiger = cardText.includes("Arcade") && `Arcade (${betweenMonthYear})`;
    let tiger2 =
      cardText.includes(`$9${betweenMonthYearPrice}/${betweenMonthYear}`) &&
      `$9${betweenMonthYearPrice}/${betweenMonthYear}`;
    let lion =
      cardText.includes("Advanced") && `Advanced (${betweenMonthYear})`;
    let lion2 =
      cardText.includes(`$12${betweenMonthYearPrice}/${betweenMonthYear}`) &&
      `$12${betweenMonthYearPrice}/${betweenMonthYear}`;
    let bird = cardText.includes("Pro") && `Pro (${betweenMonthYear})`;
    let bird2 =
      cardText.includes(`$15${betweenMonthYearPrice}/${betweenMonthYear}`) &&
      `$15${betweenMonthYearPrice}/${betweenMonthYear}`;
    finishCardTitle.innerText =
      (arcadeStatus && tiger) ||
      (advancedStatus && lion) ||
      (proStatus && bird);
    finishCardCost.innerText =
      (arcadeStatus && tiger2) ||
      (advancedStatus && lion2) ||
      (proStatus && bird2);
    // console.log("click\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
    // for (var i = 0; i < arrayCheckedAdd.length; i++) {
    //   arrayCheckedAdd[i] == "0" && listChooseAdd.push(onlineService);
    //   arrayCheckedAdd[i] == "1" && listChooseAdd.push(largerStorage);
    //   arrayCheckedAdd[i] == "2" && listChooseAdd.push(customizableProfile);
    // }
    // for (var i = 0; i < listChooseAdd.length; i++) {
    //   joinChooseAdd += listChooseAdd[i];
    // }
    // finishBottom.innerHTML = joinChooseAdd;
    var d = 0;
    for (var i = 0; i < finishingPrice.length; i++) {
      let rp = finishingPrice[i].textContent.replace("/month", "0/year");
      let rpZero = finishingPrice[i].textContent.replace("0/year", "/month");
      let rs = selectYearlyStatus ? rp : rpZero;
      finishingPrice[i].innerText = rs;
      console.log("Handle text:", rs);

      let a = finishingPrice[i].textContent.replace(`/${betweenMonthYear}`, "");
      let b = a.replace("+$", "").replace("/month", "");
      let c = Number(b);
      d += c;
      // console.log("Price:", b);
      // console.log("Total:", d);
    }
    var e = finishCardCost.textContent
      .replace(`/${betweenMonthYear}`, "")
      .replace("$", "");
    console.log("e", e);
    var f = d + Number(e);
    total.innerText = `+$${f}/${betweenMonthYear}`;
  }
  if (
    infoUsename.value != "" &&
    // infoEmail.value != "" &&
    regexEmail.test(infoEmail.value) &&
    infoPhone.value != ""
  ) {
    var i = 0;
    listBtns.forEach((element) => {
      if (i != index.value) {
        tabStep[i].style.display = "none";
      }
      i++;
    });
    tabStep[index.value].style.display = "block";
    var current = document.getElementsByClassName("active");
    if (index.value != 4) {
      current[0].className = current[0].className.replace(" active", "");
      index.className += " active";
    }
  } else {
    infoUsename.classList.add("form-input--invalid");
    infoEmail.classList.add("form-input--invalid");
    infoPhone.classList.add("form-input--invalid");
    invalidUsename.style.display = "block";
    invalidEmail.style.display = "block";
    invalidPhone.style.display = "block";
  }

  infoUsename.value != "" &&
    (invalidUsename.style.display = "none") &&
    infoUsename.classList.remove("form-input--invalid");
  // infoEmail.value != "" &&
  regexEmail.test(infoEmail.value) &&
    (invalidEmail.style.display = "none") &&
    infoEmail.classList.remove("form-input--invalid");
  infoPhone.value != "" &&
    (invalidPhone.style.display = "none") &&
    infoPhone.classList.remove("form-input--invalid");
}

const HandleChangeInputValue = () => {
  infoUsename.value != ""
    ? (invalidUsename.style.display = "none") &&
      infoUsename.classList.remove("form-input--invalid")
    : (invalidUsename.style.display = "block") &&
      infoUsename.classList.add("form-input--invalid");
  // infoEmail.value != ""
  regexEmail.test(infoEmail.value)
    ? (invalidEmail.style.display = "none") &&
      infoEmail.classList.remove("form-input--invalid")
    : (invalidEmail.style.display = "block") &&
      infoEmail.classList.add("form-input--invalid");
  infoPhone.value != ""
    ? (invalidPhone.style.display = "none") &&
      infoPhone.classList.remove("form-input--invalid")
    : (invalidPhone.style.display = "block") &&
      infoPhone.classList.add("form-input--invalid");
};

function OnclickPrev(index) {
  let result;
  let process = index.value - 1;
  // console.log("value:", index.value);
  index.value == 0 && (result = EventOnclickStep(listBtns[process]));
  index.value == 1 && (result = EventOnclickStep(listBtns[process]));
  index.value == 2 && (result = EventOnclickStep(listBtns[process]));
  index.value == 3 && (result = EventOnclickStep(listBtns[process]));
  return result;
}

function OnclickNext(index) {
  let result;
  let process = index.value + 1;
  index.value == 0 && (result = EventOnclickStep(listBtns[process]));
  index.value == 1 && (result = EventOnclickStep(listBtns[process]));
  index.value == 2 && (result = EventOnclickStep(listBtns[process]));
  index.value == 3 && (result = EventOnclickStep(listBtns[process]));

  // for (var i = 0; i < listBtns.length; i++) {
  //   if (index.value == 0) {
  //     result = EventOnclickStep(listBtns[i + 1]);
  //     return result;
  //   }
  //   if (index.value == 1) {
  //     result = EventOnclickStep(listBtns[i]);
  //     return result;
  //   }
  //   if (index.value == 2) {
  //     result = EventOnclickStep(listBtns[i]);
  //     return result;
  //   }
  // }
  return result;
}
// function OnclickThankYou(index) {}

function ChooseCard(index) {
  let current = document.getElementsByClassName("card-body--active");
  current[0].className = current[0].className.replace(" card-body--active", "");
  index.className += " card-body--active";
}

function SelectMonthlyOrYearly() {
  if (selectBtn.className == "active") {
    selectBtn.classList.remove("active");
    selectYearly.classList.remove("select-text--active");
    selectMonthly.classList.add("select-text--active");
  } else {
    selectBtn.classList.add("active");
    selectYearly.classList.add("select-text--active");
    selectMonthly.classList.remove("select-text--active");
  }

  if (selectBtn.className == "active") {
    arcadePrice.innerHTML = `<p class="card-price">$90/year</p>
    <p class="months-free">2 months free</p>`;
    advancedPrice.innerHTML = `<p class="card-price">$120/year</p>
    <p class="months-free">2 months free</p>`;
    proPrice.innerHTML = `<p class="card-price">$150/year</p>
    <p class="months-free">2 months free</p>`;
  } else {
    arcadePrice.innerHTML = `<p class="card-price">$9/month</p>`;
    advancedPrice.innerHTML = `<p class="card-price">$12/month</p>`;
    proPrice.innerHTML = `<p class="card-price">$15/month</p>`;
  }
  // selectBtn.style.transform = "translateX(18px)";
}

function AddClickCheckbox(index) {
  // let addSelect = Array.from(document.getElementsByClassName("add-select"));
  // let nameSelect = document.getElementsByName("select");

  // for (var i = 0; i < addSelect.length; i++) {
  //   if (index.checked && index.value) {
  //     addSelect[i].style.border = "1px solid red";
  //   }
  // }
  let addSelect1 = document.getElementById("add-select1");
  let addSelect2 = document.getElementById("add-select2");
  let addSelect3 = document.getElementById("add-select3");

  if (index.checked) {
    if (index.value == "0") {
      addSelect1.style.border = "1px solid  #174a8b";
    }
    if (index.value == "1") {
      addSelect2.style.border = "1px solid  #174a8b";
    }
    if (index.value == "2") {
      addSelect3.style.border = "1px solid  #174a8b";
    }
  } else {
    if (index.value == "0") {
      addSelect1.style.border = "1px solid #cbccd2";
    }
    if (index.value == "1") {
      addSelect2.style.border = "1px solid #cbccd2";
    }
    if (index.value == "2") {
      addSelect3.style.border = "1px solid #cbccd2";
    }
  }
  // for (let i = 0; i < listAddBtns.length; i++) {
  // console.log("index: ", index.style);
  // if (index.className === "add-select") {
  //   index.style.border = "1px solid red;";
  // index.className += " add-select--active";
  // } else {
  // index.className = index.className.replace(" add-select--active", "");
  //   index.style.border = "none;";
  // }
  // if (!listAddBtns[i].checked) {
  //   index.className = index.className.replace(" add-select--active", "");
  //   // index.classList.remove("add-select--active");
  //   // console.log("click:");
  // }
  // console.log("classList:", index.classList);
  // console.log("i", listAddBtns[i]);
  // }
}

var addCheckbox = document.querySelectorAll(".add-input");
var finishBottom = document.getElementById("finishing-bottom");
var arrayCheckedAdd = [];
var onlineService = `<div class="finishing-items"><p class="finishing-online">Online service</p><span class="finishing-price finishing-online-price">+$1/month</span></div>`;
var largerStorage = `<div class="finishing-items">
<p class="finishing-large">Larger storage</p>
<span class="finishing-price finishing-large-price">+$2/month</span>
</div>`;
var customizableProfile = `<div class="finishing-items">
<p class="finishing-large">Customizable Profile</p>
<span class="finishing-price finishing-large-price">+$3/month</span>
</div>`;
for (var checkbox of addCheckbox) {
  checkbox.addEventListener("click", function () {
    let listChooseAdd = [];
    let joinChooseAdd = ``;
    // checkbox.textContent.replace(
    //   `/${betweenMonthYear}`,
    //   `${betweenMonthYearPrice}/${betweenMonthYear}`
    // );
    if (this.checked) {
      // console.log(this.value);
      arrayCheckedAdd.push(this.value);
    } else {
      arrayCheckedAdd = arrayCheckedAdd.filter((e) => e !== this.value);
    }
    for (var i = 0; i < arrayCheckedAdd.length; i++) {
      arrayCheckedAdd[i] == "0" && listChooseAdd.push(onlineService);
      arrayCheckedAdd[i] == "1" && listChooseAdd.push(largerStorage);
      arrayCheckedAdd[i] == "2" && listChooseAdd.push(customizableProfile);
    }
    for (var i = 0; i < listChooseAdd.length; i++) {
      joinChooseAdd += listChooseAdd[i];
    }
    finishBottom.innerHTML = joinChooseAdd;
  });
}
