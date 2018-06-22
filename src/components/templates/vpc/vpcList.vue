<template>
  <div id="vpc-list-contant">
    <header id="vpc-header" class="create">
      <span class="title">虚拟私有云</span>
      <el-tooltip placement="right">
        <div slot="content">
          VPC即虚拟私有云，是通过逻辑方式进行网络隔离，提供安全、隔离的网络环境。VPC为您提供与传统网络无差别的虚拟网络，<br>
          同时还可以为您提供弹性公网IP、安全组、VPN等高级网络服务。
        </div>
        <i class="el-icon-question questionTip"></i>
      </el-tooltip>
      <el-button type="danger" class="createButton">
        创建虚拟私有云
      </el-button>
    </header>
    <section id="vpc-contant">
      <el-table
        :data="vpcTableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="名字/ID"
          width="380">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="180">
        </el-table-column>
        <el-table-column
          prop="subnet"
          label="子网数量"
          width="180">
        </el-table-column>
        <el-table-column
          prop="network"
          label="外部网络">
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="" type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        vpcTableData:[
          {
            name: `vpc-test <br> hfdjbbbw-skhfiihfh-nvjbvbjeb-nbvbbj`,
            status: '正常',
            subnet: '5',
            network: 'network01'
          }
        ]
      }
    }
  }
</script>
