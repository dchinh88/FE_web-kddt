<template>
  <div>
    <div class="header-top">
      <v-container style="padding: 0">
        <v-carousel hide-delimiters height="44" show-arrows>
          <template v-slot:prev="{ props }">
            <v-icon
              class="navigation-left"
              icon="mdi-chevron-left"
              variant="elevated"
              @click="props.onClick"
            ></v-icon>
          </template>
          <template v-slot:next="{ props }">
            <v-icon
              class="navigation-right"
              icon="mdi-chevron-right"
              variant="elevated"
              @click="props.onClick"
            ></v-icon>
          </template>
          <v-carousel-item
            v-for="(img, i) in imgs_header_top"
            :key="i"
            :src="img.src"
            cover
          ></v-carousel-item>
        </v-carousel>
        <!-- <img src="../assets/imgHeader/IP15-1200-44-1200x44.webp" alt=""> -->
      </v-container>
    </div>

    <div class="header-body" style="background-color: #ffd400; height: 80px">
      <v-container>
        <v-row :height="40">
          <v-col>
            <img
              src="../assets/imgHeader/logo_tgdd.png"
              style="height: 40px"
              alt=""
            />
          </v-col>
          <v-col
            style="background-color: #ffac0a99; height: 40px; padding: 6px"
            class="text-center mt-4 mr-3 rounded"
          >
            <p
              class="font-weight-thin text-left"
              style="font-size: 11px; display: flex"
            >
              Xem giá, tồn kho tại: <v-icon icon="mdi-menu-down"></v-icon>
            </p>
            <p style="font-size: 11px" class="text-left font-weight-bold">
              Hà Nội
            </p>
          </v-col>
          <v-col md="3">
            <v-text-field
              density="compact"
              variant="solo"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              placeholder="Bạn tìm gì..."
              class="mr-3"
            ></v-text-field>
          </v-col>
          <v-col
            style="background-color: #ffac0a99; height: 40px; padding: 5px"
            md="1"
            class="text-center mt-4 mr-3 rounded"
          >
            <p class="font-weight-thin" style="font-size: 12px">
              Tài khoản & Đơn hàng
            </p>
          </v-col>
          <v-col
            style="
              background-color: #ffac0a99;
              height: 40px;
              padding: 5px;
              line-height: 28px;
            "
            md="1"
            class="text-center mt-4 mr-3 rounded"
          >
            <p class="font-weight-thin" style="font-size: 12px">
              <v-icon icon="mdi-cart-outline"></v-icon> Giỏ hàng
            </p>
          </v-col>
          <v-col md="1">
            <p style="font-size: 14px" class="font-weight-thin">24h</p>
            <p style="font-size: 14px" class="font-weight-thin">Công Nghệ</p>
          </v-col>
          <v-divider :thickness="1" color="error" vertical></v-divider>
          <v-col md="1">
            <p
              style="font-size: 14px; line-height: 40px"
              class="font-weight-thin"
            >
              Hỏi đáp
            </p>
          </v-col>
          <v-divider :thickness="1" color="error" vertical></v-divider>
          <v-col md="1">
            <router-link to="/login"><p
              style="font-size: 14px; line-height: 40px"
              class="font-weight-thin text-decoration"
            >
              LogIn
            </p></router-link>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="header-bottom" style="background-color: #ffd400">
      <v-container>
        <v-row>
          <v-col>
            <p class="directory font-weight-thin" style="font-size: 13px">
              <v-icon icon="mdi-cellphone" class="mr-2"></v-icon>Điện thoại
            </p>
          </v-col>
          <v-col md="1">
            <p class="directory font-weight-thin" style="font-size: 13px">
              <v-icon icon="mdi-laptop" class="mr-2"></v-icon>Laptop
            </p>
          </v-col>
          <v-col md="1">
            <p class="directory font-weight-thin" style="font-size: 13px">
              <v-icon icon="mdi-tablet" class="mr-2"></v-icon>Tablet
            </p>
          </v-col>
          <v-col>
            <p class="directory font-weight-thin" style="font-size: 13px">
              <!-- <v-icon icon="mdi-headphones" class="mr-2"></v-icon>Phụ
              kiện<v-icon icon="mdi-menu-down"></v-icon> -->
              <v-menu>
                <template v-slot:activator="{ props }">
                  <p
                    color="primary"
                    icon="mdi-headphones"
                    class="mr-2"
                    v-bind="props"
                  >
                    <v-icon icon="mdi-headphones" class="mr-2"></v-icon>Phụ
                    kiện<v-icon icon="mdi-menu-down"></v-icon>
                  </p>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in phukien"
                    :key="index"
                    :value="index"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </p>
          </v-col>
          <v-col>
            <p class="directory font-weight-thin" style="font-size: 13px">
              <v-icon icon="mdi-watch-variant" class="mr-2"></v-icon>Smartwatch
            </p>
          </v-col>
          <v-col md="1">
            <p class="directory font-weight-thin" style="font-size: 13px">
              <v-icon icon="mdi-watch" class="mr-1"></v-icon>Đồng hồ
            </p>
          </v-col>
          <v-col>
            <p class="directory font-weight-thin" style="font-size: 13px">
              <v-icon icon="mdi-cellphone-dock"></v-icon>Máy cũ giá rẻ
            </p>
          </v-col>
          <v-col>
            <p class="directory font-weight-thin" style="font-size: 13px">
              <v-icon icon="mdi-desktop-classic"></v-icon>PC, máy in<v-icon
                icon="mdi-menu-down"
              ></v-icon>
            </p>
          </v-col>
          <v-col md="1">
            <p class="directory font-weight-thin" style="font-size: 13px">Sim, thẻ cào</p>
          </v-col>
          <v-col>
            <p class="directory font-weight-thin" style="font-size: 13px">
              Dịch vụ tiện ích<v-icon icon="mdi-menu-down"></v-icon>
            </p>
          </v-col>
        </v-row>
      </v-container>
      <!-- <v-img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/11/banner/Banner-big-1920x450-1.png"></v-img> -->
    </div>
  </div>
</template>

<script>
import styleHeader from "../style/styleHeader.css";
export default {
  styleHeader,
  data() {
    return {
      imgs_header_top: [
        {
          src: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/09/banner/IP15-1200-44-1200x44.png",
          bg: "black",
        },
        {
          src: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/07/banner/Lap-1200-44-1200x44-1.png",
          bg: "#770000",
        },
      ],
      phukien: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
};
</script>

<style scoped>
</style>