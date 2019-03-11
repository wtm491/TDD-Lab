class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      if (type === 'penny') {
        this.cashTendered += 1;
        return this.cashTendered;
      }
      
      if (type === 'nickel') {
        this.cashTendered += 5;
        return this.cashTendered;
      }

      if (type === 'dime') {
        this.cashTendered += 10;
        return this.cashTendered;
      }

      if (type === 'quarter') {
        this.cashTendered += 25;
        return this.cashTendered;
      }
    }


    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      if (this.cashTendered >= this.amountDue) {
        return true;
      } else {
        return false;
      }
    }

    giveChange() {
      
      let amountDue = this.amountDue; 
      let amountTendered = this.cashTendered

      let quarters = 0;
      let dimes = 0;
      let nickels = 0;
      let pennys = 0;
      
      
      if (amountTendered === amountDue) { 
      } else if (amountTendered > amountDue) {
  
    


        let overPayment = amountTendered - amountDue;
        
        if ( (overPayment/25) === 1) {
          quarters = 1;
          overPayment = overPayment - 25;
        } else if ( (overPayment % 25) === 0) {
          let getQuarterCount = overPayment / 25;
          quarters = getQuarterCount;
          overPayment -= (getQuarterCount * 25);
        } else if ( (overPayment / 25) > 1 ) {
          let divisionResult = Math.floor(overPayment/25);
          quarters = divisionResult;
          overPayment = overPayment - (divisionResult * 25);
        }
        

  
        if ( (overPayment/10) === 1) {
          dimes = 1;
          overPayment -= 10;
        } else if ( (overPayment % 10) === 0) {
          let getDimeCount = overPayment / 10;
          dimes = getDimeCount;
          overPayment -= (getDimeCount * 10);
        } else if ( (overPayment / 10) > 1 ) {
          let divisionResult = Math.floor(overPayment/10);
          dimes = divisionResult;
          overPayment -= (divisionResult * 10);
        } 
        
    
        
        if ( (overPayment/5) === 1) {
          nickels = 1;
          overPayment -= 5;
        } else if ( (overPayment % 5) === 0) {
          let getNickelCount = overPayment / 5;
          nickels = getNickelCount;
          overPayment -= (getNickelCount * 5);
        } else if ( (overPayment / 5) > 1 ) {
          let divisionResult = Math.floor(overPayment/5);
          nickels = divisionResult;
          overPayment -= (divisionResult * 5);
        } 
        
        pennys = overPayment;
        
      }

      return {
        quarters: quarters,
        dimes: dimes,
        nickels: nickels,
        pennys: pennys
      }
  
  
    }
}