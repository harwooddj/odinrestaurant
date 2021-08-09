

//create menu page
export const addMenuPageElements = function(){

    const content = document.getElementById("middle");
    //article
    const article = document.createElement("article");
    const menuImg = document.createElement("img");
    menuImg.src = "../src/images/Restaurant-Food-Menu-Example.jpg"
    article.appendChild(menuImg);
    content.appendChild(article);


    console.log("page loaded")
}