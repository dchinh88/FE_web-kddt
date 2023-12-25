<template>
  <v-row align="center" justify="center" class="mt-3 mb-3 mr-3 ml-3">
    <v-col cols="auto">
      <v-card
        class="mx-auto"
        max-width="344"
        title="Sản phẩm"
        subtitle="Tất cả sản phẩm"
        prepend-icon="mdi-cellphone"
        append-icon="mdi-check"
      >
        <v-card-text>{{ this.listProduct.length }} Sản phẩm</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card
        class="mx-auto"
        max-width="344"
        title="Nhân viên"
        subtitle="Tất cả nhân viên"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-account" color="primary"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon icon="mdi-check" color="success"></v-icon>
        </template>
        <v-card-text>{{ this.listStaff.length }} Nhân viên</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card
        class="mx-auto"
        max-width="344"
        title="Khách hàng"
        subtitle="Tất cả khách hàng"
        
      >
      <template v-slot:prepend>
          <v-icon icon="mdi-account-credit-card" color="primary"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon icon="mdi-check" color="success"></v-icon>
        </template>
      <!-- prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
        append-avatar="https://cdn.vuetifyjs.com/images/john.jpg" -->
        <v-card-text>{{ this.listCustomer.length }} Khách hàng</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card
        class="mx-auto"
        max-width="344"
        title="Doanh thu"
        subtitle="money"
      >
      <template v-slot:prepend>
          <v-icon icon="mdi-cash" color="primary"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon icon="mdi-check" color="success"></v-icon>
        </template>
        <!-- <template v-slot:prepend>
          <v-avatar color="blue-darken-2">
            <v-icon icon="mdi-alarm"></v-icon>
          </v-avatar>
        </template>
        <template v-slot:append>
          <v-avatar size="24">
            <v-img
              src="https://cdn.vuetifyjs.com/images/john.png"
              alt="John"
            ></v-img>
          </v-avatar>
        </template> -->
        <v-card-text>Doanh thu: {{ formatMoney(totalMoney) }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
import numeral from 'numeral'
export default {
  data() {
    return {
      listProduct: [],
      listStaff: [],
      listCustomer: [],
      listBillInfo: []
    }
  },
  methods: {
    getAllProduct() {
      axios.get('https://localhost:7266/api/SanPham')
      .then(response => this.listProduct = response.data)
      .catch(e => e)
    },
    getAllStaff() {
      axios.get('https://localhost:7266/api/NhanVien')
      .then(response => this.listStaff = response.data)
      .catch(e => e)
    },
    getAllCustomer() {
      axios.get('https://localhost:7266/api/Khachhang')
      .then(response => this.listCustomer = response.data)
      .catch(e => e)
    },
    getAllBillInfo() {
      axios.get('https://localhost:7266/api/Chitiethoadon')
      .then(response => this.listBillInfo = response.data)
      .catch(e => e)
    },
    formatMoney(money) {
      return numeral(money).format('0,0') + ' ₫'
    }
  },
  created() {
    this.getAllProduct()
    this.getAllStaff()
    this.getAllCustomer()
    // this.listBillInfo()
    this.getAllBillInfo()
  },
  computed: {
    totalMoney() {
      var money = this.listBillInfo.map(c => c.thanhtien)
      // var total = total + money
      var total = money.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0)
      return total
    }
  }
}
</script>

<style>

</style>