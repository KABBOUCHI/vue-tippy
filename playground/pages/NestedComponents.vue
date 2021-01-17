<template>
  <div>
    <div style="margin-bottom: 20px">
      <ui-button>Click me</ui-button>
    </div>

    <div style="margin-bottom: 20px">
      <tippy>
        <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg" type="button">Trigger</button>
        <template #content> Working tooltip </template>
      </tippy>
    </div>

    <div style="margin-bottom: 20px">
      <tippy>
        <ui-button>Trigger with icon</ui-button>
        <template #content> Working tooltip </template>
      </tippy>
    </div>

    <div style="margin-bottom: 20px">
      <tippy interactive> 
        <ui-button>Icon inside content</ui-button>
        <template #content>
            <ui-button>Button 1</ui-button>
        </template>
      </tippy>
    </div>    
  </div>
</template>

<script>
import UiButton from "../components/Button.vue";
export default {
  name: "App",
  components: {
    UiButton,
  },
};
</script>
