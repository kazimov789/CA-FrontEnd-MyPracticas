let balance = 1050;
document.querySelector("#amount-display").innerHTML = balance;

let password = prompt("Kartin Kodunu Daxil Edin");

while(password!=="1234")
{
  alert("Kodu Yanlis Daxil Etdiniz");
  password=prompt("Kartin Kodunu Yeniden Daxil  Edin");
}

  
  const include = document.querySelector("#include");
  const extract = document.querySelector("#extract");
  const exit = document.querySelector("#exit");
  
  
  include.addEventListener("click",forInclude);
  extract.addEventListener("click",forExtract)
  exit.addEventListener("click",function() {
    location.reload();
  });
  
  function forInclude(){
    let price = document.querySelector("#input").value;
    if(price>=1)
    {
      balance=balance+Number(price);
    document.querySelector("#amount-display").innerHTML = balance;
    }
    else {
      document.querySelector("#amount-display").innerHTML = balance;
      alert("Karta Daxil Edilen Mebleg minimum 1Azn olmalidir");
    }
  }
  
  function forExtract(){
    let price = document.querySelector("#input").value;
    if(price>=1)
    {
    if(balance-Number(price)>=0)
    {
      balance=balance-Number(price);
    document.querySelector("#amount-display").innerHTML = balance;
    }
    else {
      document.querySelector("#amount-display").innerHTML = balance;
    alert("Kartinizda Istediyiniz Mebleg Yoxdur");
    }
  }
  else{
    alert("Karta Daxil Edilen Mebleg minimum 1Azn olmalidir");
  }
  }


