
document.querySelector("#productForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const product = {
        name: document.querySelector("#name").value,
        price: Number(document.querySelector("#price").value),
        stock: Number(document.querySelector("#stock").value)
    };

    const request = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
    });

    const response = await request.json();
    console.log(response);
})