<template>
  <!-- <div class='main-container'>
    <p class='main-description'>
      <span>Vas a pagar el importe de S/ 200.</span>
      Selecciona el método de pago que quieras usar:
    </p>
    <div class='payment-methods' id='payment-methods'>
      <div class='payment-methods__method payment-methods__method--selected' id='payment-card' data-method='method-card'>
        <img src="./images/tarjeta.svg" alt="tarjeta">
        <span>Tarjeta de crédito o débito</span>
      </div>
      <div class='payment-methods__method' id='payment-digital' data-method='method-digital'>
        <img src="./images/digital.svg" alt="digital">
        <span>Pago digital a través de la App o Web de tu banco</span>
      </div>
      <div class='payment-methods__method' id='payment-agent' data-method='method-agent'>
        <img src="./images/agentes.svg" alt="agentes">
        <span>Pago presencial en agentes, agencias o establecimientos afiliados</span>
      </div>
    </div>
    <div class='method-card' id='method-card'> 
      <div class='method-card__images'> 
        <img src="./images/visa.svg" alt="visa"> 
        <img src="./images/mastercard.svg" alt="mastercard"> 
        <img src="./images/american-express.svg" alt="american-express">
        <img src="./images/diners.svg" alt="diners"> 
      </div> 
      <p class='method-card__description'> Recuerda que algunas tarjetas cuentan con el código de seguridad o 
      CVV Dinámico, consúltalo desde el App de tu banco.
      </p> 
      <div class='method-card__inputs'> 
        <input type="text" placeholder='Nombre del Titular'> 
        <input type="text" placeholder='Fecha de Expiración MM/AA'> 
        <input type="text" placeholder='Número de la Tarjeta'> 
        <input type="text" placeholder='Código de seguridad'> 
        <select name="" id=""> 
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select> 
      </div> 
      <button class='method-card__button' @click="pay"> Pagar </button> 
    </div> 
    <div class='method-digital' id='method-digital' style='display: none;'> 
      <div class='method-digital__images'> 
        <img src="./images/bbva.svg" alt="bbva"> 
        <img src="./images/bcp.svg" alt="bcp"> 
        <img src="./images/interbank.svg" alt="interbank">
        <img src="./images/scotiabank.svg" alt="scotiabank"> 
      </div> 
      <p class='method-digital__description'> En la App o Web de tu banco ingresa a la opción 
      <span>"Pago de Servicios"</span>, 
      busca <span>"Kashio"</span>, 
      coloca el código de pago que llegará a tu correo electrónico y realiza el pago. 
      </p>
      <button class='method-digital__button'> Genera tu código </button> 
    </div> 
    <div class='method-digital' id='method-agent' style='display: none;'> 
      <div class='method-digital__images'> 
        <img src="./images/bbva.svg" alt="bbva"> 
        <img src="./images/bcp.svg" alt="bcp"> 
        <img src="./images/interbank.svg" alt="interbank"> 
        <img src="./images/scotiabank.svg" alt="scotiabank"> 
        <img src="./images/tambo.svg" alt="tambo"> 
        <img src="./images/kasnet.svg" alt="kasnet"> 
      </div>
      <p class='method-digital__description'> 
      Paga en agentes, agencias o establecimientos afiliados con el código de referencia que llegará a tu correo electrónico,
      indicando que deseas pagar <span>"Kashio"</span>. 
      </p> <button class='method-digital__button'> Genera tu código </button>
    </div> 
  </div> -->


  <!-- open pay -->
  <!-- <form action="#" method="POST" id="payment-form">
    <input type="hidden" name="token_id" id="token_id">
      <div class="pymnt-itm card active">
          <h2>Tarjeta de crédito o débito</h2>
          <div class="pymnt-cntnt">
              <div class="card-expl">
                  <div class="credit"><h4>Tarjetas de crédito</h4></div>
                  <div class="debit"><h4>Tarjetas de débito</h4></div>
              </div>
              <div class="sctn-row">
                  <div class="sctn-col l">
                      <label>Nombre del titular</label><input type="text" placeholder="Como aparece en la tarjeta" autocomplete="off" data-openpay-card="holder_name">
                  </div>
                  <div class="sctn-col">
                      <label>Número de tarjeta</label><input type="text" autocomplete="off" data-openpay-card="card_number"></div>
                  </div>
                  <div class="sctn-row">
                      <div class="sctn-col l">
                          <label>Fecha de expiración</label>
                          <div class="sctn-col half l"><input type="text" placeholder="Mes" data-openpay-card="expiration_month"></div>
                          <div class="sctn-col half l"><input type="text" placeholder="Año" data-openpay-card="expiration_year"></div>
                      </div>
                      <div class="sctn-col cvv"><label>Código de seguridad</label>
                          <div class="sctn-col half l"><input type="text" placeholder="3 dígitos" autocomplete="off" data-openpay-card="cvv2"></div>
                      </div>
                  </div>
                  <div class="openpay"><div class="logo">Transacciones realizadas vía:</div>
                  <div class="shield">Tus pagos se realizan de forma segura con encriptación de 256 bits</div>
              </div>
              <div class="sctn-row">
                      <a class="button rght" id="pay-button" @click="pay()">Pagar</a>
              </div>
          </div>
      </div>
  </form> -->

    <div class="bkng-tb-cntnt">
        <div class="pymnts">
            <form action="#" method="POST" id="payment-form">
                <input type="hidden" name="token_id" id="token_id">
                <div class="pymnt-itm card active">
                    <h2>Tarjeta de crédito o débito</h2>
                    <div class="pymnt-cntnt">
                        <div class="card-expl">
                            <div class="credit"><h4>Tarjetas de crédito</h4></div>
                            <div class="debit"><h4>Tarjetas de débito</h4></div>
                        </div>
                        <div class="sctn-row">
                            <div class="sctn-col l">
                                <label>Nombre del titular</label><input type="text" placeholder="Como aparece en la tarjeta" autocomplete="off" data-openpay-card="holder_name" value="Juan Perez Ramirez">
                              </div>
                            <div class="sctn-col">
                                <label>Número de tarjeta</label><input type="text" autocomplete="off" data-openpay-card="card_number" value="4111111111111111"></div>
                            </div>
                            <div class="sctn-row">
                                <div class="sctn-col l">
                                    <label>Fecha de expiración</label>
                                    <div class="sctn-col half l"><input type="text" placeholder="Mes" data-openpay-card="expiration_month" value="12"></div>
                                    <div class="sctn-col half l"><input type="text" placeholder="Año" data-openpay-card="expiration_year" value="20"></div>
                                </div>
                                <div class="sctn-col cvv"><label>Código de seguridad</label>
                                    <div class="sctn-col half l"><input type="text" placeholder="3 dígitos" autocomplete="off" data-openpay-card="cvv2" value="110"></div>
                                </div>
                            </div>
                            <div class="openpay"><div class="logo">Transacciones realizadas vía:</div>
                            <div class="shield">Tus pagos se realizan de forma segura con encriptación de 256 bits</div>
                        </div>
                        <div class="sctn-row">
                                <a class="button rght" id="pay-button" @click="pay()">Pagar</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue"

const deviceSessionId = ref('')
onBeforeMount(() => {
  window.OpenPay.setId('mrvfi7f4rsnkp9egkous')
  window.OpenPay.setApiKey('sk_4760ff211613450e956d470dfa544929')
  deviceSessionId.value = window.OpenPay.deviceData.setup("payment-form", "deviceIdHiddenFieldName")
  console.log('device session id: ', deviceSessionId.value)
})

const success_callbak = (response: any) => {
  const token_id = response.data.id
  $('#token_id').val(token_id)
  $('#payment-form').submit()
}

const error_callbak = (response: any) => {
  const desc = response.data.description != undefined ?response.data.description : response.message
  alert("ERROR [" + response.status + "] " + desc)
  $("#pay-button").prop("disabled", false)
}

onMounted(() => {
  window.OpenPay.setId('mzdtln0bmtms6o3kck8f')
  window.OpenPay.setApiKey('pk_f0660ad5a39f4912872e24a7a660370c')
  window.OpenPay.setSandboxMode(true)
})

const pay = () => {
  debugger
  return window.OpenPay.token.extractFormAndCreate('payment-form', success_callbak, error_callbak)
}
</script>

<style scoped>
@charset "US-ASCII";
@import "http://fonts.googleapis.com/css?family=Lato:300,400,700";
* {
    color: #444;
    font-family: Lato;
    font-size: 16px;
    font-weight: 300;
}
::-webkit-input-placeholder {
   font-style: italic;
}
:-moz-placeholder {
   font-style: italic;
}
::-moz-placeholder {
   font-style: italic;
}
:-ms-input-placeholder {  
   font-style: italic;
}

body {
    float: left;
    margin: 0;
    padding: 0;
    width: 100%;
}
strong {
	font-weight: 700;
}
a {
    cursor: pointer;
    display: block;
    text-decoration: none;
}
a.button {
    border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    text-align: center;
    font-size: 21px;
    font-weight: 400;
    padding: 12px 0;
    width: 100%;
    display: table;
    background: #E51F04;
    background: -moz-linear-gradient(top,  #E51F04 0%, #A60000 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#E51F04), color-stop(100%,#A60000));
    background: -webkit-linear-gradient(top,  #E51F04 0%,#A60000 100%);
    background: -o-linear-gradient(top,  #E51F04 0%,#A60000 100%);
    background: -ms-linear-gradient(top,  #E51F04 0%,#A60000 100%);
    background: linear-gradient(top,  #E51F04 0%,#A60000 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E51F04', endColorstr='#A60000',GradientType=0 );
}
a.button i {
    margin-right: 10px;
}
a.button.disabled {
    background: none repeat scroll 0 0 #ccc;
    cursor: default;
}
.bkng-tb-cntnt {
    float: left;
    width: 800px;
}
.bkng-tb-cntnt a.button {
    color: #fff;
    float: right;
    font-size: 18px;
    padding: 5px 20px;
    width: auto;
}
.bkng-tb-cntnt a.button.o {
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0);
    color: #e51f04;
    border: 1px solid #e51f04;
}
.bkng-tb-cntnt a.button i {
    color: #fff;
}
.bkng-tb-cntnt a.button.o i {
    color: #e51f04;
}
.bkng-tb-cntnt a.button.right i {
    float: right;
    margin: 2px 0 0 10px;
}
.bkng-tb-cntnt a.button.left {
    float: left;
}
.bkng-tb-cntnt a.button.disabled.o {
    border-color: #ccc;
    color: #ccc;
}
.bkng-tb-cntnt a.button.disabled.o i {
    color: #ccc;
}
.pymnts {
    float: left;
    width: 800px;
}
.pymnts * {
    float: left;
}

.sctn-row {
    margin-bottom: 35px;
    width: 800px;
}
.sctn-col {
    width: 375px;
}
.sctn-col.l {
    width: 425px;
}
.sctn-col input {
    border: 1px solid #ccc;
    font-size: 18px;
    line-height: 24px;
    padding: 10px 12px;
    width: 333px;
}
.sctn-col label {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 10px;
    width: 100%;
}
.sctn-col.x3 {
    width: 300px;
}
.sctn-col.x3.last {
    width: 200px;
}
.sctn-col.x3 input {
    width: 210px;
}
.sctn-col.x3 a {
    float: right;
}
.pymnts-sctn {
    width: 800px;
}
.pymnt-itm {
    margin: 0 0 3px;
    width: 800px;
}
.pymnt-itm h2 {
    background-color: #e9e9e9;
    font-size: 24px;
    line-height: 24px;
    margin: 0;
    padding: 28px 0 28px 20px;
    width: 780px;
}
.pymnt-itm.active h2 {
    cursor: default;
}
.pymnt-itm div.pymnt-cntnt {
    display: none;
}
.pymnt-itm.active div.pymnt-cntnt {
    background-color: #f7f7f7;
    display: block;
    padding: 0 0 30px;
    width: 100%;
}

.pymnt-cntnt div.sctn-row {
    margin: 20px 30px 0;
    width: 740px;
}
.pymnt-cntnt div.sctn-row div.sctn-col {
    width: 345px;
}
.pymnt-cntnt div.sctn-row div.sctn-col.l {
    width: 395px;
}
.pymnt-cntnt div.sctn-row div.sctn-col input {
    width: 303px;
}
.pymnt-cntnt div.sctn-row div.sctn-col.half {
    width: 155px;
}
.pymnt-cntnt div.sctn-row div.sctn-col.half.l {
    float: left;
    width: 190px;
}
.pymnt-cntnt div.sctn-row div.sctn-col.half input {
    width: 113px;
}
.pymnt-cntnt div.sctn-row div.sctn-col.cvv {
    background-image: url("./cvv.png");
    background-position: 156px center;
    background-repeat: no-repeat;
    padding-bottom: 30px;
}
.pymnt-cntnt div.sctn-row div.sctn-col.cvv div.sctn-col.half input {
    width: 110px;
}
.openpay {
    float: right;
    height: 60px;
    margin: 10px 30px 0 0;
    width: 435px;
}
.openpay div.logo {
    background-image: url("./openpay.png");
    background-position: left bottom;
    background-repeat: no-repeat;
    border-right: 1px solid #ccc;
    font-size: 12px;
    font-weight: 400;
    height: 45px;
    padding: 15px 20px 0 0;
}
.openpay div.shield {
    background-image: url("./security.png");
    background-position: left bottom;
    background-repeat: no-repeat;
    font-size: 12px;
    font-weight: 400;
    margin-left: 20px;
    padding: 20px 0 0 40px;
    width: 200px;
}
.card-expl {
    float: left;
    height: 80px;
    margin: 20px 0;
    width: 800px;
}
.card-expl div {
    background-position: left 45px;
    background-repeat: no-repeat;
    height: 70px;
    padding-top: 10px;
}
.card-expl div.debit {
    background-image: url("./cards2.png");
    margin-left: 20px;
    width: 540px;
}
.card-expl div.credit {
    background-image: url("./cards1.png");
    border-right: 1px solid #ccc;
    margin-left: 30px;
    width: 209px;
}
.card-expl h4 {
    font-weight: 400;
    margin: 0;
}
</style>