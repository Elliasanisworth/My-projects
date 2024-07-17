const cartIcon = document.querySelector('.carticon');
const cartExpand = document.querySelector('.cartexpend');

var products = [
    {name:"White Chair",headline:"Soft like a cloud.",price:"15,000",image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fDB8fA%3D%3D"},
    {name:"Blue Chair",headline:"Lakdi ka stool.",price:"10,000",image:"https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Traditional Chair",headline:"Looks very old.",price:"16,500",image:"https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fENoYWlyfGVufDB8fDB8fHww"},
    {name:"Long Legs",headline:"decore",price:"20,000", image:"https://plus.unsplash.com/premium_photo-1681031465676-995faaaac5bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNoYWlyfGVufDB8fDB8fHww"}
];


function addProduct() {
    var clutter = "";
    products.forEach(function(product) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                            <img class="w-full h-full object-cover" src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="data w-full px-2 py-5">
                            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                            <div class="flex justify-between w-full items-center mt-2">
                                <div class="w-1/2">
                                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                                    <h4 class="font-semibold mt-2">$${product.price}</h4>
                                </div>
                                <button class="w-10 h-10 rounded-full shader text-yellow-400"><i class="ri-add-line"></i></button>
                            </div>
                        </div>
                    </div>`;
    });
    document.querySelector(".products").innerHTML = clutter;
}
document.addEventListener('DOMContentLoaded', function() {
    const popular = [
        {
            image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D",
            name: "charlotte",
            headline: "Indianapolis",
            price: "12,000"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1664391899883-59de759c56a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3glMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D",
            name: "King Chair",
            headline: "Relaxation",
            price: "11,000"
        }
    ];

    function addPopularProduct() {
        const popularContainer = document.querySelector(".populars");
        popularContainer.innerHTML = ""; // Clear the container before adding new products

        let clutter2 = "";
        popular.forEach(function(product) {
            clutter2 += `
                <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-full md:w-[48%] lg:w-[31%] xl:w-[23%] flex-shrink-0 shadow-md hover:shadow-lg transition-shadow">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover" src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">$${product.price}</h4>
                    </div>
                </div>
            `;
        });
        popularContainer.innerHTML = clutter2;
    }

    addPopularProduct();
});

document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', ()=> {
        const product = {
            name: button.closest('.product').querySelector('h1').textContent,
            price: button.closest('.product').querySelector('h4').textContent
        };
        addToCart(product);
    });
});
const addToCartButtons = document.querySelectorAll('.product ');


addProduct();