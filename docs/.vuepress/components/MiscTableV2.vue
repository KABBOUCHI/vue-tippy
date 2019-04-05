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
          >distance</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >10</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >Number (pixels)</td>
          <td
            class="p-2 border-t border-grey-light text-sm text-grey-darker"
          >Specifies how far away the tooltip is from its reference element. This contrasts the offset option in that it only applies to a single axis and allows tooltips to still be interactive when their trigger is mouseenter.</td>
        </tr>
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >offset</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >0</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >Number | String (pixels)</td>
          <td
            class="p-2 border-t border-grey-lighter text-sm text-grey-darker"
          >Offsets a tooltip on a certain axis. Use a string such as '25, 10' to offset it on both the x and y axes.</td>
        </tr>
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >followCursor</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >false</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >Boolean</td>
          <td
            class="p-2 border-t border-grey-lighter text-sm text-grey-darker"
          >Specifies whether to follow the user's mouse cursor (mouse devices only).</td>
        </tr>
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >sticky</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >false</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >Boolean</td>
          <td
            class="p-2 border-t border-grey-lighter text-sm text-grey-darker"
          >Specifies whether the tooltip should stick to its reference element when it's showing (for example, if the element is animated/moves).</td>
        </tr>
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >size</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >'regular'</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >'small' 'regular' 'large'</td>
          <td
            class="p-2 border-t border-grey-lighter text-sm text-grey-darker"
          >Specifies how large the tooltip is.</td>
        </tr>
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >touchHold</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >false</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >Boolean</td>
          <td
            class="p-2 border-t border-grey-lighter text-sm text-grey-darker"
          >Changes the trigger behavior on touch devices. It will change it from a tap to show and tap off to hide, to a tap and hold to show, and a release to hide.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
