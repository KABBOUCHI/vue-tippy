<template>
  <div>
    <tippy content="Choose an aggregation for this area" :tag="null">
      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg">Aggregation #1</button>
    </tippy>

    <tippy content="View Android device page" :tag="null">
      <RouterLink to="/" aria-label="View Android device page">
          Link
      </RouterLink>
    </tippy>
  </div>
</template>

<script>
export default {

}
</script>