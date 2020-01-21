describe('Routes: products', () => { //general responsability described
    //fake desfault product as constant
    const defaultProduct = {
        name: 'Default Product',
        description: 'product description',
        price: 100
    }
    
    describe('GET /products', () => {
        it('should return a list of products', done /*must use on assincronus funcs like requests*/ => {
            request
            .get('/products')
            .end((err, res) => {
                expect(res.body[0]).to.eql(defaultProduct)
                done(err)
            })
        })
    })
})