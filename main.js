const Input = document.querySelector("#input-number")

let Memory ="";
let Current = "";
let Operation = 0;     
let MAXLENGTH = 30; 

const CalcAC = () => { 
    Current = "0";
   Operation = 0;                
   Memory = "0";               
   Input.value = Current;
 }



const CalcDigit = (dig) =>{
      if ((Current == 0)){ 
            Current = dig;
        }else{ 
            Current = Current + dig;
        };
        Input.value = Current;
        console.log(Current);
};

const Operate = (op) => {
  if (op.indexOf("*") > -1) { 
    Operation = 1; 
    console.log(Operation);
};       
  if (op.indexOf("/") > -1) { 
    Operation = 2; 
    console.log(Operation);
};   
  if (op.indexOf("+") > -1) { 
    Operation = 3; 
    console.log(Operation);
};       
  if (op.indexOf("-") > -1) { 
    Operation = 4; 
};     

  Memory = Current;    
  Current="";             
  Input.value = Current;
 }

 const Equal = () =>{ 
  if (Operation == 1) { 
    Current = eval(Memory) * eval(Current); 
};
  if (Operation == 2) {
     Current = eval(Memory) / eval(Current); 
};
  if (Operation == 3) { 
    Current = eval(Memory) + eval(Current); 
};
  if (Operation == 4) { 
    Current = eval(Memory) - eval(Current); 
};
  Operation = 0;                //clear operation
  Memory    = "0";              //clear memory
  Input.value = Current;
 }


  
 