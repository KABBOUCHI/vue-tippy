<template>
  <div>
    <div ref="trigger">
      <slot name="trigger"></slot>
    </div>

    <div ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js'
import humps from "humps";
import defaultProps, { booleanProps } from "../props";
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
    this.init();
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
  beforeDestroy() {
    if (!this.tip) return;

    this.tip.destroy();
  },
  computed: {
    isManualTrigger() {
      return this.options.trigger === "manual";
    }
  },
  methods: {
    init() {
      if (this.tip) {
        try {
          this.tip.destroy();
        } catch (error) { }

        this.tip = null;
      }

      let elm = this.toElement;

      if (elm == null) {
        if (this.to) {
          elm = document.querySelector(`[name='${this.to}']`);
        } else if (this.toSelector) {
          elm = document.querySelector(this.toSelector);
        } else if (
          this.$refs.trigger &&
          this.$refs.trigger.childElementCount > 0
        ) {
          elm = this.$refs.trigger;
        } else {
          elm = this.$el.parentElement;
        }
      }

      if (!elm) {
        return;
      }

      let tip = tippy(elm, this.getOptions());

      if (!tip) {
        return;
      }

      if (Array.isArray(tip)) {
        if (tip.length > 0) {
          this.tip = tip[0];
        } else {
          return;
        }
      }

      this.tip = tip;

      this.$emit("onCreate", this.tip);
      this.$emit("init", this.tip);

      if (this.enabled === false) {
        this.tip.disable();
      }

      if (this.isManualTrigger && this.visible === true) {
        this.tip.show();
      }
    },
    tippy() {
      return this.tip;
    },
    filterOptions() {
      const getValue = (key, value) => {
        if (booleanProps.hasOwnProperty(key)) {
          if (value === "") return true;
          if (value === "false") return false;
          if (value === "true") return true;
        }

        return value;
      };

      for (const key of Object.keys(this.options)) {
        if (!defaultProps.hasOwnProperty(key)) {
          // We're replacing this.options anyway, we don't have to worry about modifying the object
          delete this.options[key];
        } else {
          this.options[key] = getValue(key, this.options[key]);
        }
      }

      return this.options;
    },
    getOptions() {

      this.options.content = this.content ? this.content : this.$refs.content;

      Object.assign(this.options, humps.camelizeKeys(this.$attrs));
      
      this.filterOptions();

      if (!this.options.onShow && this.$listeners && this.$listeners["show"]) {
        this.options.onShow = (...args) => {
          return this.$listeners["show"].fns(...args);
        };
      }

      if (!this.options.onShow && this.$listeners && this.$listeners["shown"]) {
        this.options.onShown = (...args) => {
          return this.$listeners["shown"].fns(...args);
        };
      }

      if (!this.options.onHidden && this.$listeners && this.$listeners["hidden"]) {
        this.options.onHidden = (...args) => {
          return this.$listeners["hidden"].fns(...args);
        };
      }

      if (!this.options.onHide && this.$listeners && this.$listeners["hide"]) {
        this.options.onHide = (...args) => {
          return this.$listeners["hide"].fns(...args);
        };
      }

      if (!this.options.onMount && this.$listeners && this.$listeners["mount"]) {
        this.options.onMount = (...args) => {
          return this.$listeners["mount"].fns(...args);
        };
      }

      this.options.triggerTarget = this.triggerTarget;

      return this.options;
    }
  }
};
</script>
