function calculate() {
  let odds = [];
  let stakes = [];

  for (let i = 1; i <= 10; i++) {
    let oddsField = document.getElementById("odds" + i);
    let stakeField = document.getElementById("stake" + i);

    if (oddsField.value && stakeField.value) {
      let oddsValue = parseFloat(oddsField.value);
      let stakeValue = parseFloat(stakeField.value.replace(/[^\d.-]/g, ""));
      if (!isNaN(oddsValue) && !isNaN(stakeValue)) {
        odds.push(oddsValue);
        stakes.push(stakeValue);
      }
    }
  }

  if (odds.length === 0 || stakes.length === 0) {
    document.getElementById("averageOdds").innerHTML = "-";
    document.getElementById("totalStake").innerHTML = "-";
    return;
  }

  let totalStake = stakes.reduce((a, b) => a + b, 0);
  let stakeWeightedOdds = odds.map((o, i) => o * stakes[i]).reduce((a, b) => a + b, 0);
  let averageOdds = stakeWeightedOdds / totalStake;

  document.getElementById("averageOdds").innerHTML = averageOdds.toFixed(2);
  document.getElementById("totalStake").innerHTML = "£" + totalStake.toLocaleString("en-GB", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

  
  function reset() {
    document.getElementById("odds1").value = "";
    document.getElementById("stake1").value = "";
    document.getElementById("odds2").value = "";
    document.getElementById("stake2").value = "";
    document.getElementById("odds3").value = "";
    document.getElementById("stake3").value = "";
    document.getElementById("odds4").value = "";
    document.getElementById("stake4").value = "";
    document.getElementById("odds5").value = "";
    document.getElementById("stake5").value = "";
    document.getElementById("odds6").value = "";
    document.getElementById("stake6").value = "";
    document.getElementById("odds7").value = "";
    document.getElementById("stake7").value = "";
    document.getElementById("odds8").value = "";
    document.getElementById("stake8").value = "";
    document.getElementById("odds9").value = "";
    document.getElementById("stake9").value = "";
    document.getElementById("odds10").value = "";
    document.getElementById("stake10").value = "";
    document.getElementById("averageOdds").innerHTML = "0.00";
    document.getElementById("totalStake").innerHTML = "£0.00";
  }
