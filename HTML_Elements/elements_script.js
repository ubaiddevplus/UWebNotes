const body = document.querySelector("body");

const header = data[0];
const point1 = data[1];
const point2 = data[2];
const point3 = data[3];

let final_paragraphs = "";
let final_table_Header = "";
let final_table = "";
let final_links = "";

// console.log(point1.paragraphs);

point1.paragraphs.forEach(function (p) {
    final_paragraphs += "<p>" + p + "</p>";
    // console.log(final_paragraphs);
});

point2.table_Header.forEach(function (th) {
    final_table_Header += '<th>' + th + '</th>';
});

point2.table.forEach(function (tr) {
    let line = "";
    tr.forEach(function (td) {
        line += "<td>" + td + "</td>";
    })
    final_table += "<tr>" + line + "</tr>";

});

point3.links.forEach(function (a) {
    final_links += a;
});


body.innerHTML = `
    <header>
        <h1>${header.element}</h1>
    <h2>${header.title}</h2>
    </header>

    <main>
        <div class="example-of-h1-usage">

            <ul>
                <li>${point1.point1_Title}</li>
            </ul>


            <div class="ex1-card">

                <div class="ex1-code">
                    <div class="code-type">
                        <h4>${point1.code_type}</h4>
                    </div>
                    <p>${point1.code}</p>
                </div>

                ${final_paragraphs}

                <div class="ex1-result">
                    <div class="circles">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                    </div>
                    <h1>${point1.result}</h1>
                </div>


            </div>

            <ul class="additional-points">
                <li>${point2.point12_Title}</li>
            </ul>

        </div>

        <div class="table1">
            <table>
                <tr>
                    ${final_table_Header}
                </tr>
                ${final_table}
            </table>

        </div>





    </main>

    <nav>
        <ul class="additional-points">
            <li>${point3.point3_title}</li>
        </ul>
        <ul class="links-list">
          ${final_links}
        </ul>
        <br>
       ${point3.link_read_more}
    </nav>`

