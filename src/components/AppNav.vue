<template>
  <Menu mode='horizontal' theme='dark' active-name='1'>
    <div class='layout-logo'></div>

    <div class='layout-nav'>
      <Menu-item name='1'>
        <router-link :to='{ name: "AgenciesIndex" }'>
          <Icon type='ios-location'></Icon>
          Agencies
        </router-link>
      </Menu-item>

      <Menu-item name='2'>
        <router-link :to='{ name: "Logs" }'>
          <Icon type='ios-analytics'></Icon>
          Logs
        </router-link>
      </Menu-item>
    </div>
  </Menu>
</template>
