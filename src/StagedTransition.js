import Velocity from 'velocity-animate';

export default {
  name: "StagedTransition",
  functional: true,
  props: {
    styles: {
      type: Array,
      required: true
    },
    delay: {
      type: Number,
      default: 250
    },
    appear: {
      type: Boolean,
      default: false
    }
  },

  render(createElement, context) {
    const {props, children} = context;

    const data = Object.assign(context.data, {
      props: {
        tag: 'div',
        css: false,
        appear: props.appear
      },
      on: {
        beforeEnter(el) {
          for (const key in props.styles[0]) {
            el.style[key] = props.styles[0][key];
          }
        },

        enter(el, done){
          const calcDelay = props.delay * el.dataset.index;

          setTimeout(() => {
            Velocity(el, props.styles[1], { complete: done });
          }, calcDelay);
        },

        leave(el, done){
          const calcDelay = props.delay * el.dataset.index;

          setTimeout(() => {
            Velocity(el, props.styles[2] || props.styles[1], { complete: done });
          }, calcDelay);
        }
      }
    });

    return createElement('transition-group', data, children);
  }
}
