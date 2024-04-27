
const categriesItem = document.querySelectorAll(".item");
const categriesItemLength = categriesItem.length;
console.log(`Number of categories: ${categriesItemLength}`);

categriesItem.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryNameLength = category.querySelectorAll("ul li").length;   
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryNameLength}`);
});
