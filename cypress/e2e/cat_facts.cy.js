describe('Cat Facts API', ()=>{
    it('Verify schema validator', ()=>{
        cy.request({
            method:'GET',
            'url':'https://catfact.ninja/fact',
            headers: {},
            failOnStatusCode: false,
        }).then(response=>{
            expect(response.status).to.eq(200)
            console.log(response.body)
            cy.fixture("cat_facts_schema").then((b)=>{
                expect(response.body).to.be.jsonSchema(b)
            })
        })
    })
    it('verify length field', ()=>{
        cy.request({
            method:'GET',
            'url':'https://catfact.ninja/fact',
            headers: {},
            failOnStatusCode: false,
        }).then(response=>{
            expect(response.status).to.eq(200)
            console.log(response.body)
            expect(response.body['length']).to.eq(response.body['fact'].length)
        })
    })
})