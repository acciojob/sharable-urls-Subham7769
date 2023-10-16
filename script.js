// your code here
document.getElementById("button").addEventListener("click", function() {
            const nameValue = document.getElementById("name").value;
            const yearValue = document.getElementById("year").value;

            // Build the query string
            const queryString = `?name=${nameValue}&year=${yearValue}`;

            // Update the URL text
            document.getElementById("url").textContent = `URL: https://localhost:8080/${queryString}`;
        });