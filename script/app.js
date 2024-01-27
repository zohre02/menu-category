const menu = [



{
    id:1,
    title : "buttermilk pancakes",
    category : "breakfast",
    price : 15.99 ,
    Imag : "assets1/images.jpg" ,
    desc : `Breakfast is the first meal of the day usually eaten in the morning. The word in English refers to breaking the fasting period of the previous night.`

},
{
    id:2,
    title : "dinner double",
    category : "lunch",
    price : 13.99 ,
    Imag : "assets1/hamburger.jpg" ,
    desc : `Lunch is a meal eaten around the middle of the day. It is commonly the second meal of the day, after breakfast, and varies in size by culture and region.`

},
{
    id:3,
    title : "godzilla milkshake",
    category : "shakes",
    price : 6.99 ,
    Imag : "assets1/god.jpg" ,
    desc : `Differences between shakes and smoothies-Blog-Life Smoothies`

},
{
    id:4,
    title : "country delight",
    category : "breakfast",
    price : 15.99 ,
    Imag : "assets1/nimro.jpg" ,
    desc : `The morning meal is called breakfast because it signifies the act of breaking the fast that occurs overnight while we sleep.`

},
{
    id:5,
    title : "egg attack",
    category : "lunch",
    price : 15.99 ,
    Imag : "assets1/hemburger5.png" ,
    desc : `a meal eaten in the middle of the day, typically one that is lighter or less formal than an evening meal.`

},
{
    id:6,
    title : "oreo dream",
    category : "shakes",
    price : 15.99 ,
    Imag : "assets1/oreo.jpg" ,
    desc : `This twist on the classic Palm Springs date shake brings in flavours of cinnamon, nutmeg & malt. ...`

},
{
    id:7,
    title : "bacon overflow",
    category : "breakfast",
    price : 15.99 ,
    Imag : "assets1/bacon.jpg" ,
    desc : `Breakfast is the first meal of the day usually eaten in the morning. The word in English refers to breaking the fasting period of the previous night.`

},
{
    id:8,
    title : "american classic",
    category : "lunch",
    price : 15.99 ,
    Imag : "assets1/am.jpg" ,
    desc : `No grill, no problemo! Here's how to make an incredible burger indoors on the stove. An optional `

},
{
    id:9,
    title : "quarantine buddy",
    category : "shakes",
    price : 16.99 ,
    Imag : "assets1/images9.jpg" ,
    desc : `A milkshake is a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce,`

},
{
    id:10,
    title : "bison steak",
    category : "dinner",
    price : 22.99 ,
    Imag : "assets1/steak.jpg" ,
    desc : `A steak is a thick cut of meat generally sliced across the muscle fibers, sometimes including a bone. It is normally grilled or fried`

},


];


const addMenuList = (itemList = []) => {
    document.getElementById("menu-list").innerHTML = itemList.map((food)=> ` 
    <div class="food-item">
    <img src="${food.Imag}" alt="${food.title}">
    <div class="food-desc">

     <div class="food-detail">
        <h3>${food.title}</h3>
        <p class="price">$${food.price}</p>
     </div>
     <p class="food-more">${food. desc}</p>

    </div>
</div>` ).join('')

};

const setActiveClass = (button) =>{
  if(button){
    document.querySelectorAll('.btn-category').forEach((b)=>{
        b.classList.remove('active-btn')
    })
        button.classList.add('active-btn')
  }
}


const addCategoryButtons =() => {

  

    const categoryList = menu.reduce( (categories, item)=>{

        if(item && item.category && !categories.includes(item.category)){
            categories.push(item.category);

        }
        return categories;

    },['all'])

    const buttons = categoryList.map((cat) => `<button class="btn btn-category ${cat === 'all' ? 'active-btn' : ''}" category-id="${cat}">${cat}</button>`);

    if (buttons.length > 0){
        document.getElementById("menu-categories").innerHTML = buttons.join(" ");
    };

   document.querySelectorAll('.btn-category').forEach((item) =>{
    const categoryType = item.getAttribute('category-id')


    item.addEventListener('click',function(){
        setActiveClass( item);
        item.classList.add("active-btn");
        
        if(categoryType === "all"){
            addMenuList(menu);
            return

        }
        const filterList = menu.filter((item) => item.category === categoryType);
        addMenuList( filterList);
    });
   });

};



document.addEventListener('DOMContentLoaded', function(){

    addCategoryButtons();
    addMenuList(menu);
})