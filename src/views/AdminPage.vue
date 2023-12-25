<template>
  <div>
    <!-- v-if="isAuthentication" -->
    <!--  -->
    <v-card v-if="isAuthentication">
    <v-toolbar color="primary">
      <v-toolbar-title>Trang quản trị</v-toolbar-title>
      
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" direction="vertical" color="red" style="width: 220px;">
        <v-tab value="option-1">
          <v-icon start> mdi-home </v-icon>
          Tổng quan
        </v-tab>
        <v-tab value="option-2">
          <v-icon start> mdi-account </v-icon>
          Nhân Viên
        </v-tab>
        <v-tab value="option-3">
          <v-icon start> mdi-package-variant-closed </v-icon>
          Sản phẩm
        </v-tab>
        <v-tab value="option-4">
          <v-icon start> mdi-account-group </v-icon>
          Khách hàng
        </v-tab>
        <v-tab value="option-5">
          <v-icon start> mdi-comment </v-icon>
          Bình luận
        </v-tab>
        <v-tab value="option-6">
          <v-icon start> mdi-chart-areaspline-variant </v-icon>
          Doanh thu
        </v-tab>
        <v-btn @click="logout" color="red">Logout</v-btn>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="option-1">
          <v-card flat>
            <tongquan-component />
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card flat>
            <nhan-vien-component />
          </v-card>
        </v-window-item>
        <v-window-item value="option-3">
          <v-card flat>
            <product-component />
          </v-card>
        </v-window-item>
        <v-window-item value="option-4">
          <v-card flat>
            <customer-component />
          </v-card>
        </v-window-item>
        <v-window-item value="option-5">
          <v-card flat>
            <comment-component />
          </v-card>
        </v-window-item>
        <v-window-item value="option-6">
          <v-card flat>
            <bill-component />
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
  <v-card v-else>Please Log in</v-card>
  </div>
  
</template>
  
  <!-- <script setup>
  import { ref } from "vue";
  
  const drawer = ref(null);
  </script> -->
  
  <script>
import BillComponent from "../components/Bill/BillComponent.vue";
import CommentComponent from "../components/Comment/CommentComponent.vue";
import CustomerComponent from "../components/ManagerCustomer/CustomerComponent.vue";
import NhanVienComponent from "../components/ManagerNhanVien/NhanVienComponent.vue";
import ProductComponent from "../components/ManagerProduct/ProductComponent.vue";
import TongquanComponent from "../components/TongquanComponent.vue";

export default {
  components: {
    NhanVienComponent,
    ProductComponent,
    TongquanComponent,
    CustomerComponent,
    CommentComponent,
    BillComponent,
  },
  data() {
    return {
      drawer: null,
      links: [
        ["mdi-inbox-arrow-down", "Inbox", "/manager-staff"],
        ["mdi-send", "Send", "/manager-customer"],
      ],
      tab: "option-1",
    };
  },
  computed: {
    isAuthentication() {
      return this.$store.state.isAuthenticated
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
};
</script>