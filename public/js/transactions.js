$(document).ready(function () {
    $.get("/get-transactions", function (data, status) {
        console.log(data);
        console.log(status);

        var trContainer = $(".transaction_container");
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        data.forEach((element, i) => {
            var trCard = $("<div>").addClass("transaction-card");
            var trInfo = $("<div>").addClass("transaction-info");
            var trButtons = $("<div>").addClass("transaction_buttons");

            var title = $("<h1>").text(element.title);
            var description = $("<h2>").text(element.description);
            var dateElem = $("<h2>").text(element.date).addClass("date");
            var date = new Date($(dateElem).text())
            dateElem = $(dateElem).text(months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());
            var amount = $("<span>").text(element.amount).addClass("amount");
            amount = $(amount).text("PHP " + parseFloat($(amount).text(), 10).toFixed(2));
            if(element.recurring)
            {
                var recurring = $("<span>").text("Recurring " + element.recurringType).addClass("recurring");
            }

            var editImg = $("<img>").attr("src", "../img/edit.png").addClass("edit_transaction");
            var deleteImg = $("<img>").attr("src", "../img/delete.png").addClass("delete_transaction");

            $(trInfo).append(title, description, dateElem, amount, recurring);
            $(trButtons).append(editImg, deleteImg);
            $(trCard).append(trInfo, trButtons);
            $(trContainer).append(trCard);
        });
    });
});

