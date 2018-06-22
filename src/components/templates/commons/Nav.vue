<template>
  <div id="navs">
    <nav id="nav">
      <el-row class="tac">
        <el-col :span="24">
          <div id="nav-header">
            <i class="el-icon-upload"></i>
            <span>虚拟私有云</span>
          </div>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo">
            <el-menu-item index="1">

              <router-link tag="div" to="/vpcs/vpcList" active-class="active">
                <i class="el-icon-upload"></i>
                <span >虚拟私有云</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link tag="div" to="/vpcs/securityGroup" active-class="active">
                <i class="el-icon-bell"></i>
                <span>安全组</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link tag="div" to="/vpcs/fireWall" active-class="active">
                <i class="el-icon-menu"></i>
                <span>防火墙</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link tag="div" to="/vpcs/peering" active-class="active">
                <i class="el-icon-sort"></i>
                <span>对等连接</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="5">
              <router-link tag="div" to="/vpcs/eipList" active-class="active">
                <i class="el-icon-star-off"></i>
                <span>弹性IP</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="6">
              <router-link tag="div" to="/vpcs/VPNList" active-class="active">
                <i class="el-icon-edit-outline"></i>
                <span>VPN</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="7">
              <router-link tag="div" to="/vpcs/ELBList" active-class="active">
                <i class="el-icon-upload2"></i>
                <span>负载均衡</span>
              </router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </nav>
  </div>
</template>
