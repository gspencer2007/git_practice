let mainNav = document.getElementsByTagName('nav')[0];
let mainUl = document.getElementsByTagName('ul')[0];
// new li
let newListItem = document.createElement('li');
// new a link
let newLink = document.createElement('a');
newLink.innerHTML = 'Resume';
// appending
newListItem.appendChild(newLink);
mainUl.appendChild(newListItem);
mainNav.appendChild(mainUl);

let allLinks = document.querySelectorAll('a');


for(let i=0; i < allLinks.length; i++){
    //console.log(allLinks[i]);
    allLinks[i].addEventListener('mouseover', function(){
        allLinks[i].style.color = '#28587B';
    });
    allLinks[i].addEventListener('mouseout', function(){
        allLinks[i].style.color = 'white';
    });
    allLinks[i].parentNode.addEventListener('mouseover', function(){
        allLinks[i].parentNode.style.backgroundColor = 'pink';
    })
    allLinks[i].parentNode.addEventListener('mouseout', function(){
        allLinks[i].parentNode.style.backgroundColor = '#28587B';
    })
}