const calculaeBtn=document.querySelector(".claculate-btn");
let fahrenheitValue;
let kalvinValue;
let rankineValue;
// display Function
function display(value,parameter){
  const display=document.querySelector(".display");
  let result=document.createElement("h1");
  const hr=document.createElement("hr");
  result.innerText=`Your Value is convarted to ${value} ${parameter}`;
  result.appendChild(hr);
  display.appendChild(result);
}

// Button function
calculaeBtn.addEventListener("click",()=>{
  console.log("click");
  // Selected the Ealiment
  const Celsius=document.querySelector(".celsius-value").value;
  const opction=document.querySelector(".catagory");
  const opctionValue= opction.options[opction.selectedIndex].text;
  console.log(opctionValue);
  // Calculation Logic
  if(opctionValue==='Fahrenheit'){
    fahrenheitValue=(Celsius*(9/5))+32
    console.log(`${Celsius}C Value Convarted To ${fahrenheitValue}F`)
    display(fahrenheitValue,'F')
  }
  else if(opctionValue==='kalvin'){
    kalvinValue=Number(Celsius)+273.15;
    console.log(`${Celsius}C Value Convarted To ${kalvinValue}K`)
    display(kalvinValue,'K')
  }
  else if(opctionValue==='Rankine'){
    rankineValue=(Celsius*(9/5))+491.67;
    console.log(`${Celsius}C Value Convarted To ${rankineValue}R`)
    display(rankineValue,'R')
  }

  document.querySelector(".celsius-value").value='';
 

})