
// https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-erref/596a1078-e883-4972-9bbc-49e60bebca55

const output = [];
document.querySelector(".protocol-table").querySelectorAll("tr").forEach((x, i) => {
    if(i != 0){
        const a = x.children[0].textContent.trim().split("\n");
        const code = a[0].trim();
        const name = a[1].trim();
        const description = x.children[1].textContent.trim();
        output.push({
            code,
            name,
            description
        });
    }
});
console.log(JSON.stringify(output));