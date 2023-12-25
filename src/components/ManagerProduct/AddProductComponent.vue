<template>
  <div>
    <v-dialog v-model="dialog" max-width="1000px">
      <v-card>
        <v-card-title>Thêm sản phẩm mới</v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Mã sản phẩm"
                    v-model="product.masanpham"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Tên sản phẩm"
                    v-model="product.tensanpham"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Kích thước màn hình"
                    v-model="product.kichthuocmanhinh"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Hệ điều hành"
                    v-model="product.hedieuhanh"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Bộ nhớ trong"
                    v-model="product.bonhotrong"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Trọng lượng"
                    v-model="product.trongluong"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- <v-row>
                
              </v-row> -->
              <v-row>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Dung lượng pin"
                    v-model="product.dungluongpin"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Số lượng tồn"
                    v-model="product.soluongton"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Mô tả"
                    v-model="product.mota"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Giá bán"
                    v-model="product.giaban"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Màu sắc"
                    v-model="product.mausac"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Bảo hành"
                    v-model="product.baohanh"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <!-- <v-text-field
                    variant="solo-filled"
                    label="Loại sản phẩm"
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
                    variant="solo-filled"
                    label="Bô nhớ RAM"
                    v-model="product.bonhoram"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <!-- <v-file-input
                    v-model="selectedFiles"
                    label="Chọn hình ảnh"
                    multiple
                    accept=".jpg,.png"
                    @change="uploadImages"
                  ></v-file-input> -->
                  <v-file-input
      v-model="files"
      label="Choose files"
      multiple
      
    ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn class="mr-2" color="grey darken-3" @click="this.$emit('close')"
            >Hủy</v-btn
          >
          <v-btn color="primary" @click="handleButton">Lưu</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["dialogAdd"],
  data() {
    return {
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
      selectedFiles: [],
      files: [],
      id: '',
      listCategory: [],
      listProduct: []
    };
  },
  methods: {
    addProduct() {
      axios
        .post(`https://localhost:7266/api/SanPham`, this.product)
        .then((response) => {
          this.getAllProduct()
          this.$emit("close");
          this.$emit("updateData");
          
          this.product = {};
          console.log(response.status);
        })
        // .then(() => this.id = this.product.id)
        .catch((e) => e);
    },
    handleButton() {
      this.addProduct();
      this.getAllProduct()
      this.uploadImages();
    },
    uploadImages() {
      // this.getAllProduct()
      const idSp = this.listProduct.length - 1
      if(idSp >= 0) {
        const lastItem = this.listProduct[idSp]
        this.id = lastItem.id + 1
      }
      const formData = new FormData();
      this.files.forEach((file) => {
        formData.append("formFiles", file);
      });
      formData.append("idsanpham", this.id);
      try {
        axios.put("https://localhost:7266/api/UploadImageSanPham/DBUploadMultiImage", formData)
        .then(res => {
          // this.files = []
          this.id = ''
          this.$emit("upImage")
          console.log(res.status)
        })
        .catch(e => e)
      } catch (error) {
        console.log(error);
        this.$toast.error("Failed to upload images");
      }
    },
    getLoaiSanPham() {
      axios.get(`https://localhost:7266/api/LoaiSanPham`)
      .then(response => this.listCategory = response.data)
      .catch(e => e)
    },
    getAllProduct() {
      axios.get('https://localhost:7266/api/SanPham')
      .then(response => this.listProduct = response.data)
      .catch(e => e)
    }
  },
  computed: {
    dialog: {
      get() {
        return this.dialogAdd;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  created() {
    this.getLoaiSanPham()
    this.getAllProduct()
  }
};
</script>

<style>
</style>