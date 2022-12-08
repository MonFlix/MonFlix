
const persons = [

    {name:'Manifest (https://mon-flix.tk/manifest.html)'},
    {name:'La Vie Scolaire (https://uqload.org/wfpmo6qahho7.html)'},
    {name: 'BlackPanther (https://uqload.org/q07ao200eds3.html)'},
    {name:'BlackPanther Wakanda For Ever (https://uqload.org/ej2yyguqw83i.html)'},
    {name:'Athena (https://uqload.org/xopjmbgwnc1t.html)'},
    {name:'Dahmer (https://mon-flix.tk/dahmer.html)'},
    {name:'Black Adam (https://uqload.com/7usky268hrxv.html)'},
    {name:'Wednesday (https://mon-flix.tk/wednesday.html)'},
    {name:'Mercredi (https://mon-flix.tk/wednesday.html)'},
    {name: 'Black Panther (https://uqload.org/q07ao200eds3.html)'},
    {name:'Black Panther Wakanda For Ever (https://uqload.org/ej2yyguqw83i.html)'},
    {name:'All Of Us(https://mon-flix.tk/allofus.html)'},
    {name:'Outer Banks(https://mon-flix.tk/outerbanks.html)'},
    {name:'Smile(https://uqload.com/s31n1xb41st2.html)'},
    {name:'Spider Man Now Way Home(https://uqload.com/grtgvtfrp8dh.html)'},
    {name:'Doctor Strange(https://cdn2.lazonee.com/5315a398dbda4467a0782045e8b331e6:fv7a2oaud85fms988fq9osqld7dd0ph60kb4aq2/DoctorStrange/02.mp4)'},
    {name:'Joker(https://uqload.com/5twvd7src0za.html)'}*
    {name:'Comment Elever Un Super Heros(https://mon-flix.tk/comment_elever_un_super_heros.html)'}







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
