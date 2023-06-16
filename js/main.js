const $button = $('.middle-number');

$button.on('click', () => {

  // 1
  let num1 = (prompt("შეიყვანეთ რიცხვი"));

  if (num1 < 50) {
    console.log("ნაკლებია 50-ზე");
  } else if (num1 > 20) {
    console.log("მეტია 20-ზე");
  } else {
    console.log("error");
  }



// 2
  let num2 = (prompt("შეიყვანეთ სახელი (ლიზა)"));

  (num2 == "ლიზა") ?
  console.log("true") : console.log("false");



// 3
  let num3 = (prompt("შეიყვანეთ სახელი (მარი)"));
    
  let variable2 = "მარი";
    
  switch (num3) {
    case "მარი":
      console.log("true");
      break;
      
    default:
        
      console.log("false");
      break;
  }
});