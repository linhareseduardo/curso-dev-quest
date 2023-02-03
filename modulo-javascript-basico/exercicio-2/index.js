let boletoPago = true

if(boletoPago){
    console.log('O boleto está pago')
}else{
    console.log('O boleto não está pago')
}

boletoPago = false

boletoPago ? console.log('O boleto está pago') : console.log('O boleto não está pago')