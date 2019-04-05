<template>
  <div class="overflow-x-scroll">
    <table class="w-full text-left table-collapse my-5">
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
          >delay</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >0</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >
            Number | Array
            (milliseconds)
          </td>
          <td
            class="p-2 border-t border-grey-light text-sm text-grey-darker"
          >Specifies how long it takes after a show or hide event is fired for a tooltip to begin showing or hiding. Use an array to specify a different show and hide delay, such as [300, 100].</td>
        </tr>
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >duration</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >[350, 300]</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >
            Number | Array
            (milliseconds)
          </td>
          <td
            class="p-2 border-t border-grey-lighter text-sm text-grey-darker"
          >Specifies how long the transition animation takes to complete. A single number will use the same duration for the show and hide events. Use an array to specify a different show and hide duration, such as [300, 100].</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
