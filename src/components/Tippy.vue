<template>
  <span>
    <span ref="trigger">
      <slot ref="trigger" name="trigger"></slot>
    </span>

    <span ref="content">
      <slot></slot>
    </span>
  </span>
</template>

<script>
import tippy from "tippy.js";
import humps from "humps";
import defaultProps, { booleanProps } from "../props";
import pickBy from "lodash.pickby";
import mapValues from "lodash.mapvalues";
export default {
  props: [
    "to",
    "toSelector",
    "toElement",
    "content",
    "enabled",
    "visible",
    "triggerTarget"
  ],
  data() {
    return {
      tip: null,
      options: {}
    };
  },
  mounted() {
    let elm = this.toElement;

    if (elm == null) {
      if (this.to) {
        elm = document.querySelector(`[name='${this.to}']`);
      } else if (this.toSelector) {
        elm = document.querySelector(this.toSelector);
      } else {
        elm = this.$refs.trigger;
      }
    }

    this.tip = tippy(elm, this.getOptions());

    this.$emit("onCreate", this.tip);

    if (this.enabled === false) {
      this.tip.disable();
    }

    if (this.isManualTrigger && this.visible === true) {
      this.tip.show();
    }
  },
  watch: {
    content() {
      if (this.tip) {
        this.tip.set(this.getOptions());
      }
    },
    enabled(val) {
      if (!this.tip) return;

      if (val) {
        this.tip.enable();
      } else {
        this.tip.hide();
        this.tip.disable();
      }
    },
    visible(val) {
      if (!this.tip) return;

      if (val) {
        this.tip.show();
      } else {
        this.tip.hide();
      }
    }
  },
  updated() {
    if (this.tip && !this.content) {
      this.tip.set(this.getOptions());
    }
  },
  computed: {
    isManualTrigger() {
      return this.options.trigger === "manual";
    }
  },
  methods: {
    tippy() {
      return this.tip;
    },
    getOptions() {
      this.options = humps.camelizeKeys(this.$attrs);

      this.options = pickBy(this.options, (value, key) => {
        return defaultProps.hasOwnProperty(key);
      });

      this.options = mapValues(this.options, (value, key) => {
        if (booleanProps.hasOwnProperty(key)) {
          if (value === "") return true;
          if (value === "false") return false;
          if (value === "true") return true;
        }

        return value;
      });

      if (!this.options.onShow && this.$listeners && this.$listeners["show"]) {
        this.options.onShow = (...args) => {
          return this.$listeners["show"].fns(...args);
        };
      }

      if (!this.options.onShown) {
        this.options.onShown = (...args) => {
          this.$emit("shown", ...args);
        };
      }

      if (!this.options.onHidden) {
        this.options.onHidden = (...args) => {
          this.$emit("hidden", ...args);
        };
      }

      if (!this.options.onHide && this.$listeners && this.$listeners["hide"]) {
        this.options.onHide = (...args) => {
          return this.$listeners["hide"].fns(...args);
        };
      }

      if (!this.options.onMount) {
        this.options.onMount = (...args) => {
          this.$emit("mount", ...args);
        };
      }

      if (!this.options.hasOwnProperty("content")) {
        this.options.content = this.content ? this.content : this.$refs.content;
      }

      this.options.triggerTarget = this.triggerTarget;

      return this.options;
    }
  }
};
</script>
