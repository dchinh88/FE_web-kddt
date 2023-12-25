<template>
  <div>
    <div class="top-content">
      <v-container>
        <v-row>
          <v-col md="8">
            <v-carousel
              show-arrows="hover"
              height="200"
              hide-delimiter-background
            >
              <v-carousel-item
                v-for="(img, i) in listImages"
                :key="i"
                :src="img.src"
                cover
              ></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col>
            <v-row>
              <v-img
                class="mt-3"
                height="95"
                width="390"
                src="https://cdn.tgdd.vn/2023/09/banner/sticky-s21fe-390x97.png"
              ></v-img>
            </v-row>
            <v-row>
              <v-img
                class="mt-3"
                height="95"
                width="390"
                src="https://cdn.tgdd.vn/2023/09/banner/sticky-a78-390x97.png"
              ></v-img>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="body-content">
      <v-container>
        <v-row class="text-left">
          <v-col md="1" class="box-option text-left mr-2">
            <p class="text-nav font-weight-thin">
              <v-icon icon="mdi-filter-outline"></v-icon>Bộ lọc
            </p>
          </v-col>
          <v-col md="1" class="box-option text-left mr-2">
            <p class="text-nav font-weight-thin">
              Hãng <v-icon icon="mdi-menu-down"></v-icon>
            </p>
          </v-col>
          <v-col class="box-option text-left mr-2" md="1">
            <p class="text-nav font-weight-thin">
              Giá <v-icon icon="mdi-menu-down"></v-icon>
            </p>
          </v-col>
          <v-col class="box-option text-left mr-2">
            <p class="text-nav font-weight-thin">
              Loại điện thoại <v-icon icon="mdi-menu-down"></v-icon>
            </p>
          </v-col>
          <v-col md="1" class="box-option text-left mr-2">
            <p class="text-nav font-weight-thin">
              Nhu cầu <v-icon icon="mdi-menu-down"></v-icon>
            </p>
          </v-col>
          <v-col md="1" class="box-option text-left mr-2">
            <p class="text-nav font-weight-thin">
              RAM <v-icon icon="mdi-menu-down"></v-icon>
            </p>
          </v-col>
          <v-col class="box-option text-left mr-2">
            <p class="text-nav font-weight-thin">
              Dung lượng lưu trữ <v-icon icon="mdi-menu-down"></v-icon>
            </p>
          </v-col>
          <v-col class="box-option text-left mr-2">
            <p class="text-nav font-weight-thin">
              Tính năng sạc <v-icon icon="mdi-menu-down"></v-icon>
            </p>
          </v-col>
          <v-col class="box-option text-left">
            <p class="text-nav font-weight-thin">
              Tính năng đặc biệt <v-icon icon="mdi-menu-down"></v-icon>
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col
            style="padding: 5px"
            v-for="(brand, index) in listBrands"
            :key="index"
          >
            <v-img @click="this.categoryProduct=brand.category" class="img-brand" :src="brand.src"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <p class="nhucau font-weight-thin">Chọn điện thoại theo nhu cầu:</p>
        </v-row>
        <v-row>
          <v-col>
            <p class="box-nhucau text-center font-weight-thin">
              Chơi game / Cấu hình cao
            </p>
          </v-col>
          <v-col>
            <p class="box-nhucau text-center font-weight-thin">
              Pin khủng trên 5000mAh
            </p>
          </v-col>
          <v-col>
            <p class="box-nhucau text-center font-weight-thin">
              Chụp ảnh. quay phim
            </p>
          </v-col>
          <v-col>
            <p class="box-nhucau text-center font-weight-thin">Livestream</p>
          </v-col>
          <v-col>
            <p class="box-nhucau text-center font-weight-thin">Mỏng nhẹ</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col style="padding: 6px">
            <b style="font-size: 13px">{{ listProduct.length }} Điện thoại</b>
          </v-col>
          <v-col style="padding: 6px">
            <p class="shipping">
              <input type="checkbox" />
              <v-icon icon="mdi-lightning-bolt" color="green"></v-icon>
              Giao hàng
            </p>
          </v-col>
          <v-col md="1" style="padding: 6px">
            <p style="font-size: 12px; line-height: 25px">
              <input type="checkbox" />
              Giảm giá
            </p>
          </v-col>
          <v-col style="padding: 6px">
            <p style="font-size: 12px; line-height: 25px">
              <input type="checkbox" />
              Góp 0% - 1%
            </p>
          </v-col>
          <v-col style="padding: 6px" md="2">
            <p style="font-size: 12px; line-height: 25px">
              <input type="checkbox" />
              Đặc biệt tại Thế Giới Di Động
            </p>
          </v-col>
          <v-col md="1" style="padding: 6px">
            <p style="font-size: 12px; line-height: 25px">
              <input type="checkbox" /> Mới
            </p>
          </v-col>
          <v-col offset-md="2" style="padding: 6px">
            <p style="font-size: 12px; line-height: 25px">
              Xếp theo: Nổi bật <v-icon icon="mdi-menu-down"></v-icon>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="bottom-content">
      <v-container>
        <v-row>
          

          <v-card
            max-width="238"
            class="product"
            v-for="(item, index) in fillterProduct"
            :key="index"
            @click="detailProduct(item.id)"
          >
            <p class="tra_gop">Trả góp 0%</p>
            <v-img :src="imageDes + getImage(item.id)"></v-img>
            <v-card-item>
              <v-card-title class="text-left" style="font-size: 14px" >{{
                item.tensanpham
              }}</v-card-title>
              <v-chip-group>
                <v-chip style="font-size: 12px">{{
                  item.kichthuocmanhinh
                }}</v-chip>
              </v-chip-group>
              <v-btn
                class="option-memory mr-1 mt-1 action"
                variant="outlined"
                >{{ item.bonhotrong }}</v-btn
              >
              <v-btn class="option-memory mr-1 mt-1" variant="outlined"
                >512GB</v-btn
              >
              <v-btn class="option-memory mr-1 mt-1" variant="outlined"
                >1TB</v-btn
              >
              <div class="giacu mt-2" style="display: flex">
                <p
                  style="font-size: 14px"
                  class="current_price text-decoration-line-through mr-3"
                >
                  {{ formatMoney(item.id) }}
                </p>
                <p style="font-size: 13px" class="sales font-weight-thin">
                  -3%
                </p>
              </div>

              <div class="giahientai text-left mt-2">{{ formatMoney(item.id) }}</div>
              <div class="compare mt-5 pb-5">
                <v-icon class="mr-2" icon="mdi-plus-circle-outline"></v-icon>
                <p class="ss">So sánh</p>
              </div>
            </v-card-item>
          </v-card>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import styleContent from "../style/styleContent.css";
import numeral from "numeral"
import router from "@/router";
import axios from "axios";
export default {
  styleContent,
  data() {
    return {
      listImages: [
        {
          src: "https://cdn.tgdd.vn/2023/10/banner/BIG-T10-800-200-800x200.png",
        },
        {
          src: "https://cdn.tgdd.vn/2023/10/banner/M34-GRQ-800-200-800x200.png",
        },
        {
          src: "https://cdn.tgdd.vn/2023/09/banner/IP15-1200-300-1200x300-1.png",
        },
        {
          src: "https://cdn.tgdd.vn/2023/09/banner/Le-hoi-OPPO-800-200-800x200-3.png",
        },
        {
          src: "https://cdn.tgdd.vn/2023/10/banner/Y17s-800-200-800x200.png",
        },
        {
          src: "https://cdn.tgdd.vn/2023/09/banner/Redmi12-800-200-800x200-2.png",
        },
        {
          src: "https://cdn.tgdd.vn/2023/09/banner/C51-1200-300-1200x300.png",
        },
        {
          src: "https://cdn.tgdd.vn/2023/10/banner/z5-800-200-800x200.png",
        },
        {
          src: "https://cdn.tgdd.vn/2023/09/banner/SPDQ-800-200-800x200.png",
        },
      ],
      listBrands: [
        {
          src: "https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png",
          category: 1
        },
        {
          src: "https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png",
          category: 2
        },
        {
          src: "https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg",
          category: 4
        },
        {
          src: "https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png",
          category: 3
        },
        {
          src: "https://cdn.tgdd.vn/Brand/1/vivo-logo-220-220x48-3.png",
        },
        {
          src: "https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png",
        },
        {
          src: "https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg",
        },
        {
          src: "https://cdn.tgdd.vn/Brand/1/Masstel42-b_0.png",
        },
        {
          src: "https://cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg",
        },
        {
          src: "https://cdn.tgdd.vn/Brand/1/Mobell42-b_19.jpg",
        },
      ],
      imageDes: "data:image/jpeg;base64, ",
      listImageProduct: [],
      listProduct: [],
      categoryProduct: ''
    };
  },
  methods: {
    getImageProduct() {
      axios
        .get(`https://localhost:7266/api/UploadImageSanPham/GetAllImageProduct`)
        .then((res) => (this.listImageProduct = res.data))
        .catch((e) => e);
    },
    detailProduct(id) {
      router.push({
        path: "/detail-product",
        query: {
          id: id
        }
      })
    },
    getProduct() {
      axios
        .get(`https://localhost:7266/api/SanPham`)
        .then((res) => (this.listProduct = res.data))
        .catch((e) => e);
    },
    getImage(id) {
      const image = this.listImageProduct.find((i) => i.idsanpham === id);
      return image ? image.imageUrl : "no";
    },
    formatMoney(id) {
      // return numeral(this.listProduct.giaban).format('0,0') + ' ₫'
      const giasp = this.listProduct.find(c => c.id === id)

      return giasp ? numeral(giasp.giaban).format('0,0') + ' ₫' : ''
    },
    
  },
  created() {
    this.getImageProduct();
    this.getProduct();
  },
  computed: {
    fillterProduct() {
      if(!this.categoryProduct) {
        return this.listProduct
      }
      return this.listProduct.filter(p => p.loaisanphamid === this.categoryProduct)
    }
  }
};
</script>

<style scoped>
/* .product:hover {
  
} */
.text-nav {
  font-size: 13px;
}
.box-option {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 8px 10px;
}
.img-brand {
  border: 1px solid #e0e0e0;
  align-items: center;
  color: #333;
  font-style: 13px;
  line-height: 13px;
  margin-right: 8px;
  margin-bottom: 10px;
  padding: 6px 20px;
  height: 30px;
  width: 110px;
  vertical-align: top;
  cursor: pointer;
  border-radius: 25px;
}
.img-brand:hover {
  border: 1px solid #288ad6;
}
.nhucau {
  font-size: 14px;
  margin: 0 0 10px 2px;
}
.box-nhucau {
  font-size: 14px;
  border: 1px solid #e0e0e0;
  padding: 10px;
  border-radius: 25px;
  cursor: pointer;
}
.box-nhucau:hover {
  border: 1px solid #288ad6;
  color: #288ad6;
}
.shipping {
  font-size: 12px;
  text-transform: uppercase;
  line-height: 25px;
  color: #219653;
  font-weight: bold;
  background-color: #e1f2e8;
  border-radius: 5px;
}
.tra_gop {
  font-size: 11px;
  background-color: #f1f1f1;
  width: 65px;
  margin: 10px 0 25px 10px;
  border-radius: 4px;
  height: 16px;
}
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
.giahientai {
  font-size: 16px;
  font-weight: bold;
  color: #e83a45;
}
.compare {
  display: flex;
  font-size: 12px;
  color: #2f80ed;
}
</style>