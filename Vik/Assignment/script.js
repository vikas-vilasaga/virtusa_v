function clearP()
{
    var right = document.getElementsByClassName("childComponent");
    Array.from(right).forEach(element => {
        element.style.display = "none";
    });
}
function createAcount()
{
    clearP();
    document.getElementById("createAccount").style.display = "block";
}
function deleteAccount()
{
    clearP();
    document.getElementById("deleteAccount").style.display = "block";
}
function updateAccount()
{
    clearP();
    document.getElementById("updateAccount").style.display = "block";
}
function displayAccount()
{
    clearP();
    document.getElementById("displayAccount").style.display = "block";
}
function depositAmount()
{
    clearP();
    document.getElementById("depositAmount").style.display = "block";
}
function withDraw()
{
    clearP();
    document.getElementById("withDraw").style.display = "block";
}
function transferFunds()
{
    clearP();
    document.getElementById("transferFunds").style.display = "block";
}
function statement()
{
    clearP();
    document.getElementById("statement").style.display = "block";
}