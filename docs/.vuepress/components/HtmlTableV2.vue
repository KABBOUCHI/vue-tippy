<template>
  <div class="overflow-x-scroll my-5">
    <table class="w-full text-left table-collapse">
      <thead>
        <tr>
          <th class="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Option</th>
          <th class="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Default</th>
          <th class="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Inputs</th>
          <th class="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">Role</th>
        </tr>
      </thead>
      <tbody class="align-baseline">
        <tr>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-purple-dark whitespace-no-wrap"
          >reactive</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >false</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >Boolean</td>
          <td class="p-2 border-t border-grey-light text-sm text-grey-darker">
            <div class="p-2 border-b border-grey-lighter">
              <p class="m-2">
                When you set
                <span class="text-purple-dark">reactive</span> to
                <span class="text-blue-dark">true</span>, element will be used directly:
              </p>
              <p class="pl-8">– Can only be used once</p>
              <p class="pl-8">– Removed from the page and appended directly to the tooltip</p>
              <p class="pl-8">– Saves event listeners attached to it</p>
              <p class="pl-8">– Directly modifiable</p>
            </div>
            <div class="p-2">
              <p class="m-2">
                When you set
                <span class="text-purple-dark">reactive</span> to
                <span class="text-blue-dark">false</span>, element will be cloned:
              </p>
              <p class="pl-8">– Can be re-used multiple times</p>
              <p class="pl-8">– Not removed from the page</p>
              <p class="pl-8">– Will not save event listeners attached to it</p>
              <p class="pl-8">– Not directly modifiable</p>
              <p class="pl-8">
                – if you add
                <span class="text-purple-dark">v-tippy-html</span> directive will update the tooltip content automatically
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >interactive</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >false</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >Boolean</td>
          <td
            class="p-2 border-t border-grey-lighter text-sm text-grey-darker"
          >Makes a tooltip interactive, i.e. will not close when the user hovers over or clicks on the tooltip. This lets you create a popover (similar to Bootstrap) when used in conjunction with a click trigger.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
