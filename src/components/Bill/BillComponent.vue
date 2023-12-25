<template>
  <div>
    <h1>Quản lý hóa đơn</h1>
    <v-row class="mt-3">
      <v-col>
        <v-card>
          <v-table>
            <thead>
              <tr>
                <th>Tên khách hàng</th>
                <th>Ngày đặt hàng</th>
                <th>Dự kiến ngày giao</th>
                <th>Sản phẩm</th>
                <!-- <th>Phương thức thanh toán</th> -->
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(bill, index) in listBillInfo" :key="index">
                <td>{{ getTenKH(getTenKhachhangFromBill(bill.idhoadon)) }}</td>
                <td>{{ getTime(getNgayDatHangFromBill(bill.idhoadon)) }}</td>
                <td>{{ getTime(getNgayGiaoHangFromBill(bill.idhoadon)) }}</td>
                <td>{{ getProductName(bill.idsanpham) }}</td>
                <!-- <td>{{ getNamePhuongThuc(getNamePhuongThucFromBill(bill.idhoadon)) }}</td> -->
                <td>{{ bill.soluong }}</td>
                <td>{{ formatMoney(bill.dongia) }}</td>
                <td>{{ formatMoney(bill.thanhtien) }}</td>
                <td>
                  <v-btn
                    color="red"
                    icon
                    size="x-small"
                    class="mr-3"
                    @click="(dialogDelete=true), (idInfo=bill.id), (idBill=bill.idhoadon)"
                    ><v-icon>mdi-delete</v-icon></v-btn
                  >
                </td>
                <!-- <td>{{ bill.idhoadon }}</td> -->
                <!-- <td>{{ getTenKH(bill.idkhachhang) }}</td>
                <td>{{ getTime(bill.ngaydathang) }}</td>
                <td>{{ getTime(bill.ngaygiaohang) }}</td>
                <td>{{ getProductFromBillInfo(bill.id) }}</td> -->
              </tr>
              <!-- <tr>Doanh thu: {{ bill.thanhtien += bill.thanhtien }}</tr> -->
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog max-width="450px" v-model="dialogDelete">
      <v-card>
        <v-alert type="warning">
          <v-row align="center">
            <v-col cols="11" class="text-center">
              Do you want remove this bill ???
            </v-col>
          </v-row>
          <v-row align="center">
            <v-spacer></v-spacer>
            <v-col cols="5" vatiant="text">
              <v-btn @click="handleDelete">Delete</v-btn>
            </v-col>
            <v-col cols="6" vatiant="text">
              <v-btn @click="dialogDelete=false">Cancel</v-btn>

            </v-col>
          </v-row>
        </v-alert>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import numeral from "numeral";
export default {
  data() {
    return {
      listBill: [],
      listBillInfo: [],
      listKhachhang: [],
      listProduct: [],
      listPhuongthuc: [],
      dialogDelete: false,
      idInfo: '',
      idBill: '',
    };
  },
  methods: {
    getAllBill() {
      axios
        .get("https://localhost:7266/api/Hoadon")
        .then((response) => (this.listBill = response.data))
        .catch((e) => e);
    },
    getAllBillInfo() {
      axios
        .get("https://localhost:7266/api/Chitiethoadon")
        .then((response) => (this.listBillInfo = response.data))
        .catch((e) => e);
    },
    getAllKhachHang() {
      axios
        .get("https://localhost:7266/api/Khachhang")
        .then((response) => (this.listKhachhang = response.data))
        .catch((e) => e);
    },
    getAllProduct() {
      axios
        .get("https://localhost:7266/api/SanPham")
        .then((response) => (this.listProduct = response.data))
        .catch((e) => e);
    },
    getAllPhuongThuc() {
      axios
        .get("https://localhost:7266/api/Phuongthucthanhtoan")
        .then((response) => (this.listPhuongthuc = response.data))
        .catch((e) => e);
    },
    getTenKH(id) {
      const tenKH = this.listKhachhang.find((c) => c.id === id);
      return tenKH ? tenKH.tenkhachhang : "";
    },
    getTenKhachhangFromBill(id) {
      const bill = this.listBill.find((b) => b.id === id);
      return bill ? bill.idkhachhang : "";
    },
    getNgayDatHangFromBill(id) {
      const ngaydathang = this.listBill.find((b) => b.id === id);
      return ngaydathang ? ngaydathang.ngaydathang : "";
    },
    getNgayGiaoHangFromBill(id) {
      const ngaygiaohang = this.listBill.find((b) => b.id === id);
      return ngaygiaohang ? ngaygiaohang.ngaygiaohang : "";
    },
    getProductName(id) {
      const name = this.listProduct.find((b) => b.id === id);
      return name ? name.tensanpham : "";
    },
    getNamePhuongThuc(id) {
      const phuongthuc = this.listPhuongthuc.find((p) => p.id === id);
      return phuongthuc ? phuongthuc.tenphuongthuc : "";
    },
    getNamePhuongThucFromBill(id) {
      const name = this.listBill.find((b) => b.id === id);
      return name ? name.idphuongthuc : "";
    },

    getTime(time) {
      const day = new Date(time).getDate();
      const month = new Date(time).getMonth() + 1;
      const year = new Date(time).getFullYear();
      return day + "/" + month + "/" + year;
    },
    formatMoney(money) {
      return numeral(money).format("0,0") + " ₫";
    },
    handleDelete() {
      this.deleteBillInfo()
      this.deleteBill()
    },
    deleteBillInfo() {
      axios.delete(`https://localhost:7266/api/Chitiethoadon/${this.idInfo}`)
      .then(response => {
        var newArrBillInfo = this.listBillInfo.filter(b => b.id !== this.idInfo)
        this.listBillInfo = newArrBillInfo
        this.dialogDelete = false
        console.log(response.status);
      })
      .catch(e => e)
    },
    deleteBill() {
      axios.delete(`https://localhost:7266/api/Hoadon/${this.idBill}`)
      .then(response => {
        var newArrBill = this.listBill.filter(b => b.id !== this.idBill)
        this.listBill = newArrBill
        console.log(response.status);
      })
      .catch(e => e)
    }
  },
  created() {
    this.getAllBill();
    this.getAllBillInfo();
    this.getAllKhachHang();
    this.getAllProduct();
    this.getAllPhuongThuc();
  },
};
</script>

<style>
</style>