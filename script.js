let cart = [];
let total = 0;

// أضف منتج
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

// تحديث السلة
function updateCart() {
    const cartList = document.getElementById("cartList");
    const totalText = document.getElementById("total");

    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - ${item.price} دج
            <button onclick="removeItem(${index})">حذف</button>
        `;

        cartList.appendChild(li);
    });

    totalText.textContent = total + " دج";
}

// حذف منتج
function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// إرسال الطلب
function sendOrder() {
    const phoneInput = document.getElementById("phone");

    if (!phoneInput.value.trim()) {
        alert("يرجى إدخال رقم الهاتف");
        return;
    }

    if (cart.length === 0) {
        alert("السلة فارغة");
        return;
    }

    let message = "🍔 طلب جديد من Douaa Gour
