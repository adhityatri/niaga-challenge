<template>
  <ul :class="bordered ? 'bordered' : ''">
      <li v-for="(item, index) in data" :key="index">
          <i class="fas fa-check-circle check" />
          <span>{{item}}</span>
      </li>
  </ul>
</template>

<script>
export default {
    name:"list-component",
    props: {
        data : Array,
        bordered : false,
        half : true
    }
}
</script>

<style lang="scss" scoped>
    span{
        font-size: 16px;
    }
    .bordered{
        li{
            border: 1px solid darken(white, 5%);
            margin-bottom: 0;
            margin-top: 0;
            padding: 10px;  
        }
    }
    .check{
        color: green;
        font-size: 16px;
        margin-right: 10px;
    }

    ul {
        li{
            margin-bottom: 10px;
            &:first-child{
                margin-top: 10px;
            }
            &:last-child{
                margin-bottom :0;
            }
        }
    }
</style>>

</style>