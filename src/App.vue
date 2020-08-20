<template>
  <div id="app">
  <div></div>
  <TodoHeader />
  <TodoTitle />
  <TodoInput />
  <TodoController />
  <TodoList />
  <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoController from "./components/TodoController";
import TodoFooter from "./components/TodoFooter";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter
  }
}
</script>


<style lang="scss">

@font-face {
    font-family: 'BBTreeGB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
       
$color:#F2F3F4 ;
.list{
  background: $color;
}
.title{
  margin: 0 auto;
  letter-spacing: 0.03rem;
  color:$color ;
  
  &__message {
    font-size:2.4rem;
  }
  &__task {
    margin-top : 3.5rem;
    margin-bottom :5rem;
    font-weight: bold;

    &-total {
      font-size:4.4rem;
      line-height : 110%;

    }
  }

}
#app {
    font-family: BBTreeGB;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #F2F3F4 ;
    background :linear-gradient(#D6EAF8,#BB8FCE);
  }
  .footer{
    position:absolute;
    bottom:0;
    width:100%;
    height: 50px;
    text-align : center;
  }
  .add{
    text-align:center;
    height : auto;
    width : 500px;
    line-height: normal;
    margin :0 auto;
    border-radius: 30px;
    background-color: rgba(255,255,255,0.8);

    &__input{
      width:50%;
      background-color: inherit;
      line-height: 30px;
      padding: .8em .5em;
      font-family :inherit;
      border : transparent;
      outline:none;
      margin : 0 auto;
    }
    &_button{
      background-color: rgba(255,255,255,0);
      color:#797D7F;
      font-size: 20px;
      margin-left: 50px;
      margin-right: 0 auto;
      box-sizing : border-box;
      font-family :inherit;
      line-height: normal;
      outline : none;
      border : transparent;
    }
    ::placeholder{
      text-align: center;
      font-size: 120%;
      color :#797D7F ;
    }
  }
</style>
