<template>
  <span>
    <span ref="trigger">
      <slot ref="trigger" name="trigger"></slot>
    </span>

    <span ref="content" style="display:none">
      <slot></slot>
    </span>
  </span>
</template>

<script>
import tippy from "tippy.js";
import camelcaseKeys from "camelcase-keys";
import defaultProps, { booleanProps } from "../props";
import pickBy from "lodash.pickby";
import mapValues from "lodash.mapvalues";

export default {
  props: ["to", "toSelector", "toElement", "content", "enabled", "visible"],
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
        elm = document.querySelectorAll(`[name='${this.to}']`);
      } else if (this.toSelector) {
        elm = document.querySelectorAll(this.toSelector);
      } else {
        elm = this.$refs.trigger;
      }
    }

    this.tip = tippy(elm, this.getOptions());

    this.$emit("onCreate", this.tip);

    if (this.enabled === false) {
      [].concat(this.tip).forEach(t => t.disable());
    }

    if (this.isManualTrigger && this.visible === true) {
      [].concat(this.tip).forEach(t => t.show());
    }
  },
  destroyed() {
    if (this.tip) {
      this.tippys().forEach(t => t.destroy());
    }
  },
  watch: {
    content() {
      if (this.tip) {
        let options = this.getOptions();
        this.tippys().forEach(t => t.set(options));
      }
    },
    enabled(val) {
      if (!this.tip) return;

      if (val) {
        this.tippys().forEach(t => t.enable());
      } else {
        this.tippys().forEach(t => t.hide());
        this.tippys().forEach(t => t.disable());
      }
    },
    visible(val) {
      if (!this.tip) return;

      if (val) {
        this.tippys().forEach(t => t.show());
      } else {
        this.tippys().forEach(t => t.hide());
      }
    }
  },
  updated() {
    if (this.tip && !this.content) {
      let options = this.getOptions();
      this.tippys().forEach(t => t.set(options));
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
    tippys() {
      return [].concat(this.tip);
    },
    getOptions() {
      this.options = camelcaseKeys(this.$attrs);

      this.options = pickBy(this.options, (value, key) => {
        return defaultProps.hasOwnProperty(key);
      });

      this.options = mapValues(this.options, (value, key) => {
        if (booleanProps.hasOwnProperty(key)) {
          if (value === "") return true;

          return value === "false" ? false : value;
        }
        return value;
      });

      if (!this.options.onShow) {
        this.options.onShow = (...args) => {
          this.$emit("show", ...args);
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

      if (!this.options.onHide) {
        this.options.onHide = (...args) => {
          this.$emit("hide", ...args);
        };
      }

      if (!this.options.onMount) {
        this.options.onMount = (...args) => {
          this.$emit("mount", ...args);
        };
      }

      if (!this.options.hasOwnProperty("content")) {
        this.options.content = this.content
          ? this.content
          : this.$refs.content.innerHTML;
      }

      return this.options;
    }
  }
};
</script>
