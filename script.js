
$(function () {
    $("#userSlider").slider({
        range: "min",
        min: 0,
        max: 30,
        value: 0,
        slide: function (event, ui) {
            $("#userCount").text(ui.value); 
            highlightPricingPlan(ui.value);
        }
    });

    highlightPricingPlan(0);

    function highlightPricingPlan(users) {
        const userRanges = [0, 10, 20, 30];
        const planCards = document.querySelectorAll(".card");

        for (let i = 0; i < userRanges.length; i++) {
            if (users >= userRanges[i] && users < userRanges[i + 1]) {
                planCards.forEach(card => card.classList.remove("highlighted"));
                planCards[i].classList.add("highlighted");
                break;
            }
        }
    }
});

//form handling
const submitButton = document.getElementById('SubmitForm');

submitButton.addEventListener('click', async () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comments = document.getElementById('comments').value;

  try {
    const response = await fetch('/api/server', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, comments }),
    });

    if (response.ok) {
      alert('Form data submitted successfully!');
    } else {
      alert('Error submitting form data.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to submit form data.');
  }
});
