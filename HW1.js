function calculateFormulas() {
    try {
        let fee = document.getElementById('fee').value.trim();
        let count = document.getElementById('count').value.trim();
        let discount = document.getElementById('discount').value.trim();
        let taxRate = document.getElementById('tax').value.trim();
        let shipping = document.getElementById('shipping').value.trim();

        // Check if inputs are valid numbers
        if (isNaN(fee) || isNaN(count) || isNaN(discount) || isNaN(taxRate) || isNaN(shipping)) {
            document.getElementById('result1').textContent = "خطا: مقدار ورودی نامعتبر است";
            document.getElementById('result2').textContent = "خطا: مقدار ورودی نامعتبر است";
            document.getElementById('result3').textContent = "خطا: مقدار ورودی نامعتبر است";
            return;
        }

        // Convert inputs to numbers
        fee = parseFloat(fee) || 0;
        count = parseFloat(count) || 0;
        discount = parseFloat(discount) || 0;
        taxRate = parseFloat(taxRate) || 0;
        shipping = parseFloat(shipping) || 0;

        // Check for negative values
        if (fee < 0 || count < 0 || discount < 0 || taxRate < 0 || shipping < 0) {
            document.getElementById('result1').textContent = "خطا: مقدار ورودی نمی‌تواند منفی باشد";
            document.getElementById('result2').textContent = "خطا: مقدار ورودی نمی‌تواند منفی باشد";
            document.getElementById('result3').textContent = "خطا: مقدار ورودی نمی‌تواند منفی باشد";
            return;
        }

        let result1 = (count * fee) - discount;
        if (result1 < 0) {
            document.getElementById('result1').textContent = "قیمت پس از اعمال تخفیف نمیتواند منفی شود.";
            document.getElementById('result2').textContent = "قیمت پس از اعمال تخفیف نمیتواند منفی شود.";
            document.getElementById('result3').textContent = "قیمت پس از اعمال تخفیف نمیتواند منفی شود.";
            return;
        }
        document.getElementById('result1').textContent = result1.toFixed(2);

        let result2 = result1 + shipping;
        document.getElementById('result2').textContent = result2.toFixed(2);

        let result3 = result2 * (1 + (taxRate / 100));
        document.getElementById('result3').textContent = result3.toFixed(2);

    } catch (e) {
        document.getElementById('result1').textContent = "خطا: مقدار ورودی نامعتبر است";
        document.getElementById('result2').textContent = "خطا: مقدار ورودی نامعتبر است";
        document.getElementById('result3').textContent = "خطا: مقدار ورودی نامعتبر است";
    }
}

// Add event listeners for real-time calculations
document.getElementById('fee').addEventListener('input', calculateFormulas);
document.getElementById('count').addEventListener('input', calculateFormulas);
document.getElementById('discount').addEventListener('input', calculateFormulas);
document.getElementById('tax').addEventListener('input', calculateFormulas);
document.getElementById('shipping').addEventListener('input', calculateFormulas);

window.onload = calculateFormulas;
