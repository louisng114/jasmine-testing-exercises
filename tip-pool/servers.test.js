describe('Servers test (with setup and tear-down)', function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    submitServerInfo();
    serverNameInput.value = 'Bob';
    submitServerInfo();
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    expect(Object.keys(allServers).length).toEqual(2);
    expect(allServers['server' + 1].serverName).toEqual('Alice');
    expect(allServers['server' + serverId].serverName).toEqual('Bob');
  });

  it('should increment the serverId on submitServerInfo()', function () {
    expect(serverId).toBe(2);
  });

  it('should empty serverNameInput on submitServerInfo()', function () {
    expect(serverNameInput.value).toBe('');
  });

  it('should ignore empty name on submitServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(2);
    expect(allServers['server' + 1].serverName).toEqual('Alice');
    expect(allServers['server' + serverId].serverName).toEqual('Bob');
  });

  it('should update serverTbody on submitServerInfo()', function () {
    const row0 = serverTbody.rows[0].querySelectorAll('td');
    const row1 = serverTbody.rows[1].querySelectorAll('td');

    expect(serverTbody.rows.length).toBe(2);
    expect(row0[0].innerText).toBe('Alice');
    expect(row0[1].innerText).toBe('$0.00');
    expect(row1[0].innerText).toBe('Bob');
    expect(row1[1].innerText).toBe('$0.00');
  });

  afterEach(function() {
    // clean-up logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
