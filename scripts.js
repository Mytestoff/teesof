document.addEventListener("DOMContentLoaded", function() {
    const restrictedLinks = document.querySelectorAll(".restricted-link");

    // بررسی وضعیت ثبت‌نام
    let isRegistered = localStorage.getItem("registered");

    // کنترل کلیک روی لینک‌های محدود
    restrictedLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            if (!isRegistered) {
                event.preventDefault(); // جلوگیری از عملکرد پیش‌فرض لینک
                alert("Please conn your Tonkeeper wallet");
            }
        });
    });

    // صفحه ثبت‌نام
    const form = document.getElementById("registerForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            if (username) {
                // ثبت‌نام موفقیت‌آمیز
                localStorage.setItem("registered", "true");
                document.getElementById("message").style.display = "block";
                setTimeout(() => {
                    window.location.href = "index.html"; // بازگشت به صفحه اصلی پس از ثبت‌نام
                }, 2000); // پس از 2 ثانیه به صفحه اصلی بازگردد
            }
        });
    }
});
