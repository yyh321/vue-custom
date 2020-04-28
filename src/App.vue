<template>
  <div>
    <h1>Hello,Vue</h1>
    <Foo />
    <Bar />
  </div>
</template>

<script>
import Foo from "./components/Foo.vue";
import Bar from "./components/Bar.vue";
export default {
  name: "App",
  components: {
    Foo,
    Bar
  }
};
</script>

<style>
</style>