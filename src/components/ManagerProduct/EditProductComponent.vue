<template>
  <div>
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-text>
          <v-card-title class="primary">
            <span style="color: #000">Cập nhật sản phẩm</span>
          </v-card-title>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Mã sản phẩm"
                    variant="solo-filled"
                    v-model="product.masanpham"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Tên sản phẩm"
                    variant="solo-filled"
                    v-model="product.tensanpham"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Kích thước màn hình"
                    variant="solo-filled"
                    v-model="product.kichthuocmanhinh"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Hệ điều hành"
                    variant="solo-filled"
                    v-model="product.hedieuhanh"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Bộ nhớ trong"
                    variant="solo-filled"
                    v-model="product.bonhotrong"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Trọng lượng"
                    variant="solo-filled"
                    v-model="product.trongluong"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Dung lượng pin"
                    variant="solo-filled"
                    v-model="product.dungluongpin"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Số lượng tồn"
                    variant="solo-filled"
                    v-model="product.soluongton"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Mô tả"
                    variant="solo-filled"
                    v-model="product.mota"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Giá bán"
                    variant="solo-filled"
                    v-model="product.giaban"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Màu sắc"
                    variant="solo-filled"
                    v-model="product.mausac"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Bảo hành"
                    variant="solo-filled"
                    v-model="product.baohanh"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <!-- <v-text-field
                    label="Loại sản phẩm"
                    variant="solo-filled"
                    v-model="product.loaisanphamid"
                  ></v-text-field> -->
                  <v-select
                    label="Chọn loại sản phẩm"
                    :items="listCategory"
                    variant="solo-filled"
                    item-value="id"
                    item-title="tenloaisanpham"
                    v-model="product.loaisanphamid"
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Bộ nhớ RAM"
                    variant="solo-filled"
                    v-model="product.bonhoram"
                  ></v-text-field>
                </v-col>
                <!-- <v-col>
                  <v-text-field label="Bảo hành" v-model="product.baohanh"></v-text-field>
                </v-col> -->
                <!-- <v-select
                  label="Select"
                  v-model="category"
                  :items="listCategory"
                  variant="solo-filled"
                >{{ category }}</v-select> -->
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="this.$emit('close')">Hủy</v-btn>
          <v-btn color="primary" @click="updateProduct">Cập nhật</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["dialogEdit", "currentItem"],
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
      listCategory: [],
      category: null,
    };
  },
  methods: {
    updateProduct() {
      axios
        .put(
          `https://localhost:7266/api/SanPham/${this.product.id}`,
          this.product
        )
        .then((response) => {
          this.$emit("close");
          this.$emit("updateData");
          console.log(response.status);
        })
        .catch((e) => e);
    },
    getCategoryProduct() {
      axios
        .get(`https://localhost:7266/api/LoaiSanPham`)
        .then((response) => (this.listCategory = response.data))
        .catch(e => e);
    },
  },
  computed: {
    dialog: {
      get() {
        return this.dialogEdit;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  watch: {
    currentItem() {
      this.product.id = this.currentItem.id;
      this.product.masanpham = this.currentItem.masanpham;
      this.product.tensanpham = this.currentItem.tensanpham;
      this.product.kichthuocmanhinh = this.currentItem.kichthuocmanhinh;
      this.product.hedieuhanh = this.currentItem.hedieuhanh;
      this.product.bonhotrong = this.currentItem.bonhotrong;
      this.product.trongluong = this.currentItem.trongluong;
      this.product.dungluongpin = this.currentItem.dungluongpin;
      this.product.soluongton = this.currentItem.soluongton;
      this.product.mota = this.currentItem.mota;
      this.product.giaban = this.currentItem.giaban;
      this.product.mausac = this.currentItem.mausac;
      this.product.baohanh = this.currentItem.baohanh;
      this.product.loaisanphamid = this.currentItem.loaisanphamid;
      this.product.bonhoram = this.currentItem.bonhoram;
      ///.....
    },
  },
  created() {
    this.getCategoryProduct()
  }
};
</script>

<style>
</style>