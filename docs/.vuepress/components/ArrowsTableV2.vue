<template>
  <div class="overflow-y-auto my-5">
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
          >arrow</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >false</td>
          <td
            class="p-2 border-t border-grey-light font-mono text-xs text-blue-dark whitespace-pre"
          >Boolean</td>
          <td
            class="p-2 border-t border-grey-light text-sm text-grey-darker"
          >Adds an arrow pointing to the reference element. Setting this to true disables animateFill.</td>
        </tr>
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >arrowType</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >'sharp'</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >'sharp' 'round'</td>
          <td
            class="p-2 border-t border-grey-lighter text-sm text-grey-darker"
          >Specifies the type of arrow to use. Sharp is a CSS triangle, whereas Round is a custom SVG shape.</td>
        </tr>
        <tr>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-purple-dark whitespace-no-wrap"
          >arrowTransform</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >''</td>
          <td
            class="p-2 border-t border-grey-lighter font-mono text-xs text-blue-dark whitespace-pre"
          >Transform CSS</td>
          <td class="p-2 border-t border-grey-lighter text-sm text-grey-darker">
            Allows you to transform the arrow, such as the proportion using scale.
            <br>
            <br>Because of flipping, the syntax becomes dynamic. You must use the syntax that gives the desired results for the top placement, even if you use a different placement. Only translate and scale are supported for dynamic syntax.
            <br>
            <br>'scaleX(1.5)' = wider arrow
            <br>'scaleX(0.5)' = narrower arrow
            <br>'scale(0.5)' = smaller arrow
            <br>'scale(1.5)' = larger arrow
            <br>'translateY(-5px)' = arrow closer to tooltip
            <br>'translateY(5px)' = arrow farther from tooltip
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
