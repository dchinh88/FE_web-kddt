<template>
  <div>
    <v-dialog max-width="800px" v-model="dialog">
      <v-card>
        <v-card-title>Thêm nhân viên mới</v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col
                  ><v-text-field
                    variant="solo-filled"
                    label="Mã nhân viên"
                    v-model="nhanvien.manhanvien"
                  ></v-text-field
                ></v-col>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Họ tên"
                    v-model="nhanvien.hoten"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Ngày sinh"
                    type="date"
                    v-model="nhanvien.ngaysinh"
                  ></v-text-field
                >
                  <!-- <input type="date" v-model="nhanvien.ngaysinh" /> -->
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Địa chỉ"
                    v-model="nhanvien.diachi"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  ><v-text-field
                    variant="solo-filled"
                    label="Số điện thoại"
                    v-model="nhanvien.sdt"
                  ></v-text-field
                ></v-col>
                <v-col>
                  <v-text-field
                    variant="solo-filled"
                    label="Email"
                    v-model="nhanvien.email"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  ><v-radio-group inline v-model="nhanvien.gioitinh">
                    <v-radio label="Nam" :value="true"></v-radio>
                    <v-radio
                      label="Nữ"
                      :value="false"
                    ></v-radio> </v-radio-group
                ></v-col>
                <v-col>
                  <!-- <v-text-field
                    variant="solo-filled"
                    label="Chức vụ"
                    v-model="nhanvien.chucvuid"
                  ></v-text-field> -->
                  <v-select
                    label="Chọn chức vụ"
                    :items="listChucVu"
                    variant="solo-filled"
                    item-value="id"
                    item-title="tenchucvu"
                    v-model="nhanvien.chucvuid"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn
            class="mr-2"
            @click="this.$emit('close'), (this.nhanvien = {})"
            color="grey darken-3"
            >Hủy</v-btn
          >
          <v-btn color="red" @click="addNhanVien">Lưu</v-btn>
          <!-- <v-btn color="red" @click="loginfo">Lưu</v-btn> -->
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
      nhanvien: {
        manhanvien: "",
        hoten: "",
        ngaysinh: Date(),
        diachi: "",
        sdt: "",
        email: "",
        chucvuid: Number(),
        gioitinh: Boolean(null),
      },
      listChucVu: [],
    };
  },
  methods: {
    addNhanVien() {
      axios
        .post("https://localhost:7266/api/NhanVien", this.nhanvien)
        .then((response) => {
          this.$emit("close");
          this.$emit("updateData");
          this.nhanvien = {};
          console.log(response.status);
        })
        .catch((e) => e);
    },
    getChucvuNhanVien() {
      axios
        .get("https://localhost:7266/api/Chucvunhanvien")
        .then((response) => (this.listChucVu = response.data))
        .catch((e) => e);
    },
    getChucVu(id) {
      const cv = this.listChucVu.find((e) => e.id === id);
      return cv ? cv.tenchucvu : "";
    },
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
  mounted() {
    this.getChucvuNhanVien();
  },
};
</script>

<style>
</style>