
async function loadJsonData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network response was not ok. Status code: ' + response.status);
    }

    return await response.json();
}

function toDataSet(json) {
    let result = [];

    for (let i = 0; i < json.length; i++) {
        const rarity = json[i].rarity || 1;
        for (let j = 0; j < rarity; j++) {
            result.push(json[i])
        }
    }

    return result
}

const dataSets = {
    items: [
        'foo',
        'bar',
    ],
    events: [
        'foo',
        'bar',
    ],
    coin: [
        {title: 'Орёл',  image: '/coins/russia-100-rubles-1993-ob.png'},
        {title: 'Решка', image: '/coins/russia-100-rubles-1993-rev.png'},
        {title: 'Орёл',  image: '/coins/russia-100-rubles-1993-ob.png'},
        {title: 'Решка', image: '/coins/russia-100-rubles-1993-rev.png'},
        {title: 'Орёл',  image: '/coins/russia-100-rubles-1993-ob.png'},
        {title: 'Решка', image: '/coins/russia-100-rubles-1993-rev.png'},
        {title: 'Орёл',  image: '/coins/russia-100-rubles-1993-ob.png'},
        {title: 'Решка', image: '/coins/russia-100-rubles-1993-rev.png'},
        {title: 'Орёл',  image: '/coins/russia-100-rubles-1993-ob.png'},
        {title: 'Решка', image: '/coins/russia-100-rubles-1993-rev.png'},
        {title: 'Ребро', image: '/coins/coin-gurt.png'},
    ],
};

loadJsonData('wheel-items.json')
    .then(json => {
        dataSets.items = toDataSet(json);
    })
    .catch(error => {
        console.error(error);
    })
;

