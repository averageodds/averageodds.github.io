function calculate() {
    let odds1 = parseFloat(document.getElementById("odds1").value) || NaN;
    let stake1 = parseFloat(document.getElementById("stake1").value.replace(/[^\d.-]/g, "")) || NaN;
    let odds2 = parseFloat(document.getElementById("odds2").value) || NaN;
    let stake2 = parseFloat(document.getElementById("stake2").value.replace(/[^\d.-]/g, "")) || NaN;
    let odds3 = parseFloat(document.getElementById("odds3").value) || NaN;
    let stake3 = parseFloat(document.getElementById("stake3").value.replace(/[^\d.-]/g, "")) || NaN;
    let odds4 = parseFloat(document.getElementById("odds4").value) || NaN;
    let stake4 = parseFloat(document.getElementById("stake4").value.replace(/[^\d.-]/g, "")) || NaN;
    let odds5 = parseFloat(document.getElementById("odds5").value) || NaN;
    let stake5 = parseFloat(document.getElementById("stake5").value.replace(/[^\d.-]/g, "")) || NaN;
    let odds6 = parseFloat(document.getElementById("odds6").value) || NaN;
    let stake6 = parseFloat(document.getElementById("stake6").value.replace(/[^\d.-]/g, "")) || NaN;
    let odds7 = parseFloat(document.getElementById("odds7").value) || NaN;
    let stake7 = parseFloat(document.getElementById("stake7").value.replace(/[^\d.-]/g, "")) || NaN;
    let odds8 = parseFloat(document.getElementById("odds8").value) || NaN;
    let stake8 = parseFloat(document.getElementById("stake8").value.replace(/[^\d.-]/g, "")) || NaN;
    let odds9 = parseFloat(document.getElementById("odds9").value) || NaN;
    let stake9 = parseFloat(document.getElementById("stake9").value.replace(/[^\d.-]/g, "")) || NaN;
    let odds10 = parseFloat(document.getElementById("odds10").value) || NaN;
    let stake10 = parseFloat(document.getElementById("stake10").value.replace(/[^\d.-]/g, "")) || NaN;
  
    let validOdds = [odds1, odds2, odds3, odds4, odds5, odds6, odds7, odds8, odds9, odds10].filter(Boolean);
    let validStakes = [stake1, stake2, stake3, stake4, stake5, stake6, stake7, stake8, stake9, stake10].filter(Boolean);
  
    if (validOdds.length === 0 || validStakes.length === 0) {
      document.getElementById("averageOdds").innerHTML = "-";
      document.getElementById("totalStake").innerHTML = "-";
      return;
    }
  
    let totalStake = validStakes.reduce((a, b) => a + b, 0);
    let stakeWeightedOdds = validOdds.map((o, i) => o * validStakes[i]).reduce((a, b) => a + b, 0);
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