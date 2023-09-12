function btnclick(val)
{
    document.getElementById("screen").value += val;
}

function btnclickbtn()
{
    var textres;
    textres = document.getElementById("screen").value;
    var res = eval(textres);
    document.getElementById("screen").value = res;
}

function btnclickclear()
{
    document.getElementById("screen").value="";
}