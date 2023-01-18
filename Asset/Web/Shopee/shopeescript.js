var HeadslideIndex = 0;
        carousel();
        function carousel() {
            var i;
            var x = document.getElementsByClassName("Head-slide");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            HeadslideIndex++;
            if (HeadslideIndex > x.length) { HeadslideIndex = 1 }
            x[HeadslideIndex - 1].style.display = "flex";
            setTimeout(carousel, 4000); // Change image every 2 seconds
        }
const carousel = new bootstrap.Carousel('#Mall')
const carousel = new bootstrap.Carousel('#Mall-list-slide')