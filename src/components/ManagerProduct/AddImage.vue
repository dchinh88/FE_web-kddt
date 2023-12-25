<template>
  <div>
    <v-dialog v-model="dialog" max-width="450px">
      <v-card>
        <v-card-text class="primary">
          <span>Upload Image</span>
        </v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-text-field
                label="id"
                variant="solo-filled"
                v-model="product.id"
                readonly=""
              ></v-text-field>
            </v-row>
            <v-row>
              <v-file-input
                v-model="files"
                label="Choose files"
                multiple
              ></v-file-input>
            </v-row>
          </v-container>
        </v-form>
        <v-spacer></v-spacer>
        <v-card-actions>
            <v-btn class="mr-2" color="grey darken-3"
                @click="this.$emit('close')"
            >Hủy</v-btn>
            <v-btn color="primary" @click="uploadImages">Upload</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["dialogAddImage", "currentItem"],
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
      files: [],
    };
  },
  computed: {
    dialog: {
      get() {
        return this.dialogAddImage;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  methods: {
    uploadImages() {
      const formData = new FormData();
      this.files.forEach((file) => {
        formData.append("formFiles", file);
      });
      formData.append("idsanpham", this.product.id);
      try {
        axios
          .put(
            "https://localhost:7266/api/UploadImageSanPham/DBUploadMultiImage",
            formData
          )
          .then((res) => {
            
            console.log(res.status)
            this.$emit("close")
            this.$emit("updateData")
            this.product = {}
            this.files = []
          })
          .catch((e) => e);
      } catch (error) {
        console.log(error);
        this.$toast.error("Failed to upload images");
      }
    },
  },
  watch: {
    currentItem() {
      this.product.id = this.currentItem.id;
    //   this.product.masanpham = this.currentItem.masanpham;
    //   this.product.tensanpham = this.currentItem.tensanpham;
    //   this.product.kichthuocmanhinh = this.currentItem.kichthuocmanhinh;
    //   this.product.hedieuhanh = this.currentItem.hedieuhanh;
    //   this.product.bonhotrong = this.currentItem.bonhotrong;
    //   this.product.trongluong = this.currentItem.trongluong;
    //   this.product.dungluongpin = this.currentItem.dungluongpin;
    //   this.product.soluongton = this.currentItem.soluongton;
    //   this.product.mota = this.currentItem.mota;
    //   this.product.giaban = this.currentItem.giaban;
    //   this.product.mausac = this.currentItem.mausac;
    //   this.product.baohanh = this.currentItem.baohanh;
    //   this.product.loaisanphamid = this.currentItem.loaisanphamid;
    //   this.product.bonhoram = this.currentItem.bonhoram;
      ///.....
    },
  },
};
</script>

<style>
</style>