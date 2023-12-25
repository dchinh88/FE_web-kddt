<template>
  <div>
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-text>
          <v-card-title class="primary">
            <span style="color: #000">Cập nhật thông tin nhân viên</span>
          </v-card-title>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Mã nhân viên"
                    variant="solo-filled"
                    v-model="nhanvien.manhanvien"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Họ tên"
                    variant="solo-filled"
                    v-model="nhanvien.hoten"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Ngày sinh"
                    variant="solo-filled"
                    v-model="nhanvien.ngaysinh"
                    type="date"
                  ></v-text-field>
                  <!-- <input type="date" v-model="nhanvien.ngaysinh" />  -->
                  <!-- <v-date-picker
            v-model="nhanvien.ngaysinh"
            label="Chọn ngày"
            locale="en"
            scrollable
          ></v-date-picker> -->
                </v-col>
                <v-col>
                  <v-text-field
                    label="Địa chỉ"
                    variant="solo-filled"
                    v-model="nhanvien.diachi"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Số điện thoại"
                    variant="solo-filled"
                    v-model="nhanvien.sdt"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Email"
                    variant="solo-filled"
                    v-model="nhanvien.email"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <!-- <v-text-field
                    label="Giới tính"
                    variant="solo-filled"
                    v-model="nhanvien.gioitinh"
                  ></v-text-field> -->
                  <v-radio-group inline v-model="nhanvien.gioitinh">
                    <v-radio label="Nam" :value="true"></v-radio>
                    <v-radio label="Nữ" :value="false"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col>
                  <!-- <v-text-field
                    label="Chức vụ"
                    variant="solo-filled"
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
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="this.$emit('close')">Hủy</v-btn>
          <v-btn color="green" @click="updateNhanVien">Cập nhật</v-btn>
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
      nhanvien: {
        id: "",
        manhanvien: "",
        hoten: "",
        ngaysinh: Date(),
        diachi: "",
        std: "",
        email: "",
        chucvuid: Number(),
        gioitinh: Boolean(),
      },
      listChucVu: [],
    };
  },
  methods: {
    updateNhanVien() {
      axios
        .put(
          `https://localhost:7266/api/NhanVien/${this.nhanvien.id}`,
          this.nhanvien
        )
        .then((response) => {
          this.$emit("close");
          this.$emit("updateData");
          this.nhanvien = {}
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
      this.nhanvien.id = this.currentItem.id;
      this.nhanvien.manhanvien = this.currentItem.manhanvien;
      this.nhanvien.hoten = this.currentItem.hoten;
      this.nhanvien.ngaysinh = this.currentItem.ngaysinh;
      this.nhanvien.diachi = this.currentItem.diachi;
      this.nhanvien.std = this.currentItem.sdt;
      this.nhanvien.email = this.currentItem.email;
      this.nhanvien.chucvuid = this.currentItem.chucvuid;
      this.nhanvien.gioitinh = this.currentItem.gioitinh;
    },
  },
  created() {
    this.getChucvuNhanVien();
  },
};
</script>

<style>
</style>