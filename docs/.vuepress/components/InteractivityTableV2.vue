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
          >interactive</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >false</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >Boolean</td>
          <td
            class="p-2 border-t border-grey-light text-sm text-grey-darker"
          >Makes a tooltip interactive, i.e. will not close when the user hovers over or clicks on the tooltip. This lets you create a popover (similar to Bootstrap) when used in conjunction with a click trigger.</td>
        </tr>
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >interactiveBorder</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >2</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >Number (pixels)</td>
          <td
            class="p-2 border-t border-grey-lighter text-sm text-grey-darker"
          >Specifies the size of the invisible border around an interactive tooltip that will prevent it from closing. Only applies to mouseenter triggered tooltips.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
