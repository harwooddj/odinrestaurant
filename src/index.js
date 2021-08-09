import { addMenuPageElements } from "./menu";



const content = document.getElementById("middle");


const removeContent = function(){

    content.innerHTML = "";
}


//create home page
const addHomePageElements = function(){

    //article
    const article = document.createElement("article");
    const aboutText = document.createElement("p");
    aboutText.textContent = "A quality and relaxing rural country pub, run by award winning owners, in the beautiful Warwickshire village of Southam just a short drive from the A41 and junctions 14 and 15 of the M40. The building and decor are charming and rustic, with elegant modern touches. Relax by the cozy log burner perfect for winter evenings or enjoy outdoor seating overlooking open country fields or in a pretty courtyard filled with flowers in the summer months. A daily menu, all freshly prepared in the pub kitchen, includes fresh fish, pies, steaks and chef's daily specials with main course prices ranging from £11.50 - £19.50. As all dishes are prepared in the pub kitchen, they are able to cater for most dietary needs, with most sauces, soups and gravy all created gluten free. The Dog also offers gluten free bread and gluten free Yorkshire puddings on a Sunday. The Dog at Southam";
    article.appendChild(aboutText);
    content.appendChild(article);

    const section = document.createElement("section");
    //section1
    const section1 = document.createElement("div");
    const section1Img = document.createElement("img")
    section1Img.src = "../src/images/restaurant3.jpg";
    section1.appendChild(section1Img);
    section1.id = "section1";
    section.appendChild(section1);
    //section2
    const section2 = document.createElement("div");
    const section2Img = document.createElement("img")
    section2Img.src = "../src/images/restaurant2.jpg";
    section2.appendChild(section2Img);
    section2.id = "section2";
    section.appendChild(section2);
    //section3
    const section3 = document.createElement("div");
    const section3Img = document.createElement("img")
    section3Img.src = "../src/images/restaurant1.jpg";
    section3.appendChild(section3Img);
    section3.id = "section3";
    section.appendChild(section3);

    content.appendChild(section);

    console.log("page loaded")
}


addHomePageElements();
document.getElementById("navHome").addEventListener("click", e => {
    removeContent();
    addHomePageElements();
})

document.getElementById("navMenu").addEventListener("click", e => {
    removeContent();
    addMenuPageElements();
})