(()=>{var e,n=document.querySelector("#cocktailName"),t=document.querySelector("#cocktailButton"),r=document.getElementById("modal"),i=document.getElementById("promptTxt"),o=document.getElementById("close"),a=[],s=[],c=[];function l(){ingredientCard.innerHTML=""}function d(){a=[],s=[]}function u(n){var t=document.querySelector("#form");(e=document.createElement("button")).textContent="Save",t.appendChild(e),e.addEventListener("click",(function(t){t.preventDefault();var r=JSON.parse(localStorage.getItem("savedCocktail"));null!==r&&(c=r),c.includes(n)||(c.push(n),window.localStorage.setItem("savedCocktail",JSON.stringify(c)),e.setAttribute("style","display: none;"))}))}t.addEventListener("click",(function(t){if(t.preventDefault(),cocktail=n.value.trim(),""==cocktail)return r.style.display="block",i.textContent="Alert: Please Enter Drink Name",void o.addEventListener("click",(function(){r.style.display="none"}));var c;c="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(cocktail),fetch(c).then((function(e){return e.json()})).then((function(t){l(),e&&e.setAttribute("style","display: none;"),function(t){if(console.log(t.drinks),t.drinks.length>1){r.style.display="block",i.textContent="There are multiple results with that name, did you mean...";var c=document.createElement("ol");i.append(c);for(var m,p=function(i){(m=document.createElement("li")).textContent=t.drinks[i].strDrink,c.append(m),m.style.cursor="pointer",m.onclick=function(){n.value=t.drinks[i].strDrink,r.style.display="none",function(t){var r="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(t);fetch(r).then((function(e){return e.json()})).then((function(t){console.log(t),l(),e&&e.setAttribute("style","display: none;"),function(e){console.log(e.drinks),n.value="";for(var t=0;t<16;t++)a.push(e.drinks[0]["strIngredient".concat(t)]),s.push(e.drinks[0]["strMeasure".concat(t)]);var r=a.filter((function(e){return null!=e})),i=s.filter((function(e){return null!=e})),o={name:e.drinks[0].strDrink,image:e.drinks[0].strDrinkThumb,instructions:e.drinks[0].strInstructions,ingredients:r,measurements:i,video:e.drinks[0].strVideo};console.log(o);var c=document.querySelector("#ingredientCard"),l=document.createElement("div");for(l.setAttribute("class","favoriteCard"),l.innerHTML=" <h2>".concat(o.name,'</h2>\n                            <img src="').concat(o.image,'"/>\n                            <p>').concat(o.instructions,"</p> "),c.appendChild(l),t=0;t<o.ingredients.length;t++){null==o.measurements[t]&&(o.measurements[t]="add");var m=document.createElement("li");m.innerHTML="".concat(o.measurements[t]," : ").concat(o.ingredients[t]),l.appendChild(m)}if(null===o.video)console.log("no video available");else{var p=document.createElement("a");p.href=o.video,p.target="_blank",p.textContent="Video",p.classList.add("video"),l.appendChild(p)}d(),u(o)}(t)}))}(n.value)}},v=0;v<t.drinks.length;v++)p(v);o.addEventListener("click",(function(){r.style.display="none"}))}else{console.log(t),n.value="";for(var f=0;f<16;f++)a.push(t.drinks[0]["strIngredient".concat(f)]),s.push(t.drinks[0]["strMeasure".concat(f)]);var k=a.filter((function(e){return null!=e})),h=s.filter((function(e){return null!=e})),g={name:t.drinks[0].strDrink,image:t.drinks[0].strDrinkThumb,instructions:t.drinks[0].strInstructions,ingredients:k,measurements:h,video:t.drinks[0].strVideo};console.log(g);var y=document.querySelector("#ingredientCard"),C=document.createElement("div");for(C.setAttribute("class","favoriteCard"),C.innerHTML=" <h2>".concat(g.name,'</h2>\n                            <img src="').concat(g.image,'"/>\n                            <p>').concat(g.instructions,"</p> "),y.appendChild(C),f=0;f<g.ingredients.length;f++){null==g.measurements[f]&&(g.measurements[f]="add");var E=document.createElement("li");E.innerHTML="".concat(g.measurements[f]," : ").concat(g.ingredients[f]),C.appendChild(E)}if(null===g.video)console.log("no video available");else{var b=document.createElement("a");b.href=g.video,b.target="_blank",b.textContent="Video",b.classList.add("video"),C.appendChild(b)}d(),u(g)}}(t)}))}))})();