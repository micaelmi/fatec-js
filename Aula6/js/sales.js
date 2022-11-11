const seller = document.getElementById("name");
const month = document.getElementById("month");
const amount = document.getElementById("amount");
const save = document.getElementById("save");

let sales = readStorage("data");
let salesReport = [];
let error = false;

if (sales === null) {
  sales = [];
}

function saveData() {
  validateForm();
  if (error === false) {
    register = [seller.value, month.value, amount.value];
    sales.push(register);

    sumOfSales();

    recordStorage("data", sales);
    swal("Sucesso!", "A venda foi cadastrada!", "success");
    clearForm();
  } else {
    swal({
      title: "Preenhcha os campos corretamente",
      icon: "warning",
    });
  }
}

function validateForm() {
  if (seller.value.length > 3 && month.value !== "x" && amount.value > 0) {
    error = false;
  } else {
    error = true;
  }
}

function clearForm() {
  seller.value = "";
  month.value = "x";
  amount.value = "";
}

function sumOfSales() {
  if (sales.length > 0) {
    for (let i = 0; i < sales.length; i++) {
      let amount = parseFloat(sales[i][2]);
      let seller = sales[i][0];
      let found = false;

      for (let j = 0; j < salesReport.length; j++) {
        if (salesReport[j][0] == seller) {
          salesReport[j][1] += amount;
          found = true;
          break;
        }
      }

      if (!found) {
        salesReport.push([seller, amount]);
      }
    }
    recordStorage("SalesReport", salesReport);
  }
}

save.addEventListener("click", saveData);


