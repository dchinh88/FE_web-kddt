<template>
  <div>
    <h1>Managrer staff</h1>
    <v-row class="mt-3">
      <v-btn icon class="ml-4" color="red"
        small @click="dialogAdd=true"
      ><v-icon>mdi-plus</v-icon></v-btn>
    </v-row>
    <v-row class="mt-3">
      <v-col>
        <v-card>
          <v-table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã nhân viên</th>
                <th>Họ tên</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
                <!-- <td>SDT</td> -->
                <th class="text-center">Email</th>
                <th>Chức vụ</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(nhanvien, index) in listNhanVien" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ nhanvien.manhanvien }}</td>
                <td>{{ nhanvien.hoten }}</td>
                <!-- <td>{{ new Date(nhanvien.ngaysinh).getDate() }}</td> -->
                <td>{{ getTime(nhanvien.ngaysinh) }}</td>
                <td>{{ nhanvien.gioiTinh === true ? "Nam" : "Nữ" }}</td>
                <td>{{ nhanvien.diachi }}</td>
                <!-- <td>{{ nhanvien.sdt }}</td> -->
                <td>{{ nhanvien.email }}</td>
                <td>{{ chucvu(nhanvien.chucvuid) }}</td>
                <td>
                  <v-btn
                    icon
                    size="x-small"
                    color="blue"
                    class="mr-3"
                    @click="(dialogEdit=true), (currentItem=nhanvien)"
                  ><v-icon>mdi-square-edit-outline</v-icon></v-btn>
                  <v-btn
                    color="red"
                    icon
                    size="x-small"
                    class="mr-3"
                    @click="(dialogDelete=true), (id=nhanvien.id)"
                  ><v-icon>mdi-delete</v-icon></v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
    <add-nhan-vien-component
      :dialogAdd="dialogAdd"
      @close="dialogAdd=flase"
      @updateData="getNhanVien"
    />
    <edit-nhan-vien-component
      :dialogEdit="dialogEdit"
      @close="dialogEdit=false"
      :currentItem="currentItem"
      @updateData="getNhanVien"
    
    />

    <v-dialog max-width="450px" v-model="dialogDelete">
      <v-card>
        <v-alert type="warning">
          <v-row align="center">
            <v-col cols="11" class="text-center">
              Bạn có muốn xóa nhân viên này?
            </v-col>
          </v-row>
          <v-row align="center">
            <v-spacer></v-spacer>
            <v-col cols="5" variant="text">
              <v-btn @click="deleteNhanVien">Dong y</v-btn>
            </v-col>
            <v-col cols="6" variant="text">
              <v-btn @click="this.dialogDelete = false">Huy</v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import AddNhanVienComponent from './AddNhanVienComponent.vue';
import EditNhanVienComponent from './EditNhanVienComponent.vue';
// import { format } from 'date-fns';
export default {
  components: { AddNhanVienComponent, EditNhanVienComponent },
  data() {
    return {
      listNhanVien: [],
      listChucVu: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      id: ''
    };
  },
  methods: {
    getNhanVien() {
      axios
        .get("https://localhost:7266/api/NhanVien")
        .then((response) => (this.listNhanVien = response.data))
        .catch((e) => e);
    },
    getChucVu() {
      axios.get('https://localhost:7266/api/Chucvunhanvien')
        .then(response => this.listChucVu = response.data)
        .catch(e => e)
    },
    chucvu(id) {
      const cv = this.listChucVu.find(c => c.id === id)
      return cv ? cv.tenchucvu : 'nope'
    },
    getTime(time) {
      const day = new Date(time).getDate()
      const month = new Date(time).getMonth() + 1
      const year = new Date(time).getFullYear()
      return day + "/" + month  + "/" + year
    },
    deleteNhanVien() {
      axios.delete(`https://localhost:7266/api/NhanVien/${this.id}`)
      .then(response => {
        var newArr = this.listNhanVien.filter(e => e.id !== this.id)
        this.listNhanVien = newArr
        this.dialogDelete = false
        console.log(response.status);
      })
      .catch(e => e)
    }
  },
  created() {
    this.getNhanVien()
    this.getChucVu()
  }
};
</script>

<style>
</style>