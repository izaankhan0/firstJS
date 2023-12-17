function enterListener() {
    if (event.key === "Enter") {
      orderCalculator();
      document.querySelector('.inp').value = '';
    }
  }

  function orderCalculator() {
    let inputElement = Number(document.querySelector(".inp").value);
    if (inputElement < 40) {
      inputElement += 10;
    }

    document.querySelector(".totalCost").innerHTML =
      "Total Cost: " + "$" + inputElement;
  }

  function subscriber() {
    if (document.querySelector(".sub-button").innerHTML === "Subscribed") {
      document.querySelector(".sub-button").innerHTML = "Subscribe";
      document.querySelector('.sub-button').classList.remove('subscribed')
    } else {
      document.querySelector(".sub-button").innerHTML = "Subscribed";
      document.querySelector('.sub-button').classList.add('subscribed')
    }
  }