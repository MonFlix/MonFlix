
const persons = [

    {name:'Manifest (https://mon-flix.tk/manifest.html)'},
    {name:'La Vie Scolaire (https://uqload.org/wfpmo6qahho7.html)'},
    {name: 'BlackPanther (https://uqload.org/q07ao200eds3.html)'},
    {name:'BlackPanther Wakanda For Ever (https://uqload.org/ej2yyguqw83i.html)'},
    {name:'Athena (https://uqload.org/xopjmbgwnc1t.html)'},
    {name:'Dahmer (https://mon-flix.tk/dahmer.html)'},
    {name:'Black Adam (https://sblongvu.com/e/czqd9p0hkvu0)'},
    {name:'Wednesday (https://mon-flix.tk/wednesday.html)'},
    {name:'Mercredi (https://mon-flix.tk/wednesday.html)'},
    {name: 'Black Panther (https://uqload.org/q07ao200eds3.html)'},
    {name:'Black Panther Wakanda For Ever (https://uqload.org/ej2yyguqw83i.html)'},
    {name:'A l ouest rien de nouveau(https://sblongvu.com/e/fugkxxomeeft)'},
    {name:'All Of Us(https://mon-flix.tk/allofus.html)'}



];

const searchinput = document.getElementById('searchInput');

searchinput.addEventListener('keyup', function(){
    const input = searchinput.value;

    const result = persons.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

    let suggestion = '';

    if(input !=''){
    
    result.forEach(resultItem =>
        suggestion +=`
        <div class="suggestion">${resultItem.name}</div>
        `
        )
    }

        document.getElementById('suggestions').innerHTML = suggestion;
})
