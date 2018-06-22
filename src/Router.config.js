

export default [
  {
    path: '/vpcs/vpcList',
    components: require('./components/templates/vpc/vpcList.vue')
  },
  {
    path: '/vpcs/securityGroup',
    components: require('./components/templates/securityGroup/securityGroup.vue')
  },
  {
    path: '/vpcs/fireWall',
    components: require('./components/templates/fireWall/fireWall.vue')
  },
  {
    path: '/vpcs/peering',
    components: require('./components/templates/peering/peering.vue')
  },
  {
    path: '/vpcs/VPNList',
    components: require('./components/templates/VPN/VPN.vue')
  },
  {
    path: '/vpcs/EIPList',
    components: require('./components/templates/EIP/EIP.vue')
  },
  {
    path: '/vpcs/ELBList',
    components: require('./components/templates/ELB/ELB.vue')
  }
]

