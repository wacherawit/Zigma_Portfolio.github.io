async function loadPage(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.classList.remove('visible');

    try {
        const response = await fetch(page);
        const html = await response.text();
        contentDiv.innerHTML = html;
        contentDiv.classList.add('visible');

        // เรียกใช้สคริปต์ใหม่หลังจากที่เนื้อหาใหม่ถูกโหลด
        const scripts = contentDiv.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            eval(scripts[i].innerHTML);
        }
    } catch (error) {
        console.error('Error loading page:', error);
    }
};
new Vivus('Mysvg', {
    type: "oneByOne",
    delay: 0,
    duration: 500,
    animTimingFunction: Vivus.EASE_IN
},
    function (obj) {
        obj.el.classList.add("finished")
        document.getElementById('Loading').classList.add("Fadeout");
        document.getElementById('Under-nav').classList.add("Open");
        document.getElementById('ME').classList.add("AB-open");
        setTimeout(function () {
            document.getElementById('Loading').style.display = 'none';
        }, 3000);
    }
);
function showSection(sectionId, button) {
    // Hide all sections
    const sections = document.querySelectorAll('.Info_con');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section with a delay for smooth transition
    setTimeout(() => {
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    }, 400); // Adjust the delay if needed

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.Info_Btn_Box button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to the clicked button
    button.classList.add('active');
}

// Show the 'about' section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('about', document.getElementById('btn-about'));
});
document.addEventListener("DOMContentLoaded", function () {
    // Fetch API เพื่อดึงข้อมูลจากไฟล์
    fetch('data.json')
        .then(response => response.json()) // แปลงเป็น JSON
        .then(data => {
            const CLList = document.querySelector('.CL-list');

            // สร้าง element เพื่อแสดงข้อมูล
            data.forEach(item => {
                // สร้าง div CL-card
                const card = document.createElement('div');
                card.classList.add('CL-card');
                card.setAttribute('data-aos', 'fade-up');
                card.setAttribute('data-aos-once', 'true');
                card.setAttribute('data-aos-duration', '1000');

                // กำหนด innerHTML ให้กับ card
                card.innerHTML = `
                    <a href="${item.link}" target="_blank">
                        <div class="CL-card-img">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="CL-card-text">
                            ${item.title}
                        </div>
                    </a>
                `;

                // เพิ่ม card ไปยัง CL-list
                CLList.appendChild(card);
            });
        })
        .catch(error => console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error));
});

