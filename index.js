var noble = require('noble')

noble.on('stateChange', function(state) {
  console.log('state:', state)
  if (state === 'poweredOn') {
    noble.startScanning()
    console.log('Started scanning')
  }
})

noble.on('discover', function(peripheral) {
  console.log('discovered:', peripheral.id, peripheral.advertisement.localName)
})
