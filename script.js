window.onload = function() {
  reset();
};

function calculate() {
  let odds = [];
  let stakes = [];
  let oddsWithComms = [];

  for (let i = 1; i <= 10; i++) {
    let oddsField = document.getElementById("odds" + i);
    let stakeField = document.getElementById("stake" + i);
    let commissionField = document.getElementById("commission" + i);

    if (oddsField.value && stakeField.value) {
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

  document.getElementById("averageOdds").innerHTML = averageOdds.toFixed(2);
  document.getElementById("totalStake").innerHTML = "£" + totalStake.toLocaleString("en-GB", {minimumFractionDigits: 2, maximumFractionDigits: 2});

  for (let i = 0; i < oddsWithComms.length; i++) {
    document.getElementById("oddsWithComm" + (i+1)).innerHTML = oddsWithComms[i].toFixed(2);
  }
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
}
