const deliverDate = document.getElementById("deliver-date");

function formatDate() {
  deliverDate.valueAsDate = new Date();

  let currentDate = new Date();
  const getDate = currentDate.getDate();
  const getMonth = currentDate.getMonth() + 1;

  return `${2077}-${getMonth.toString().padStart(2, "0")}-${getDate.toString().padStart(2, "0")}`;
}

deliverDate.value = formatDate();
