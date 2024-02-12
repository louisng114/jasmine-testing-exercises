describe('sumPaymentTotal(type)', function() {
    beforeEach(function () {
      // initialization logic
      allPayments['payment1'] = {billAmt : '100' , tipAmt : '20' , tipPercent : 20};
      allPayments['payment2'] = {billAmt : '400' , tipAmt : '50' , tipPercent : 13};
    });

    it ('should compute billAmt total with sumPaymentTotal("billAmt")', function() {
        expect(sumPaymentTotal("billAmt")).toBe(500);
      });
  
    it ('should compute tipAmt total with sumPaymentTotal("tipAmt")', function() {
      expect(sumPaymentTotal("tipAmt")).toBe(70);
    });

    it ('should compute tipPercent total with sumPaymentTotal("tipPercent")', function() {
        expect(sumPaymentTotal("tipPercent")).toBe(33);
    });

    afterEach(function() {
      // clean-up logic
      allPayments = {}
    });
});

describe('calculateTipPercent(billAmt, tipAmt)', function() {
    it ('should calculate percentages with calculateTipPercent(billAmt, tipAmt)', function() {
      expect(calculateTipPercent(100, 20)).toBe(20);
      expect(calculateTipPercent(400, 50)).toBe(13);
      expect(calculateTipPercent(700, 10)).toBe(1);
    });
});

describe('appendTd(tr, value)', function() {
    it ('should append td to tr with appendTd(tr, value)', function() {
      const testTr = document.createElement('tr');
      appendTd(testTr, 'Hello!');

      expect(testTr.innerText).toBe("Hello!");
    });
});

describe('appendDeleteBtn(tr)', function() {
    it ('should append remove button to tr with appendDeleteBtn(tr)', function() {
      const testTr = document.createElement('tr');
      appendDeleteBtn(testTr);

      expect(testTr.children[0].innerText).toBe("X");
    });
});
  