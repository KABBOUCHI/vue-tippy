<template>
  <div class="overflow-y-scroll my-5">
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
          >animation</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >'shift-away'</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >
            'shift-away'
            'shift-toward'
            'perspective'
            'fade' 'scale'
          </td>
          <td
            class="p-2 border-t border-grey-light text-sm text-grey-darker"
          >Specifies the type of transition animation a tooltip has.</td>
        </tr>
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >animationFill</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >true</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >Boolean</td>
          <td
            class="p-2 border-t border-grey-lighter text-sm text-grey-darker"
          >Adds a material design-esque filling animation. This is disabled if you have 'arrow' set to true.</td>
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
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >inertia</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >false</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >Boolean</td>
          <td
            class="p-2 border-t border-grey-lighter text-sm text-grey-darker"
          >Modifies the transition-timing-function with a cubic bezier to create a 'slingshot' intertial effect.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
