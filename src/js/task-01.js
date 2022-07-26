const categoriesRef = document.querySelectorAll('.item');
const categoriesCount = categoriesRef.length;
console.log(`Number of categories: ${categoriesCount}`);

const ulLog = categoriesRef.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`)
    console.log(`Elements: ${category.lastElementChild.children.length}`)
})

  