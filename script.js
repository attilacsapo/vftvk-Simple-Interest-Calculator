function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    e = p*(r/100)*y;
    currentDate = new Date();
    currentYear = currentDate.getFullYear();
    futureYear =  currentYear + parseInt(y);

    document.getElementById("resultPrincipal").innerHTML = "If you deposit " + p;
    document.getElementById("resultRate").innerHTML = "at an interest rate of " + r + "%,";
    document.getElementById("resultEarn").innerHTML = "You will receive " + e.toFixed(2);
    document.getElementById("resultYears").innerHTML = "in the year " + futureYear + ".";

        return e
    
}

