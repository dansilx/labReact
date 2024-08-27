// const $menu = $("#menu");

// $(".menu-item").each(function(index) {
//     $(this).on("mouseover", () => {
//         $menu.data("activeIndex", index)
//     })
// })

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item,index) => {
    item.onmouseover = () => {
        menu.dataset.activeIndex = index;
    }
});