export const breakfastMenu = [
    { name: 'Vegetarian Breakfast', description: 'Two eggs cooked your way, asparagus or baby broccoli, cherry tomato, mushroom, red capsicum, baby spinach, avocado, served with toasted ciabatta bread.', price: 24.0 },
    { name: 'The Big Breakfast', description: 'Scrambled, fried or poached eggs, ciabatta toast, bacon, sausage, mushroom, hash brown, grilled tomatoes and baked beans.', price: 24.0, popular: true },
    {
        name: 'Smashed Avo',
        description: '',
        subItems: [
            { name: 'Smashed Avo on Sourdough', price: 20.0, description: 'Two poached eggs with smashed avocado, feta cheese, lemon, pumpkin seeds and pomegranate sauce.' },
            { name: 'Smashed Avo with Bacon', price: 22.0 },
            { name: 'Smashed Avo with Smoked Salmon', price: 22.0 },
        ],
    },
    { name: 'Toast or Croissant with Condiments', description: 'Ciabatta, wholemeal, multigrain or croissant with butter, honey or jam.', price: 7.0 },
    { name: 'B.L.T', description: 'Lettuce, tomato, bacon and caesar dressing sauce in a burger bun.', price: 14.0 },
    {
        name: 'Omelette Bar',
        description: 'Ask for our own omelette menu and make it your way.',
        subItems: [
            { name: 'Bacon Omelette', price: 19.0, description: 'Bacon, sausage, capsicum, mushroom and red onion, served with ciabatta toast.' },
            { name: 'Vegetarian Omelette', price: 18.0, description: 'Mushroom, red onion, capsicum, spinach and feta.' },
        ],
    },
    { name: 'Eggs on Toast', description: 'Scrambled, fried or poached eggs on ciabatta toast and mushrooms.', price: 13.5 },
    { name: 'Pancakes', description: 'With seasonal fruit, maple flavoured syrup and ice cream.', price: 13.0 },
    {
        name: 'Eggs Benedict',
        description: 'Served with two poached eggs on toasted ciabatta bread.',
        popular: true,
        subItems: [
            { name: 'Eggs Benedict with Bacon or Ham', price: 21.0 },
            { name: 'Eggs Benedict with Smoked Salmon', price: 21.0 },
        ],
    },
    { name: 'Eggs Florentine', description: 'Two poached eggs, spinach, avocado, and hollandaise sauce, served on toasted ciabatta.', price: 19.0 },
    { name: 'Raisin Toast, Scone or Banana Bread', description: 'With jam, butter and cream.', price: 6.0 },
];

export const lunchMenu = [
    { name: 'Gardenia Style Soup', description: 'Pumpkin and leek served with bread.', price: 13.0 },
    {
        name: 'Beef Burger and Chips',
        description: 'Beef patty, garden salad, tomato, caramelised onion, thousand-island sauce, cheese, in a burger bun.',
        subItems: [
            { name: 'Without Bacon', price: 18.00 },
            { name: 'With Bacon', price: 18.50 },
        ],
    },
    {
        name: 'Chicken Burger and Chips',
        description: 'Southern fried chicken, garden salad, tomato, cheese, caesar dressing sauce.',
        subItems: [
            { name: 'Without Bacon', price: 18.00 },
            { name: 'With Bacon', price: 18.50 },
        ],
    },
    { name: 'Steak Sandwich and Chips', description: 'Beef steak, garden salad, tomato, caramelised onion, cheese, tomato relish and mustard sauce.', price: 20.0 },
    { name: 'Seafood Basket and Chips', description: 'Fish fillet, prawns, squid rings, surimi bites, surimi scallop, garden salad and tartare sauce.', price: 19.0 },
    { name: 'Beer Battered Whiting Fish and Chips', description: 'Garden salad and tartare sauce.', price: 19.0 },
    { name: 'Bruschetta with Poached Egg', description: 'Poached egg, ripe tomato, basil, onion, dressing sauce on toasted ciabatta bread.', price: 16.0, popular: true },
];

export const freshSaladsMenu = [
    { name: 'Chicken Caesar Salad', description: 'Grilled bacon, grilled chicken, cos lettuce, red onion, poached egg, parmesan, cucumber, cherry tomato and caesar dressing sauce.', price: 17.0 },
    { name: 'Pulled Beef Salad', description: 'Garden salad, red onion, cherry tomato, cucumber, feta cheese, walnut, balsamic dressing.', price: 17.0 },
    { name: 'Beetroot, Feta and Walnut Salad', description: 'Garden salad, walnut, feta cheese, beetroot, red onion, cucumber, cherry tomato, balsamic dressing.', price: 17.0 },
];

export const kidsMenu = [
    { name: 'Kids Brekky', description: 'Eggs, hash brown, sausage, baked beans with bread.', price: 10.0 },
    { name: 'Kids Pancakes', description: 'Two sliced pancakes, syrup, ice cream with seasonal fruit.', price: 8.0 },
    { name: 'Chicken Nuggets', description: 'Six nuggets with tomato sauce.', price: 12.0 },
    { name: 'Kids Fish and Chips', description: 'Fish and chips with tomato sauce.', price: 12.0 },
    {
        name: 'Sandwiches and Wraps',
        description: 'Gluten free bread available on request.',
        subItems: [
            { name: 'Croissant with Ham and Cheese', price: 9.0 },
            { name: 'Ham and Cheese', price: 9.0 },
            { name: 'Bacon and Egg in a Bun', price: 10.0 },
            { name: 'Roast Chicken Panini', price: 12.0, description: 'Roasted chicken, cheese, spinach, sweet chilli and sour cream sauce, toasted.' },
            { name: 'BBQ Pulled Beef', price: 12.0, description: 'Pulled beef, cheese, spinach, BBQ and mustard sauce.' },
            { name: 'Chicken Avocado Toastie', price: 12.0, description: 'Roasted chicken, cheese, spinach, avocado and aioli sauce.' },
        ],
    },
    {
        name: 'Toasted Wraps',
        description: 'On a toasted tortilla.',
        subItems: [
            { name: 'Roasted Chicken Wrap', price: 12.0, description: 'Chicken, cheese, garden salad and tomato relish sauce.' },
            { name: 'Bacon and Egg Wrap', price: 12.0, description: 'Bacon, egg, cheese, garden salad, sundried tomato and tomato relish sauce.' },
            { name: 'Veggie and Feta Wrap', price: 12.0, description: 'Red capsicum, onion, sundried tomato, garden salad, feta cheese, black olives and hollandaise sauce with egg.' },
        ],
    },
];

export const extrasMenu = [
    { name: 'Avocado', description: 'Perfectly ripe, freshly sliced avocado.', price: 4.0 },
    { name: 'Hash Browns', description: 'Golden brown, crispy and fluffy hash browns.', price: 3.0 },
    { name: 'Bacon', description: 'Sizzling, perfectly crispy smoked bacon.', price: 4.0 },
    { name: 'Salmon', description: 'Delicate and flavourful smoked salmon slices.', price: 5.0 },
    { name: 'Egg', description: 'Farm-fresh eggs, cooked just the way you like.', price: 3.0 },
];

export const sideMenu = [
    { name: 'Chips with Tomato Sauce', description: '', price: 7.0 },
    { name: 'Seasoned Wedges', description: 'With sweet chilli and sour cream sauce.', price: 9.0 },
];
