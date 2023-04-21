const { spec } = require('pactum');
const moment = require('moment');

describe("Realizando alguns testes automatizados na API DA NASA, apelas para testes", () => {

    var date = moment().add('days').format('YYYY-MM-DD');
    
    it('Realizando consulta da Imagem Astronomica do dia ', async () => {
        await spec()
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .expectBodyContains("date")
            .expectStatus(200);
    });
})

