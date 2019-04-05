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
          >trigger</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >'mouseenter focus'</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >
            'mouseenter' 'focus'
            'click' 'manual' {custom}
          </td>
          <td
            class="p-2 border-t border-grey-light text-sm text-grey-darker"
          >Specifies which type of events will trigger a tooltip to show. Separate each by a space. mouseenter is for hovering and touch on mobile, and focus is for keyboard navigation. Use manual if you want to show/hide the tooltip manually (see the Methods section below). {custom} refers to the fact that you can have any event listener, but it won't have the opposite "hide" event.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
