<template>
  <div class="main">
    <div class="logo">
      {{$config.name}}
    </div>
    <div class="menu">
      <el-button type="danger"
        @click="()=>{this.$emit('clearData')}">清理数据</el-button>
      <el-button type="primary"
        @click="()=>{this.$emit('viewCode')}">查看页面对应的Python代码</el-button>
      <el-button type="primary"
        @click="preview()">预览页面</el-button>
      <el-dropdown split-button
        type="primary"
        class="export_btn"
        @click="()=>{this.$emit('onClickExport')}">
        导出.tk文件
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-upload action=""
              :before-upload="beforeUpload"
              :limit="1">
              导入布局文件
            </el-upload>

          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
import { preview } from "@/config.js";
import GenerateCode from "@/core/generate-code";
import { mapGetters } from "vuex";

export default {
  props: ["beforeUpload"],
  computed: {
    ...mapGetters(["frame"]),
  },
  methods: {
    clearData() {
      this.$confirm("此操作将会清空数据和缓存, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.elements = [];
        localStorage.clear();
        this.$message({
          type: "success",
          message: "删除成功!",
        });
      });
    },
    preview() {
      let t = new GenerateCode(this.frame);
      let code = t.build();

      // 调用run方法
      code = code + "run()";

      this.$http
        .post(preview.url, code, {
          headers: {
            "Content-Type": "text/plain",
          },
        })
        .then((res) => {
          this.$message.success("发送成功");
        })
        .catch((err) => {
          this.$alert(
            "下载预览服务脚本<a href='https://github.com/Vincent-the-gamer/TkinterMakerApp/blob/gh-pages/preview.py'>[preview.py]</a>，启动后在尝试。",
            "服务未启动",
            {
              dangerouslyUseHTMLString: true,
            }
          );
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;

  .logo {
    flex: 1;
    width: 200px;
    font-size: 24px;
    line-height: 60px;
    padding-left: 30px;
  }

  .menu {
    .export_btn {
      margin-left: 10px;
    }
  }
}
</style>