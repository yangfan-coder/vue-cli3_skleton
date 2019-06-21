<template>
  <ul class="list">
    <li v-for="item in list">
      <img src="https://static-xesapi.speiyou.cn/1560681093846.png">
      <p>{{msg}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      list:[1,2,2,2,2,2,2,2]
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list li{
  display: flex;
  align-items: center;
  padding-top: 30px;
}
img {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  overflow: hidden;
}
p {
  padding-left: 30px;
  font-size: 20px;
  color: #000;
  height: 30px;
  width: 100%;
  text-align:left;
  margin: 0;
}
</style>
