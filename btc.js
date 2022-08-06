const axios = require('axios');

const main = async () => {
    const currency = process.argv[2] ? process.argv[2].toUpperCase() : 'EUR';

    try {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const { data } = await axios.get(url);

        // console.log(data);

        if (!data.bpi[currency]) {
            throw new Error(`La monnaie: ${currency} est inconnue`);
        }
        
        const updatedAt = data.time.updated;
        const rate = data.bpi[`${currency}`].rate;
        console.log(`> 1 Bit Coin = ${rate} ${currency} (${updatedAt})`);
    } catch (err) {
        console.error(err.toString());
    }
}

main();