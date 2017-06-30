<template>
  <div id='app'>
    <div class='layout'>
      <Menu mode='horizontal' theme='dark' active-name='1'>
        <div class='layout-logo'></div>

        <div class='layout-nav'>
          <Menu-item name='1'>
            <Icon type='ios-navigate'></Icon>
            Menu 1
          </Menu-item>

          <Menu-item name='2'>
            <Icon type='ios-keypad'></Icon>
            Menu 2
          </Menu-item>

          <Menu-item name='3'>
            <Icon type='ios-analytics'></Icon>
            Menu 3
          </Menu-item>
        </div>
      </Menu>

      <Menu mode='horizontal' active-name='1'>
        <div class='layout-assistant'>
          <Menu-item name='1'>List</Menu-item>
          <Menu-item name='2'>Search</Menu-item>
          <Menu-item name='3'>Stats</Menu-item>
        </div>
      </Menu>

      <div class='layout-content'>
        <Row>
          <i-col span='5'>
            <Menu active-name='1-2' width='auto' :open-names="['1']">
              <Submenu name='1'>
                <template slot='title'>
                  <Icon type='ios-navigate'></Icon>
                  All agencies
                </template>

                <Menu-item name='1-1'>Validated</Menu-item>
                <Menu-item name='1-2'>Delisted</Menu-item>
                <Menu-item name='1-3'>Creation</Menu-item>
              </Submenu>

              <Submenu name='2'>
                <template slot='title'>
                  <Icon type='ios-keypad'></Icon>
                  导航 二
                </template>

                <Menu-item name='2-1'>选项 1</Menu-item>
                <Menu-item name='2-2'>选项 2</Menu-item>
              </Submenu>
            </Menu>
          </i-col>

          <i-col span='19'>
            <div class='layout-content-main'>
              <router-view></router-view>
            </div>
          </i-col>
        </Row>
      </div>

      <app-footer></app-footer>
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
  background: #f5f7f9;
  border: 1px solid #d7dde4;
}

.layout-logo {
  background: #5b6270;
  border-radius: 3px;
  float: left;
  height: 30px;
  left: 20px;
  position: relative;
  top: 15px;
  width: 100px;
}

.layout-nav {
  margin: 0 auto;
  width: 420px;
}

.layout-assistant {
  height: inherit;
  margin: 0 auto;
  width: 300px;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  min-height: 200px;
  overflow: hidden;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  color: #9ea7b4;
  padding: 10px 0 20px;
  text-align: center;
}
</style>
