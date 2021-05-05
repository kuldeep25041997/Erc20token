const Erc20token = artifacts.require('Erc20token');


contract('Erc20token', () => {
    let token;
    const _name = "Kuldeep";
    const _symbol = "SIM";

    beforeEach(async function() {
        token = await Erc20token.new(_name, _symbol);
    })

    it('has a name', async () => {
        const name = await token.name();
        assert.equal(name, _name);
        console.log(_name);
    })
    it('has a symbol', async () => {
        const name = await token.name();
        assert.equal(name, _name);
        console.log(_name);
    })


})