<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 text-center bg-white shadow-lg rounded-lg">
      <div
        class="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"
      >
        <header class="flex flex-col justify-center items-center">
          <div v-show="card === 'front'" class="relative">
            <img
              class="w-full h-auto"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
              alt="front credit card"
            />
            <div
              class="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12"
            >
              <p class="number mb-5 sm:text-xl">
                {{
                  cardData.cardNumber !== ""
                    ? cardData.cardNumber
                    : "0000-0000-0000-0000"
                }}
              </p>
              <div class="flex flex-row justify-between">
                <p>
                  {{
                    cardData.cardholder !== ""
                      ? cardData.cardholder
                      : "Card holder"
                  }}
                </p>
                <div class="">
                  <span>{{ cardData.expired.month }}</span>
                  <span v-if="cardData.expired.month !== ''">/</span>
                  <span>{{ cardData.expired.year }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-show="card === 'back'" class="relative">
            <img
              class="w-full h-auto"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
              alt="back credit card"
            />
            <div
              class="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12"
            >
              <div
                class="border border-white w-16 h-9 flex justify-center items-center"
              >
                <p>
                  {{
                    cardData.securityCode !== ""
                      ? cardData.securityCode
                      : "code"
                  }}
                </p>
              </div>
            </div>
          </div>
          <ul class="flex">
            <li class="mx-2">
              <img
                class="w-16"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                alt=""
              />
            </li>
            <li class="mx-2">
              <img
                class="w-14"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                alt=""
              />
            </li>
            <li class="ml-5">
              <img
                class="w-7"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                alt=""
              />
            </li>
          </ul>
        </header>
        <main class="mt-4 p-4">
          <h1 class="text-xl font-semibold text-gray-700 text-center">
            MONTO / MONEDA
          </h1>
          <div class="my-3">
            <input
              v-model="amount"
              type="number"
              class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Amount"
            />
          </div>
          <div class="my-3">
            <select
              v-model="currency"
              class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            >
              <option value="" selected disabled>Currency</option>
              <option value="USD">USD</option>
              <option value="PEN">PEN</option>
              <option value="MXN">MXN</option>
            </select>
          </div>
          <h1 class="text-xl font-semibold text-gray-700 text-center">
            Card payment
          </h1>
          <div class="my-3">
            <input
              v-model="cardData.cardholder"
              type="text"
              class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Card holder"
              maxlength="22"
            />
          </div>
          <div class="my-3">
            <input
              v-model="cardData.cardNumber"
              type="text"
              class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Card number"
              maxlength="19"
              @keydown="format"
              @keyup="format"
            />
          </div>
          <div class="my-3 flex flex-col">
            <div class="mb-2">
              <label class="text-gray-700"
                >{{ cardData.expired.month }} /
                {{ cardData.expired.year }}</label
              >
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <select
                v-model="cardData.expired.month"
                class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              >
                <option value="" selected disabled>MM</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                v-model="cardData.expired.year"
                class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              >
                <option value="" selected disabled>YY</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
                <option value="27">2027</option>
                <option value="28">2028</option>
                <option value="29">2029</option>
              </select>
              <input
                v-model="cardData.securityCode"
                type="text"
                class="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Security code"
                maxlength="4"
                @focus="card = 'back'"
                @blur="card = 'front'"
              />
            </div>
          </div>
        </main>
        <footer class="mt-6 p-4">
          <button
            class="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
            :disabled="false"
            @click="onSubmit"
          >
            Pay now
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cardData: {
        cardholder: "",
        cardNumber: "",
        expired: {
          month: "",
          year: "",
        },
        securityCode: "",
        email: "agrimaldopci18@gmail.com",
      },
      amount: 100,
      currency: "PEN",
      description: "Pago de prueba",
      card: "front",
      openpay: {
        token: "",
        endpoint_sandbox_openpay: "https://sandbox-api.openpay.pe/v1/",
        endpoint_payment: "/charge",
        deviceSessionId: "",
        openpay_id: "mhn6hsjlwdbeksjbk8v3",
        openpay_key: "pk_7c145f64092b4381bee18cdd92b353d4",
        openpay_sandbox_mode: true,
      },
    };
  },
  // mounted() {
  //     OpenPay.setId(import.meta.env.VITE_OPENPAY_ID);
  //     OpenPay.setApiKey(import.meta.env.VITE_OPENPAY_PK);
  //     OpenPay.setSandboxMode(import.meta.env.VITE_OPENPAY_SANDBOX_MODE === 'true');
  //     this.openpay.deviceSessionId = OpenPay.deviceData.setup();
  // },
  computed: {
    isValid() {
      if (this.cardData.cardholder.length < 5) {
        return false;
      }
      if (this.cardData.cardNumber.replace(/\s/g, "").length <= 12) {
        return false;
      }
      if (
        this.cardData.expired.month === "" ||
        this.cardData.expired.year === ""
      ) {
        return false;
      }
      if (this.cardData.securityCode.length < 3) {
        return false;
      }
      return true;
    },
  },
  methods: {
    format() {
      this.cardData.cardNumber = this.cardData.cardNumber
        .replace(/\W/gi, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    },
    noSpaces() {
      return this.cardData.cardNumber.replace(/\s/g, "");
    },
    onSubmit() {
      this.pay();
    },
    async pay() {
      const card_number = this.noSpaces();
      try {
        // generate token to perform the charge
        // const tokenResponse = await new Promise((resolve, reject) => {
        //     OpenPay.token.create({
        //         "holder_name": this.cardData.cardholder,
        //         "card_number": card_number,
        //         "cvv2": this.cardData.securityCode,
        //         "expiration_month": this.cardData.expired.month,
        //         "expiration_year": this.cardData.expired.year
        //     }, resolve, reject);
        // });

        // this.openpay.token = tokenResponse.data.id;

        // if (this.openpay.token) {
        // payment in OpenPay
        console.log(this.openpay.token, "Token obtenido:");
        const data = {
          card_number: "4111111111111111",
          holder_name: "Juan Perez Ramirez",
          expiration_year: "24",
          expiration_month: "12",
          cvv2: "110",
          address: {
            city: "Querétaro",
            country_code: "MX",
            postal_code: "76900",
            line1: "Av 5 de Febrero",
            line2: "Roble 207",
            line3: "col carrillo",
            state: "Queretaro",
          },
        };
        const apiKey = "sk_4760ff211613450e956d470dfa544929";
        const auth = { username: apiKey, password: "" };
        const headers = {
          withCredentials: true,
          crossOriginIsolated: "same-origin",
        };
        // const paymentResponse = await axios
        //   .post(
        //     "https://sandbox-api.openpay.pe/v1/mrvfi7f4rsnkp9egkous/tokens",
        //     data,
        //     {
        //       headers,
        //     }
        //   )
        //   .then((response) => {
        //     console.log("Respuesta exitosa:", response.data);
        //   });
        const paymentResponse = await axios
          .get("https://thr-backend.camionerosperuanos.org/api/product", {
            headers,
          })
          .then((response) => {
            console.log("Respuesta exitosa:", response.data);
          });
        alert(`You did it ${this.cardData.cardholder}.`);
        console.log(paymentResponse);
        // }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
  -webkit-tap-highlight-color: transparent;
}

.submit-button:disabled {
  cursor: not-allowed;
  background-color: #d1d5db;
  color: #111827;
}

.submit-button:disabled:hover {
  background-color: #9ca3af;
}

.credit-card {
  max-width: 420px;
  margin-top: 3rem;
}

@media only screen and (max-width: 420px) {
  .credit-card .front {
    font-size: 100%;
    padding: 0 2rem;
    bottom: 2rem !important;
  }

  .credit-card .front .number {
    margin-bottom: 0.5rem !important;
  }
}
</style>
