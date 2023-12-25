<template>
  <!-- <v-app> -->
  <div>
    <h1>manager product</h1>
    <v-row class="mt3">
      <!-- <h3>Danh sach Product</h3> -->
      <v-col cols="1" class="text-left"><v-btn class="ml-3" color="primary" small icon @click="(dialogAdd = true)"
        ><v-icon>mdi-plus</v-icon></v-btn
      ></v-col>
      <v-col cols="2" class="text-left">Search: </v-col>
      <v-col cols="4" class="text-right"><v-text-field variant="solo-filled" v-model="search"></v-text-field></v-col>
    </v-row>
    <v-row class="mt-3">
      <v-col>
        <v-card>
          <v-table>
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng tồn</th>
                <th>Giá bán</th>
                <th>Loại sản phẩm</th>
                <th>Bảo hành</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in searchProduct" :key="index">
                <td>{{ product.masanpham }}</td>
                <!-- <td v-for="(image, index) in listImageProduct" :key="index">
                                <v-img :src="imageDes + image"></v-img> -->
                <!-- </td> -->
                <td><v-img :src="imageDes + getImage(product.id)"></v-img></td>
                <td>{{ product.tensanpham }}</td>
                <td>{{ product.soluongton }}</td>
                <td>{{ product.giaban }}</td>
                <td>{{ getCategory(product.loaisanphamid) }}</td>
                <td>{{ product.baohanh }}</td>
                <td>
                  <v-btn
                    color="yellow"
                    icon
                    size="x-small"
                    class="mr-3"
                    @click="(dialogAddImage = true), (currentItem = product)"
                    ><v-icon>mdi-file-image-plus</v-icon></v-btn
                  >
                  <v-btn
                    icon
                    size="x-small"
                    color="blue"
                    class="mr-3"
                    @click="(dialogEdit = true), (currentItem = product)"
                    ><v-icon>mdi-square-edit-outline</v-icon></v-btn
                  >
                  <v-btn
                    color="red"
                    icon
                    size="x-small"
                    class="mr-3"
                    @click="(dialogDelete = true), (id = product.id)"
                    ><v-icon>mdi-delete</v-icon></v-btn
                  >
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
    <add-product-component
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getProduct"
      @upImage="getImagePeoduct"
    />
    <edit-product-component
      :dialogEdit="dialogEdit"
      @close="dialogEdit = false"
      :currentItem="currentItem"
      @updateData="getProduct"
    />
    <add-image
      :dialogAddImage="dialogAddImage"
      @close="dialogAddImage = false"
      :currentItem="currentItem"
      @updateData="getImagePeoduct"
    />

    <v-dialog max-width="450px" v-model="dialogDelete">
      <v-card>
        <v-alert type="warning">
          <v-row align="center">
            <v-col cols="11" class="text-center">
              Bạn có muốn xóa không?
            </v-col>
          </v-row>
          <v-row align="center">
            <v-spacer></v-spacer>
            <v-col cols="5" variant="text">
              <v-btn @click="handleDelete">Đồng ý</v-btn>
            </v-col>
            <v-col cols="6" variant="text">
              <v-btn @click="this.dialogDelete = false">Hủy bỏ</v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-card>
    </v-dialog>
    <!-- <v-pagination 
    :length="page" 
    @input="onPageChange"
    v-model="currentPage"></v-pagination> -->

  </div>
</template>

<script>
import axios from "axios";
import AddProductComponent from "./AddProductComponent.vue";
import EditProductComponent from "./EditProductComponent.vue";
import AddImage from "./AddImage.vue";
export default {
  components: { AddProductComponent, EditProductComponent, AddImage },
  data() {
    return {
      listProduct: [],
      listImageProduct: [],
      listCategory: [],
      imageDes: "data:image/jpeg;base64, ",
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      dialogAddImage: false,
      currentItem: "",
      formattedPrice: null,
      id: "",
      search: '',

      ///
      currentPage: 1,
      totalItems: 0,
      totalProduct: 0
      //

    };
  },
  methods: {
    getProduct() {
      axios
        .get(`https://localhost:7266/api/SanPham`)
        .then((response) => {
          this.listProduct = response.data
          // this.totalItems = response.data.length
        })
        .catch((e) => e);
    },
    getP() {
      axios.get('https://localhost:7266/api/SanPham')
      .then(response => this.totalProduct = response.data.length)
      .catch(e => e)
    },
    onPageChange(pageNumber) {
      this.currentPage = pageNumber
      this.getProduct()
    },
    getImagePeoduct() {
      axios
        .get(`https://localhost:7266/api/UploadImageSanPham/GetAllImageProduct`)
        .then((response) => (this.listImageProduct = response.data))
        .catch((e) => e);
    },
    getCategoryProduct() {
      axios
        .get(`https://localhost:7266/api/LoaiSanPham`)
        .then((response) => (this.listCategory = response.data));
    },
    getImage(id) {
      const image = this.listImageProduct.find((i) => i.idsanpham === id);
      return image ? image.imageUrl : "no";
    },
    getCategory(id) {
      const category = this.listCategory.find((c) => c.id === id);
      return category ? category.tenloaisanpham : "no";
    },
    removeImage() {
        axios.get(`https://localhost:7266/api/UploadImageSanPham/RemoveImage?idsanpham=${this.id}`)
        .then(response => {
            console.log(response.status)

        })
        .catch(e => e)
    },
    handleDelete() {
        this.removeImage()
        this.deleteProduct()
    },
    deleteProduct() {
      axios
        .delete(`https://localhost:7266/api/SanPham/${this.id}`)
        .then((response) => {
          var newArr = this.listProduct.filter((e) => e.id !== this.id);
          this.listProduct = newArr;
          this.dialogDelete = false;
          console.log(response.status);
        })
        .catch((e) => e);
    },
  },
  created() {
    this.getProduct();
    this.getImagePeoduct();
    this.getCategoryProduct();
    this.getP()
  },
  computed: {
    page() {
      return Math.ceil(this.totalProduct / 5)
    },
    searchProduct() {
      return this.listProduct.filter(p => p.tensanpham.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
};
</script>

<style>
</style>