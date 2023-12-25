<template>
  <div>
    <h1>Customer</h1>
    <v-row class="mt-3">
      <v-col>
        <v-card>
          <v-table>
            <thead>
              <tr>
                <th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(customer, index) in listCustomer" :key="index">
                <td>{{ customer.makhachhang }}</td>
                <td>{{ customer.tenkhachhang }}</td>
                <td>{{ customer.diachi }}</td>
                <td>{{ customer.sdt }}</td>
                <td>{{ customer.email }}</td>
                <td>
                  <v-btn>Edit</v-btn>
                  <v-btn @click="deleteCustomer">Delete</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      listCustomer: [],
      listBill: [],
      idCus: ''
      // id: ''
    }
  },
  methods: {
    getAllCustomer() {
      axios.get('https://localhost:7266/api/Khachhang')
      .then(response => this.listCustomer = response.data)
      .catch(e => e)
    },
    deleteCustomer() {
      axios.delete('https://localhost:7266/api/Khachhang/' + this.idCus)
      .then(response => {
        var newArr = this.listCustomer.filter(c => c.id !== this.idCus)
        this.listCustomer = newArr
        console.log(response.status);
      })
      .catch(e => e)
    },
    getAllBill() {
      axios.get('https://localhost:7266/api/Hoadon')
      .then(response => this.listBill = response.data)
      .catch(e => e)
    },
    deleteBill() {
      axios.delete('https://localhost:7266/api/Hoadon/' + this.getIdBill())
      .then(response => {
        var newArr = this.listBill.filter(c => c.id !== this.getIdBill())
        this.listBill = newArr
        console.log(response.status);
      })
      .catch(e => e)
    },
    getBillId() {
      this.listCustomer.map(c => c.id )
    },
    getIdBill() {
      this.listBill.forEach(b => {
        this.listCustomer.forEach(c => {
          if(b.idkhachhang === c.id) {
            return b.id
          }
        })
      })
      // const id = this.listBill.filter(c => c.idhoadon === this.idCus)
      // return id
    },
    handleDelete() {
      this.deleteBill()
      this.deleteCustomer()
    }
  },
  created() {
    this.getAllCustomer()
    this.getAllBill()
  }
}
</script>

<style>

</style>