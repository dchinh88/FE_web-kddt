<template>
  <div>
    <header-page />
    <v-container>
      <v-row>
        <v-breadcrumbs
          :items="items"
          style="padding: 0"
          class="text-body-2 text-decoration-none"
        >
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>
      </v-row>
      <v-row>
        <v-col style="padding: 0" cols="3" class="text-left font-weight-bold">{{
          product.tensanpham
        }}</v-col>
        <v-col class="text-left" cols="2" style="padding: 0"
          ><v-img
            max-height="18px"
            src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/TGDD/Product/label-only.png"
          ></v-img
        ></v-col>
        <v-col class="text-left" style="padding: 0">
          <v-rating
            hover
            :length="5"
            :size="20"
            :model-value="3"
            class="text-caption"
            active-color="yellow"
          />
        </v-col>
      </v-row>
      <hr class="mt-6 mb-6" />
      <v-row>
        <!--  -->
        <v-col cols="7">
          <v-img
            class="ml-16"
            max-width="400px"
            :src="imageDes + image"
          ></v-img>
          <v-row class="mt-3">
            <v-card elevation="2">
              <v-card-item>
                <v-card-title class="text-h5 font-weight-bold"
                  >Đánh giá {{ product.tensanpham }}</v-card-title
                >
                <v-card-item>
                  <!-- <pre>{{ rating }}</pre> -->
                  <v-rating
                    hover
                    :length="5"
                    :size="31"
                    :model-value="3"
                    color="yellow"
                    active-color="yellow"
                  />
                </v-card-item>
              </v-card-item>
            </v-card>
          </v-row>
        </v-col>
        <!--  -->
        <v-col cols="5">
          <v-row>
            <v-btn
              class="option-memory mr-1 mt-1 action text-capitalize"
              variant="outlined"
              >{{ product.mausac }}</v-btn
            >
            <v-btn
              class="option-memory mr-1 mt-1 text-capitalize"
              variant="outlined"
              >Xanh Lá</v-btn
            >
            <v-btn
              class="option-memory mr-1 mt-1 text-capitalize"
              variant="outlined"
              >Đen</v-btn
            >
          </v-row>
          <v-row class="mt-5"
            >Giá tại
            <p style="color: blue" class="ml-1">
              Hà Nội<v-icon>mdi-menu-down</v-icon>
            </p></v-row
          >
          <v-row>
            <p class="text-h6 font-weight-bold mr-4" style="color: #e83a45">
              {{ formatMoney }}
            </p>
            <p class="text-body-1 text-decoration-line-through mr-4 mt-1">
              {{ formatMoney }}
            </p>
            <p class="text-body-1 font-weight-thin mt-1" style="color: #e83a45">
              -3%
            </p>
            <p class="tra_gop">Trả góp 0%</p>
          </v-row>
          <v-row>
            <v-card max-width="500" elevation="2" class="text-left mb-3">
              <v-card-item color="primary">
                <v-card-title class="text-subtitle-1 font-weight-bold">
                  Khuyến mãi
                </v-card-title>
                <v-card-subtitle class="text-body-2">
                  Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 31/12
                </v-card-subtitle>
              </v-card-item>
              <v-card-text>
                <p>
                  (1) Bảo hành rơi vỡ màn hình 06 tháng
                  <a href="" class="text-primary text-decoration-none"
                    >Xem chi tiết</a
                  >
                </p>
                <p>
                  (2) Thu cũ Đổi mới: Giảm đến 3 triệu (Tùy model máy cũ, Không
                  kèm khuyến mãi giảm giá khác, thanh toán qua cổng online, mua
                  kèm)
                  <a href="" class="text-primary text-decoration-none"
                    >Xem chi tiết</a
                  >
                </p>
                <p>
                  (3) Giảm thêm 5% khi mua cùng sản phẩm có giá cao hơn (trừ Xe
                  đạp, sản phẩm Apple, sản phẩm giá sốc)
                  <a href="" class="text-primary text-decoration-none"
                    >Xem chi tiết</a
                  >
                </p>
                <p>
                  (4) Nhập mã MMSALE100 giảm ngay 1% tối đa 100.000đ khi thanh
                  toán qua MOMO
                  <a href="" class="text-primary text-decoration-none"
                    >(Xem chi tiết tại đây)</a
                  >
                </p>
              </v-card-text>
            </v-card>
          </v-row>
          <v-row>
            <p class="mb-1 text-body-2">
              <a href="" class="text-primary text-decoration-none"
                ><v-icon>mdi-map-marker</v-icon> Chọn địa chỉ nhận hàng </a
              >để biết thời gian giao.
            </p>
          </v-row>
          <v-row>
            <p class="text-body-2">
              <a href="" class="text-primary text-decoration-none"
                ><v-icon>mdi-store</v-icon> Xem siêu thị có hàng</a
              >
            </p>
          </v-row>
          <hr class="mt-5 mb-2" />
          <p class="font-weight-bold text-left text-subtitle-1">
            Ưu đãi khi thanh toán
          </p>
          <v-btn
            class="text-uppercase"
            color="orange"
            size="large"
            width="500px"
            @click="dialogAddBill=true"
            >Mua Ngay</v-btn
          >
          <p class="text-body-2 mt-3">
            Gọi đặt mua <span class="text-primary">0353042399</span> (7:30 -
            22:00)
          </p>
          <v-card max-width="500" elevation="2" class="text-left mb-3">
            <v-card-item color="primary">
              <v-card-title class="text-subtitle-1 font-weight-bold">
                4 ưu đãi thêm
              </v-card-title>
              <v-card-subtitle class="text-body-2">
                Dự kiến áp dụng đến 23:00 | 31/12
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <p>
                (1) Bảo hành rơi vỡ màn hình 06 tháng
                <a href="" class="text-primary text-decoration-none"
                  >Xem chi tiết</a
                >
              </p>
              <p>
                (2) Thu cũ Đổi mới: Giảm đến 3 triệu (Tùy model máy cũ, Không
                kèm khuyến mãi giảm giá khác, thanh toán qua cổng online, mua
                kèm)
                <a href="" class="text-primary text-decoration-none"
                  >Xem chi tiết</a
                >
              </p>
              <p>
                (3) Giảm thêm 5% khi mua cùng sản phẩm có giá cao hơn (trừ Xe
                đạp, sản phẩm Apple, sản phẩm giá sốc)
                <a href="" class="text-primary text-decoration-none"
                  >Xem chi tiết</a
                >
              </p>
              <p>
                (4) Nhập mã MMSALE100 giảm ngay 1% tối đa 100.000đ khi thanh
                toán qua MOMO
                <a href="" class="text-primary text-decoration-none"
                  >(Xem chi tiết tại đây)</a
                >
              </p>
            </v-card-text>
          </v-card>
          <img style="width: 475px" src="../assets/detail-cpn.png" alt="" />
          <p class="text-h6 font-weight-bold text-left mt-1">
            Cấu hình {{ product.tensanpham }}
          </p>
          <p
            class="font-weight-thin text-body-2 text-left pa-3 bg-grey-lighten-4"
          >
            Màn hình: {{ product.kichthuocmanhinh }}
          </p>
          <p class="font-weight-thin text-body-2 text-left pa-3">
            Hệ điều hành: {{ product.hedieuhanh }}
          </p>
          <p
            class="font-weight-thin text-body-2 text-left pa-3 bg-grey-lighten-4"
          >
            RAM: {{ product.bonhoram }}
          </p>
          <p class="font-weight-thin text-body-2 text-left pa-3">
            Dung lượng lưu trữ: {{ product.bonhotrong }}
          </p>
          <p
            class="font-weight-thin text-body-2 text-left pa-3 bg-grey-lighten-4"
          >
            Pin: {{ product.dungluongpin }}
          </p>
          <p class="font-weight-thin text-body-2 text-left pa-3">
            Hãng: {{ getCategoryById(product.loaisanphamid) }}
          </p>
          <v-btn
            append-icon="mdi-menu-right"
            width="475"
            height="45"
            color="blue"
            variant="outlined"
          >
            Xem cầu hình chi tiết
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!-- <h1>detail product</h1>
    <h2>{{ this.$route.query.id }}</h2>
    <h2>{{ product.tensanpham }}</h2> -->
    <footer-page />
    <add-bill-component
      :dialogAddBill = dialogAddBill
      @close="dialogAddBill=false"
      :idProduct="product.id"
      
    />
  </div>
</template>

<script>
import axios from "axios";
import numeral from "numeral";
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";
import AddBillComponent from '../components/Bill/AddBillComponent.vue';
export default {
  components: { HeaderPage, FooterPage, AddBillComponent },
  data() {
    return {
      product: {
        id: "",
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
      items: [
        {
          title: "Điện thoại",
          disabled: false,
          href: "breadcrumbs_dashboard",
        },
        {
          title: "Điện thoại",
          disabled: false,
          href: "breadcrumbs_link_1",
        },
      ],
      image: "",
      imageDes: "data:image/jpeg;base64, ",
      listCategory: [],
      dialogAddBill: false,
    };
  },
  methods: {
    getProductById() {
      axios
        .get(`https://localhost:7266/api/SanPham/${this.$route.query.id}`)
        .then((response) => (this.product = response.data))
        .catch((e) => e);
    },
    getImageProductById() {
      axios
        .get(
          `https://localhost:7266/api/UploadImageSanPham/DBGetMultiImage?idsanpham=${this.$route.query.id}`
        )
        .then((response) => (this.image = response.data))
        .catch((e) => e);
    },
    getCategory() {
      axios
        .get("https://localhost:7266/api/LoaiSanPham")
        .then((response) => (this.listCategory = response.data))
        .catch((e) => e);
    },
    getCategoryById(id) {
      const catgory = this.listCategory.find((c) => c.id === id);
      return catgory ? catgory.tenloaisanpham : "";
    },
  },
  created() {
    this.getProductById();
    this.getImageProductById();
    this.getCategory();
  },
  computed: {
    formatMoney() {
      return numeral(this.product.giaban).format("0,0") + " ₫";
    },
  },
};
</script>

<style scoped>
.option-memory {
  padding: 0;
  font-size: 12px;
  height: 32px;
}
.option-memory:hover {
  color: #288ad6;
}
.action {
  color: #288ad6;
}
.tra_gop {
  font-size: 11px;
  background-color: #f1f1f1;
  width: 65px;
  margin: 10px 0 25px 10px;
  border-radius: 4px;
  height: 16px;
}
</style>