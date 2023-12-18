function showBillForm()
{
  let billForm = document.getElementById("bill-fill-form");
  if (billForm.style.display === "block")
  {
    billForm.style.display = "none";
  }
  else
  {
    billForm.style.display = "block";
  }
}