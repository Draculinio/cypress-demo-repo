
describe('Bitcoin prices API', ()=>{
    it('Verify schema validator', ()=>{
        cy.request({
            method:'GET',
            'url':'https://api.coindesk.com/v1/bpi/currentprice.json',
            headers: {},
            failOnStatusCode: false,
        }).then(response=>{
            expect(response.status).to.eq(200)
            console.log(response.body)
            cy.fixture("bitcoin_schema").then((b)=>{
                expect(response.body).to.be.jsonSchema(b)
            })
        })
    })
})