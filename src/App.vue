<template>
  <div id='app'>
    <div class='layout'>
      <Row type='flex'>
        <i-col span='5' class='layout-menu-left'>
          <Menu active-name='1-2' theme='dark' width='auto' :open-names="['1']">
            <div class='layout-logo-left'></div>

            <Submenu name='1'>
              <template slot='title'>
                <Icon type='ios-location'></Icon>
                Agencies
              </template>

              <Menu-item name='1-1'>
                <router-link :to="{ name: 'AgenciesIndex' }">
                  List
                </router-link>
              </Menu-item>

              <Menu-item name='1-2'>Create</Menu-item>
            </Submenu>
          </Menu>
        </i-col>

        <i-col span='19'>
          <div class='layout-header'>
            <Menu mode='horizontal' theme='dark' active-name='1'>
              <div class='layout-logo'></div>

              <div class='layout-nav'>
                <Menu-item name='1'>
                  <router-link :to="{ name: 'Logs' }">
                    <Icon type='ios-eye'></Icon>
                    Logs
                  </router-link>
                </Menu-item>
              </div>
            </Menu>
          </div>

          <div class='layout-breadcrumb'>
            <Breadcrumb>
              <Breadcrumb-item href='#'>首页</Breadcrumb-item>
              <Breadcrumb-item href='#'>应用中心</Breadcrumb-item>
              <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
          </div>

          <div class='layout-content'>
            <div class='layout-content-main'>
              <router-view></router-view>
            </div>
          </div>

          <div class='layout-copy'>
            2017
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
import 'iview/dist/styles/iview.css'
import AppFooter from '@/components/AppFooter'
import AppNav from '@/components/AppNav'

export default {
  name: 'app',
  props: ['title'],
  components: {
    AppNav,
    AppFooter
  }
}
</script>

<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-menu-left {
    background: #464c5b;
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}
</style>
