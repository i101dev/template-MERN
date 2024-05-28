document.addEventListener("DOMContentLoaded", () => {
    /*=============== ADD BLUR HEADER ===============*/
    const blurHeader = () => {
        const header = document.getElementById("header");
        window.scrollY >= 50
            ? header.classList.add("blur-header")
            : header.classList.remove("blur-header");
    };
    window.addEventListener("scroll", blurHeader);

    /*=============== SHOW SCROLL UP ===============*/
    const scrollUp = () => {
        const scrollUp = document.getElementById("scroll-up");
        window.scrollY >= 350
            ? scrollUp.classList.add("show-scroll")
            : scrollUp.classList.remove("show-scroll");
    };

    window.addEventListener("scroll", scrollUp);
});
