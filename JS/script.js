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