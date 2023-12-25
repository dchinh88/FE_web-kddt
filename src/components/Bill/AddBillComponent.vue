<template>
  <div>
    <v-dialog max-width="800px" v-model="dialog">
      <v-card>
        <v-card-title>Đặt hàng</v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="2">
                  <!-- {{ this.product.tensanpham }} -->
                  <!-- <v-text-field
                                v-model="product.tensanpham"
                                ></v-text-field> -->
                  <v-img width="80" :src="imageDes + image"></v-img>
                </v-col>

                <v-col class="text-left text-subtitle-1" cols="4">
                  {{ this.product.tensanpham }}
                  <p class="text-caption text-primary">0 khuyến mãi</p>
                  <p class="text-caption text-grey-darken-1">
                    Màu: {{ this.product.mausac }}
                  </p>
                </v-col>
                <v-col class="text-right">
                  <p class="text-red text-subtitle-2 mb-3">
                    {{ formatMoney(this.product.giaban) }}
                  </p>
                  <!-- <v-text-field class="text-red text-subtitle-2 mb-3" v-model="billinfo.dongia" readonly variant="solo-filled">
                    {{ formatMoney(this.product.giaban) }}</v-text-field> -->
                  <p>
                    <v-btn
                      @click="handlerGiamSoluong(this.billinfo.soluong)"
                      color="red"
                      variant="outlined"
                      icon
                      size="x-small"
                      ><v-icon>mdi-minus</v-icon></v-btn
                    >
                    {{ this.billinfo.soluong }}
                    <v-btn
                      @click="handlerTangSoluong(this.billinfo.soluong)"
                      color="green"
                      variant="outlined"
                      icon
                      size="x-small"
                      ><v-icon>mdi-plus</v-icon></v-btn
                    >
                  </p>
                  <!-- <p>Số lượng {{ billinfo.soluong }}</p> -->
                  <!-- {{ this.idProduct }} -->
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="text-subtitle-2">
                    Tạm tính ({{ this.billinfo.soluong }} sản phẩm):
                  </p>
                </v-col>
                <v-col>
                  <p class="text-right text-subtitle-1">
                    {{
                      formatMoney(this.product.giaban * this.billinfo.soluong)
                    }}
                  </p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="mt-2 ml-1 text-subtitle-1">
                Thông tin khách hàng
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Họ và tên"
                    variant="solo-filled"
                    v-model="khachhang.tenkhachhang"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Số điện thoại"
                    variant="solo-filled"
                    v-model="khachhang.sdt"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Địa chỉ"
                    variant="solo-filled"
                    v-model="khachhang.diachi"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="ml-1 mr-1 mb-1">
                <v-select
                  label="Chọn phương thức thanh toán"
                  :items="listPhuongthuc"
                  variant="solo-filled"
                  item-value="id"
                  item-title="tenphuongthuc"
                  v-model="bill.idphuongthuc"
                ></v-select>
              </v-row>
              <v-divider></v-divider>

              <v-row class="mt-1 mb-1">
                <v-col cols="4" class="text-subtitle-1"
                  >Thời gian giao hàng dự kiến:</v-col
                >
                <v-col class="text-subtitle-1">{{
                  this.bill.ngaygiaohang
                }}</v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="mt-2">
                <v-col class="font-weight-bold"> Tổng tiền: </v-col>
                <v-col
                  v-model="billinfo.thanhtien"
                  class="text-right text-subtitle-1 text-red font-weight-bold"
                >
                  {{ formatMoney(this.product.giaban * this.billinfo.soluong) }}
                </v-col>
              </v-row>
              <v-row>
                <v-btn
                  @click="handlerDatHang"
                  width="800"
                  height="45"
                  color="orange"
                  class="text-capitalize mb-4"
                  >Đặt hàng</v-btn
                >
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import numeral from "numeral";
import moment from "moment";
export default {
  props: ["dialogAddBill", "idProduct"],
  data() {
    return {
      bill: {
        id: Number(),
        ngaydathang: Date(),
        ngaygiaohang: Date(),
        diachigiaohang: "",
        idkhachhang: Number(),
        idnhanvien: 14,
        idphuongthuc: Number(),
        idtinhtrang: 1,
      },
      billinfo: {
        id: Number(),
        idhoadon: Number(),
        idsanpham: Number(),
        soluong: 1,
        dongia: Number(),
        thanhtien: Number(),
      },
      product: {
        id: Number(),
        masanpham: "",
        tensanpham: "",
        kichthuocmanhinh: "",
        hedieuhanh: "",
        bonhotrong: "",
        trongluong: "",
        dungluongpin: "",
        soluongton: Number(),
        mota: "",
        giaban: Number(),
        mausac: "",
        baohanh: "",
        loaisanphamid: Number(),
        bonhoram: "",
      },
      khachhang: {
        makhachhang: "",
        tenkhachhang: "",
        diachi: "",
        sdt: "",
        email: "",
      },
      imageDes: "data:image/jpeg;base64, ",
      image: "",
      soluong: 1,
      listPhuongthuc: [],
      listKhachhang: [],
      listHoadon: [],
    };
  },
  methods: {
    addBill() {
      // this.getListKhachHang()
      const idKH = this.listKhachhang.length - 1;
      if (idKH >= 0) {
        const lastItem = this.listKhachhang[idKH];
        this.bill.idkhachhang = lastItem.id;
      }
      const newBill = {
        // id: this.bill.id,
        ngaydathang: moment(this.bill.ngaydathang).toISOString(),
        ngaygiaohang: moment(this.bill.ngaygiaohang).toISOString(),
        diachigiaohang: this.khachhang.diachi,
        idkhachhang: this.bill.idkhachhang + 1,
        idnhanvien: this.bill.idnhanvien,
        idphuongthuc: this.bill.idphuongthuc,
        idtinhtrang: this.bill.idtinhtrang,
      };
      axios
        .post("https://localhost:7266/api/Hoadon", newBill)
        .then((response) => {
          this.$emit("close");
          // this.$emit("updateData");
          this.bill = {};
          console.log(response.status);
        })
        .catch((e) => e);
    },
    addKhachhang() {
      axios
        .post("https://localhost:7266/api/Khachhang", this.khachhang)
        .then((response) => {
          this.getListKhachHang();
          console.log(response.status);
        })
        .catch((e) => e);
    },
    addBillInfo() {
      const idHD = this.listHoadon.length - 1;
      if (idHD >= 0) {
        const lastItem = this.listHoadon[idHD];
        this.billinfo.idhoadon = lastItem.id
      }
      const newBillInfo = {
        // id: this.billinfo.id,
        idhoadon: this.billinfo.idhoadon + 1,
        idsanpham: this.idProduct,
        soluong: this.billinfo.soluong,
        dongia: this.product.giaban,
        thanhtien: this.product.giaban * this.billinfo.soluong,
      };
      axios
        .post("https://localhost:7266/api/Chitiethoadon", newBillInfo)
        .then((response) => response.status)
        .catch((e) => e);
    },
    getProductById() {
      axios
        .get(`https://localhost:7266/api/SanPham/${this.idProduct}`)
        .then((response) => (this.product = response.data))
        .catch((e) => e);
    },
    getImageById() {
      axios
        .get(
          `https://localhost:7266/api/UploadImageSanPham/DBGetMultiImage?idsanpham=${this.idProduct}`
        )
        .then((response) => (this.image = response.data))
        .catch((e) => e);
    },
    formatMoney(giaban) {
      return numeral(giaban).format("0,0") + " ₫";
    },
    logTime() {
      console.log(this.bill.ngaydathang);
      console.log(this.bill.ngaygiaohang);
    },
    getThoiGianDatHang() {
      const now = new Date();
      now.setDate(now.getDate());
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();
      this.bill.ngaydathang = `${day}-${month}-${year}`;

      // const now = new Date()
      // now.setDate(now.getDate() + 0)
      // const day = now.getDate()
      // const month = now.getMonth() + 1
      // const year = now.getFullYear()
      // const time = `${day}-${month}-${year}`
      // this.bill.ngaydathang = moment(time).toISOString()
    },
    getThoiGianGiaoHang() {
      const now = new Date();
      now.setDate(now.getDate() + 3);
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();
      // const time = `${day}-${month}-${year}`
      this.bill.ngaygiaohang = `${day}-${month}-${year}`;
    },
    getPhuongthucthanhtoan() {
      axios
        .get("https://localhost:7266/api/Phuongthucthanhtoan")
        .then((response) => (this.listPhuongthuc = response.data))
        .catch((e) => e);
    },
    getListKhachHang() {
      axios
        .get("https://localhost:7266/api/Khachhang")
        .then((response) => (this.listKhachhang = response.data))
        .catch((e) => e);
    },
    getListHoaDon() {
      axios
        .get(`https://localhost:7266/api/Hoadon`)
        .then((response) => (this.listHoadon = response.data))
        .catch((e) => e);
    },
    updateSoLuongSanPham() {
      axios
        .put(
          "https://localhost:7266/api/SanPham/" + this.idProduct,
          this.product
        )
        .then((response) => console.log(response.status))
        .catch((e) => e);
    },
    handlerGiamSoluong(soluong) {
      if (soluong <= 1) {
        return this.billinfo.soluong === 1;
      }
      return (this.billinfo.soluong -= 1);
    },
    handlerTangSoluong(soluong) {
      if (soluong === this.product.soluongton) {
        return this.billinfo.soluong === this.product.soluongton;
      }
      return (this.billinfo.soluong += 1);
    },
    handlerSoLuongTon() {
      const soluongton = this.product.soluongton - this.billinfo.soluong;
      if (soluongton <= 0) {
        return this.product.soluongton === 0;
      }
      this.updateSoLuongSanPham();
      return soluongton;
    },
    handlerDatHang() {
      this.addKhachhang()
      this.getListKhachHang()
      this.addBill()
      this.getListHoaDon()
      this.addBillInfo()
      this.$router.push("/success-page")
      // if (
      //   this.addKhachhang() &&
      //   this.getListKhachHang() &&
      //   this.addBill() &&
      //   this.getListHoaDon() &&
      //   this.addBillInfo()
      // ) {
      //   this.$router.push("/success-page");
      // } else {
      //   console.log('error');
      // }
    },
  },
  created() {
    this.getProductById();
    this.getImageById();
    this.getPhuongthucthanhtoan();
    this.getListKhachHang();
    this.getListHoaDon();
  },
  mounted() {
    this.getThoiGianGiaoHang();
    this.getThoiGianDatHang();
  },
  computed: {
    dialog: {
      get() {
        this.getProductById();
        // this.getListKhachHang()
        this.getImageById();
        return this.dialogAddBill;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>

<style>
</style>