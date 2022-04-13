function Calc_Tip(valor) {
  var bill = document.getElementById('input-bill').value
  var people = document.getElementById('input-people').value

  var bill = parseFloat(bill)
  var people = parseFloat(people)

  var tip = valor / 100
  var tip = parseFloat(tip)

  var totalTip = bill * tip

  var totalTipPerson = totalTip / people

  var totalBillPerson = (totalTip + bill) / people

  document.getElementById('input-total-tip').value =
    '$ ' + totalTipPerson.toFixed(2)

  document.getElementById('input-total-bill').value =
    '$ ' + totalBillPerson.toFixed(2)
}
function reset() {
  document.getElementById('input-bill').value = '0'
  document.getElementById('input-people').value = ' 0'
  document.getElementById('input-total-bill').value = '$ 0.00'
  document.getElementById('input-total-tip').value = '$ 0.00'
}
