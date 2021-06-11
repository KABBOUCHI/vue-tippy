<template>
  <div>

    <input
      type="text"
      v-model="content"
    >

    <TippyComponent>
      Hi
    </TippyComponent>

    <TippyComponentTwo />
    <br>
    <br>
    <br>

    <button @click="show">Show</button>
  </div>
</template>

<script>
import { h, ref } from "vue";
import { useTippyComponent } from './../../src/composables/useTippyComponent';
import ButtonVue from '../components/Button.vue';
export default {
  name: "App",
  setup() {
    const content = ref('Hello!')
    const { TippyComponent, instance } = useTippyComponent({
      content
    })

    const show = () => {
      instance.value.show()
    }

    const { TippyComponent: TippyComponentTwo } = useTippyComponent(
      {
        content : h(ButtonVue, { style : { background : 'red'} }, 'test')
      },
      () => h('button', { style : { background : 'red'} }, 'test')
    )

    return {
      content,
      TippyComponent,
      TippyComponentTwo,
      show
    }
  }
};
</script>