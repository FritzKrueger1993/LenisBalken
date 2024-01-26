function setupProg(){
    finalDate = new Date(2024,6,26);
    startDate = new Date(2023,8,11);
}

function updateProg(){
    currentDate = new Date();
    difCurrent = finalDate - currentDate;
    difStart = finalDate - startDate;
    prog = 100 - difCurrent * 100 / difStart;
    progPercent = nfc(prog,7);
}