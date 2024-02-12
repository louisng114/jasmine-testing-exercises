describe('submitPaymentInfo(evt)', function() {
  it ('should add rows to paymentTbody on submitPaymentInfo()', function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
      billAmtInput.value = 400;
      tipAmtInput.value = 50;
      submitPaymentInfo();
      const row0 = paymentTbody.rows[0].querySelectorAll('td');
      const row1 = paymentTbody.rows[1].querySelectorAll('td');

      expect(row0[0].innerText).toEqual('$100');
      expect(row0[1].innerText).toEqual('$20');
      expect(row0[2].innerText).toEqual('20%');
      expect(row1[0].innerText).toEqual('$400');
      expect(row1[1].innerText).toEqual('$50');
      expect(row1[2].innerText).toEqual('13%');
    });

    it ('should not add rows to paymentTbody on submitPaymentInfo() if billAmtInput or tipAmtInput is empty', function () {
      billAmtInput.value = '';
      tipAmtInput.value = 20;
      submitPaymentInfo();
      billAmtInput.value = 200;
      tipAmtInput.value = '';
      submitPaymentInfo();

      expect(paymentTbody.rows.length).toBe(0);
    });

    afterEach(function() {
      // clean-up logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
});

describe('createCurPayment()', function() {
    it('should return the correct object on createCurPayment()', function () {
      expect(createCurPayment()).toBe(undefined);
    });

    it('should return the correct object on createCurPayment()', function () {
      billAmtInput.value = 400;
      tipAmtInput.value = 50;

      expect(createCurPayment()).toEqual({billAmt : '400' , tipAmt : '50' , tipPercent : 13});
    });

    afterEach(function() {
      // clean-up logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
});

describe('appendPaymentTable(curPayment)', function() {
    it('should add row to paymentTbody on appendPaymentTable()', function () {
      paymentId = 3;
      curPayment = {billAmt : '400' , tipAmt : '50' , tipPercent : 13};
      appendPaymentTable(curPayment);
      const row0 = paymentTbody.rows[0].querySelectorAll('td');

      expect(row0[0].innerText).toEqual('$400');
      expect(row0[1].innerText).toEqual('$50');
      expect(row0[2].innerText).toEqual('13%');
    });

    afterEach(function() {
      // clean-up logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
});

describe('updateSummary()', function() {
    it ('should display 0 ammounts summaryTds on updateSummary()', function () {
      updateSummary();

      expect(summaryTds[0].innerHTML).toBe('$0');
      expect(summaryTds[1].innerHTML).toBe('$0');
      expect(summaryTds[2].innerHTML).toBe('0%');
    });

    it ('should add rows to summaryTds on updateSummary()', function () {
      allPayments['payment1'] = {billAmt : '100' , tipAmt : '20' , tipPercent : 20};
      allPayments['payment2'] = {billAmt : '400' , tipAmt : '50' , tipPercent : 13};
      updateSummary();

      expect(summaryTds[0].innerHTML).toBe('$500');
      expect(summaryTds[1].innerHTML).toBe('$70');
      expect(summaryTds[2].innerHTML).toBe('17%');
    });

    afterEach(function() {
      // clean-up logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
});