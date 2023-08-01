var cuentas = [
    { nombre: "Moises", saldo: 800, password: "1234" },
    { nombre: "Tatiana", saldo: 590, password: "5678" },
    { nombre: "Samantha", saldo: 67, password: "4321" }
  ];
  
  function login() {
    // Obtener contraseña y usuario correcto
    var selectedAccountIndex = document.getElementById("account-select").value;
    var password = document.getElementById("password-input").value;
  
    if (password === cuentas[selectedAccountIndex].password) {
      document.getElementById("options").style.display = "block";
      document.getElementById("result").style.display = "none";
    } else {
      alert("Contraseña incorrecta. Inténtalo nuevamente.");
    }
  }
  
  function consultarSaldo() {
    var selectedAccountIndex = document.getElementById("account-select").value;
    alert("Saldo actual: " + cuentas[selectedAccountIndex].saldo + " pesos.");
  }
  
  function ingresarMonto() {
    var selectedAccountIndex = document.getElementById("account-select").value;
    var monto = parseFloat(prompt("Ingresa el monto a ingresar:"));
  
    if (!isNaN(monto) && monto > 0) {
      // monto ingresado no supera los $990
      if (cuentas[selectedAccountIndex].saldo + monto <= 990) {
        cuentas[selectedAccountIndex].saldo += monto;
        alert("Has ingresado " + monto + " pesos. Nuevo saldo: " + cuentas[selectedAccountIndex].saldo + " pesos.");
      } else {
        alert("No puedes tener más de $990 en tu cuenta. Saldo actual: " + cuentas[selectedAccountIndex].saldo + " pesos.");
      }
    } else {
      alert("Monto inválido. Debe ser un número positivo.");
    }
  }
  
  function retirarMonto() {
    var selectedAccountIndex = document.getElementById("account-select").value;
    var monto = parseFloat(prompt("Ingresa el monto a retirar:"));
  
    if (!isNaN(monto) && monto > 0) {
      // monto ingresado no supera el saldo actual ni es menor de $10
      if (monto <= cuentas[selectedAccountIndex].saldo && cuentas[selectedAccountIndex].saldo - monto >= 10) {
        cuentas[selectedAccountIndex].saldo -= monto;
        alert("Has retirado " + monto + " pesos. Nuevo saldo: " + cuentas[selectedAccountIndex].saldo + " pesos.");
      } else {
        alert("Saldo insuficiente para retirar ese monto, ten presente que tu cuenta debe quedar con mínimo $10.");
      }
    } else {
      alert("Monto inválido. Debe ser un número positivo.");
    }
  }
  