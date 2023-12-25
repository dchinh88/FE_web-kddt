<template>
  <div>
    <header-page />
    <v-card vatiant="tonal" width="1000px" class="mx-auto mt-10 mb-10">
      <!-- <v-card-text> -->
        <v-card-title>
          <v-icon color="green">mdi-check-circle-outline</v-icon>
        </v-card-title>
        <v-card-text>
          <span class="text-h6 text-green">Đặt hàng thành công</span>
          <p>Chúng tôi sẽ liên hệ Quý khách để xác nhận đơn hàng trong thời gian sớm nhất!</p>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="tonal">Xem chi tiết đơn hàng</v-btn>
          <v-btn @click="this.$router.push('/')" variant="tonal" color="green">Tiếp tục mua hàng</v-btn>
        </v-card-actions>
        <!-- <v-card-subtitle>
          <span class="text-h6">Đặt hàng thành công</span>
        </v-card-subtitle> -->
      <!-- </v-card-text> -->
    </v-card>
    <!-- <div class="card">
      <button class="dismiss" type="button">×</button>
      <div class="header">
        <div class="image">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M20 7L9.00004 18L3.99994 13"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>
        <div class="content">
          <span class="title">Order validated</span>
          <p class="message">
            Thank you for your purchase. you package will be delivered within 2
            days of your purchase
          </p>
        </div>
        <div class="actions">
          <button class="history" type="button">History</button>
          <button class="track" type="button">Track my package</button>
        </div>
      </div>
    </div> -->
    <footer-page />
  </div>
</template>

<script>
import FooterPage from "../components/FooterPage.vue";
import HeaderPage from "../components/HeaderPage.vue";
export default {
  components: { HeaderPage, FooterPage },
};
</script>

<style scoped>
.card {
  overflow: hidden;
  position: relative;
  text-align: left;
  border-radius: 0.5rem;
  max-width: 800px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
}

.dismiss {
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: black;
  border: 2px solid #d1d5db;
  font-size: 1rem;
  font-weight: 300;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  transition: 0.3s ease;
}

.dismiss:hover {
  background-color: #ee0d0d;
  border: 2px solid #ee0d0d;
  color: #fff;
}

.header {
  padding: 1.25rem 1rem 1rem 1rem;
}

.image {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: #e2feee;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  animation: animate 0.6s linear alternate-reverse infinite;
  transition: 0.6s ease;
}

.image svg {
  color: #0afa2a;
  width: 2rem;
  height: 2rem;
}

.content {
  margin-top: 0.75rem;
  text-align: center;
}

.title {
  color: #066e29;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.message {
  margin-top: 0.5rem;
  color: #595b5f;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.actions {
  margin: 0.75rem 1rem;
}

.history {
  display: inline-flex;
  padding: 0.5rem 1rem;
  background-color: #1aa06d;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.track {
  display: inline-flex;
  margin-top: 0.75rem;
  padding: 0.5rem 1rem;
  color: #242525;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

@keyframes animate {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.09);
  }
}
</style>