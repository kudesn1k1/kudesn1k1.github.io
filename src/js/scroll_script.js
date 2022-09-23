function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
            /*if (change.target.classList.contains("num")) {
                let finish = parseFloat(change.target.innerHTML);
                let i = 0;
                function run(){
                    change.target.innerHTML = "<h3 class='mb-3 num'>" + i + "</h3>";
                    if(change.target.classList.contains("num1")){i+=40;}
                    else if(change.target.classList.contains("num2")){i+=5;}
                    else{i++;}
                    if(i<=finish){setTimeout(run, 15);}
                }
                run();
            }*/
            
        }
    });
};

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}//отобржаение анимация при прокрутке страницы



document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages;

    //if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove("lazy");
                imageObserver.unobserve(image);
            }
        });
    });

    lazyloadImages.forEach(function (image) {
        imageObserver.observe(image);
    });//отложенная загрузка изображений
})
