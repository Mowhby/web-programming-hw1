# مستندات پروژه "محاسبه آنی فرمول‌ها"

## مقدمه
این پروژه یک صفحه وب است که به طور آنی محاسبات مختلف را انجام می‌دهد، از جمله محاسبه مجموع قیمت پس از تخفیف، مجموع هزینه با احتساب هزینه ارسال و مبلغ قابل پرداخت با احتساب مالیات.

---

## ساختار فایل‌ها
این پروژه از سه فایل اصلی تشکیل شده است:
1. `HW1.html` – فایل HTML برای ساختار صفحه.
2. `HW1.css` – فایل CSS برای استایل‌دهی به صفحه.
3. `HW1.js` – فایل JavaScript برای انجام محاسبات و مدیریت رویدادها.

---

## شرح تگ‌ها و منطق‌های موجود در `HW1.html`

### 1. **ورودی‌ها (Input Elements)**
در فایل `HW1.html`، ورودی‌ها برای دریافت اطلاعات از کاربر به صورت زیر تعریف شده‌اند:

- **ورودی قیمت واحد (`fee`)**:
    ```html
    <input type="text" id="fee" placeholder="قيمت واحد" />
    ```

- **ورودی تعداد (`count`)**:
    ```html
    <input type="text" id="count" placeholder="تعداد" />
    ```

- **ورودی تخفیف (`discount`)**:
    ```html
    <input type="text" id="discount" placeholder="تخفيف" />
    ```

- **ورودی مالیات (`tax`)**:
    ```html
    <input type="text" id="tax" placeholder="مالیات (%) قرار دهید" />
    ```

- **ورودی هزینه ارسال (`shipping`)**:
    ```html
    <input type="text" id="shipping" placeholder="هزینه ارسال" />
    ```

هر کدام از این ورودی‌ها برای دریافت داده‌های خاص از کاربر است که در مراحل بعدی برای محاسبات استفاده می‌شوند.

### 2. **خروجی‌ها (Output Elements)**
در این بخش، سه عنصر `<span>` برای نمایش نتایج محاسباتی قرار داده شده‌اند:

- **نمایش مجموع اقلام پس از تخفیف**:
    ```html
    <span id="result1">0</span>
    ```

- **نمایش مجموع هزینه با احتساب هزینه ارسال**:
    ```html
    <span id="result2">0</span>
    ```

- **نمایش مبلغ قابل پرداخت با احتساب مالیات**:
    ```html
    <span id="result3">0</span>
    ```

این خروجی‌ها مقادیر محاسبه‌شده را به کاربر نشان می‌دهند.

### 3. **استفاده از رویدادهای JavaScript**
در فایل HTML، برای هر ورودی از رویداد `input` استفاده شده است تا به محض تغییر مقدار هر ورودی، تابع `calculateFormulas()` فراخوانی شود و محاسبات انجام گیرد.

```html
document.getElementById('fee').addEventListener('input', calculateFormulas);
document.getElementById('count').addEventListener('input', calculateFormulas);
document.getElementById('discount').addEventListener('input', calculateFormulas);
document.getElementById('tax').addEventListener('input', calculateFormulas);
document.getElementById('shipping').addEventListener('input', calculateFormulas);
```
----

## بررسی حالات مختلف نادرست و Error در کد

در این پروژه، برای مدیریت خطاها و ورودی‌های نادرست از چندین شرایط مختلف استفاده شده است. در زیر بررسی این شرایط آورده شده است:

1. **ورودی‌های منفی:**
   اگر هر یک از مقادیر ورودی (مانند قیمت واحد، تعداد، تخفیف، مالیات و هزینه ارسال) عددی منفی باشند، برنامه یک خطا را نشان خواهد داد. زیرا طبق مفهومی که دارند، تمام این مقادیر باید مثبت باشند.

   
2. **پس از اعمال تخفیف، مجموع قیمت منفی شود:**
اگر بعد از اعمال تخفیف، مجموع قیمت نهایی (مجموع تعداد × قیمت واحد منهای تخفیف) منفی شود، این مقدار به هیچ عنوان پذیرفته نخواهد شد.


3. **مقدار ورودی غیر عددی (NaN):**
اگر کاربر هر یک از ورودی‌ها را به صورت غیر عددی وارد کند (مثلاً حروف به جای اعداد)، برنامه خطا نمایش میدهد.

----

## تصاویر نمونه از پروژه انجام شده:

1. **حالت درست و محاسبه موارد داده شده:**

![image](https://github.com/user-attachments/assets/92127f80-49e2-48d4-8d4b-3f712fa2c7c7)


2. **حالت نادرست و نمایش ارور:**

   ![image](https://github.com/user-attachments/assets/e84c80e4-32be-428e-b41b-04df643afea4)
   --
![image](https://github.com/user-attachments/assets/ab9d72a8-7bcf-4989-a08a-2814827dd016)
--
![image](https://github.com/user-attachments/assets/97076b60-27c4-425c-b6bc-7abf9f431d90)



