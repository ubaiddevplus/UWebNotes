const cards_container = document.querySelector(".cards-container");
console.log(card_data)

card_data.forEach(function (data) {
    cards_container.innerHTML += `<div class="cover-container">
                <div class="card">
                    <h2 class="card-title">${data.title}</h2>
                    <p class="card-content">${data.about}</p>
                    ${data.read_link}
                </div>
                <div class="cover">
                    <h2>${data.title}</h2>
                </div>
            </div>`;

})