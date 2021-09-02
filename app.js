//items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./menu item pics/item-1.jpeg",
    desc: `Buttery milky, and fluffy goodness with our in house maple syrup straight from Canada`,
  },
  {
    id: 2,
    title: "turkey bacon halal burger",
    category: "lunch",
    price: 17.99,
    img: "./menu item pics/item-2.jpeg",
    desc: `This plump and juicy turkey bacon burger will fill your mouth with joy. A side of your choice (fries, coleslaw or salad)`,
  },
  {
    id: 3,
    title: "Eggs and toast",
    category: "breakfast",
    price: 9.99,
    img: "./menu item pics/item-4.jpeg",
    desc: `The classic eggs and toast, with coffee or tea, your choice.`,
  },
  {
    id: 4,
    title: "mushroom veggie burger",
    category: "lunch",
    price: 13.99,
    img: "./menu item pics/item-5.jpeg",
    desc: `Looks like a regular burger, tastes like a regular burger, but is completely vegan friendly!`,
  },
  {
    id: 5,
    title: "classic burger",
    category: "lunch",
    price: 10.99,
    img: "./menu item pics/item-8.jpeg",
    desc: `The classic burger with a side of fries and sauce of your choice`,
  },
  {
    id: 6,
    title: "steak dinner",
    category: "dinner",
    price: 21.99,
    img: "./menu item pics/item-10.jpeg",
    desc: `Our only dinner menu, cooked to your liking`,
  },
  {
    id: 7,
    title: "dessert",
    category: "dessert",
    price: "free.99",
    img: "./menu item pics/item-6.jpeg",
    desc: `Me and some kisses, and of course, cuddles.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
        <img
          src="${item.img}"
          class="photo"
          alt="${item.title}"
        />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
                ${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
