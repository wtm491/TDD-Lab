
describe("tests for change-handler", function() {

    
    it("*insertCoin function:", function() {
     
        let changeHandler = new ChangeHandler(0,0);
        expect(changeHandler.insertCoin(`quarter`)).toBe(25);
        
    });


    it("*isPaymentSufficient function:", function() {
     
        let changeHandler = new ChangeHandler(20,30);
        expect(changeHandler.isPaymentSufficient()).toBe(true);
    });


    it("*giveChange function:", function() {
      
        let changeHandler = new ChangeHandler(100,126);
        expect(changeHandler.giveChange()).toEqual({quarters: 1, dimes: 0,nickels: 0, pennies: 1
        });
    
    });


});