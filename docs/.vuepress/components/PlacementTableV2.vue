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
          >placement</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >'top'</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >
            'top' 'bottom'
            'left' 'right'
          </td>
          <td
            class="p-2 border-t border-grey-light text-sm text-grey-darker"
          >Specifies which direction to place the tooltip in relation to the reference element. Add the suffix -start or -end to shift the placement. top-end is an example.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
