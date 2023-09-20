
$(function () {
    $("#userSlider").slider({
        range: "min",
        min: 0,
        max: 30,
        value: 0,
        slide: function (event, ui) {
            $("#userCount").text(ui.value); // Update the user count
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

$("#SubmitForm").click(function() {

    const name = $("#name").val();
    const email = $("#email").val();
    const comments = $("#comments").val();

    const formData = {
        name: name,
        email: email,
        comments: comments
    };

    $.ajax({
        type: "POST",
        url: "https://forms.maakeetoo.com/formsdata/644", 
        data: JSON.stringify(formData),
        contentType: "application/json",
        success: function(response) {
            
            console.log("Data submitted successfully:", response);
            alert("Order submitted successfully!");
        },
        error: function(error) {
           
            console.error("Error submitting data:", error);
            alert("Failed to submit order.");
        }
    });
});

