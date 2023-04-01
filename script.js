function calculate() {
  let odds = [];
  let stakes = [];
  let oddsWithComms = [];

  const table = document.getElementsByTagName('table')[0];
  const rows = table.rows.length;

  for (let i = 1; i < rows; i++) {
    let oddsField = document.getElementById("odds" + i);
    let stakeField = document.getElementById("stake" + i);
    let commissionField = document.getElementById("commission" + i);

    if (oddsField && stakeField && commissionField) {
      let oddsValue = parseFloat(oddsField.value);
      let stakeValue = parseFloat(stakeField.value.replace(/[^\d.-]/g, ""));
      let commissionValue = parseFloat(commissionField.value.replace(/[^\d.-]/g, ""));

      if (!isNaN(oddsValue) && !isNaN(stakeValue)) {
        if (isNaN(commissionValue)) {
          commissionValue = 0;
        }

        let commission = commissionValue / 100;
        let oddsWithComm = oddsValue / (1 + commission);

        odds.push(oddsValue);
        stakes.push(stakeValue);
        oddsWithComms.push(oddsWithComm);

        document.getElementById("oddsWithComm" + i).innerHTML = oddsWithComm.toFixed(2);
      }
    }
  }

  if (odds.length === 0 || stakes.length === 0) {
    document.getElementById("averageOdds").innerHTML = "-";
    document.getElementById("totalStake").innerHTML = "-";
    return;
  }

  let totalStake = stakes.reduce((a, b) => a + b, 0);
  let stakeWeightedOdds = oddsWithComms.map((o, i) => o * stakes[i]).reduce((a, b) => a + b, 0);
  let averageOdds = stakeWeightedOdds / totalStake;

  document.getElementById("averageOdds").innerHTML = averageOdds.toFixed(4);
  document.getElementById("totalStake").innerHTML = "£" + totalStake.toLocaleString("en-GB", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}





function reset() {
  for (let i = 1; i <= 10; i++) {
    document.getElementById("odds" + i).value = "";
    document.getElementById("stake" + i).value = "";
    document.getElementById("commission" + i).value = 0;
    document.getElementById("oddsWithComm" + i).innerHTML = "0.00";
  }
  document.getElementById("averageOdds").innerHTML = "0.00";
  document.getElementById("totalStake").innerHTML = "£0.00";

  const select = document.getElementById('rows');
  select.value = '10';
  select.dispatchEvent(new Event('change'));
}

// Get the select element and table
const select = document.getElementById('rows');
const table = document.getElementsByTagName('table')[0];

// Store the previous value of rows
let prevRows = select.value;

// Add an event listener to the select element
select.addEventListener('change', function() {
  // Get the selected value
  const rows = select.value;

  // Add or remove rows from the table based on the difference between the current and previous values
  if (rows > prevRows) {
    for (let i = prevRows; i < rows; i++) {
      const row = table.insertRow(-1);
      const index = table.rows.length - 2;
      row.innerHTML = `
        <td>${index + 1}</td>
        <td class="bookmaker"><input type="text"></td>
        <td class="stake-input"><span class="currency">£</span><input type="number" step="0.01" id="stake${index + 1}" oninput="calculate()" style="width: 80%;"></td>
        <td class="odds-input"><input type="number" step="0.01" id="odds${index + 1}" oninput="calculate()" style="width: 80%;"></td>
        <td class="commission-input"><input type="number" step="1" id="commission${index + 1}" value="0" oninput="calculate()" style="width: 80%;"><span class="percentsign">%</span></td>
        <td id="oddsWithComm${i+1}"><span>0.00</span></td>
      `;
    }
  } else {
    for (let i = prevRows - 1; i >= rows; i--) {
      table.deleteRow(i + 1);
    }
  }

  // Update the previous value of rows
  prevRows = rows;

  // Update the row numbers
  const rowsCells = table.getElementsByTagName("td");
  for (let i = 0; i < rowsCells.length; i++) {
    if (rowsCells[i].textContent.match(/^\d+$/)) {
      rowsCells[i].textContent = i / 6 + 1;
    }
  }
});


