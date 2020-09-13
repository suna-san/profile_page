//footer
Vue.component('footer-component', {
  template: `
  <footer>
  <ul>
    <li><a href="suna.renraku@gmail.com" target="_blank">mail</a></li>
  </ul>
  <small class="copyright">Copyright suna-san. All Rights reserved.</small>
</footer>`
})

//fadein
Vue.component('FadeInComponent', {
  template: `
    <div :class="{fadeIn: visible}">
      <slot v-show="visible"></slot>
    </div>
  `,
  data() {
    return {
      visible: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        var top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight + 50;
      }
    }
  }
});

// //moveTop
// Vue.component('movetop-component', {
//   props: ['position'],
//   data() {
//     return {
//         show: false
//     };
//   },
//   template: '<transition name="fade">'+
//   '<button type="button" :style="styles" v-if="show" @click="moveTop"><slot></slot></button>'+
//   '</transition>',
//   methods: {
//     moveTop() {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });
//     }
//   },
//   computed: {
//     styles() {
//       let styles = { position: 'fixed' };
//       if(this.position === 'top-left') {
//           styles['top'] = '15%';
//           styles['left'] = '6%';
//       } else if(this.position === 'top-right') {
//           styles['top'] = '15%';
//           styles['right'] = '6%';
//       } else if(this.position === 'bottom-left') {
//           styles['bottom'] = '15%';
//           styles['left'] = '6%';
//       } else {
//           styles['bottom'] = '15%';
//           styles['right'] = '6%';
//       }
//       return styles;
//     }
//   },
//   mounted() {
//     let style = document.createElement('style');
//     style.innerHTML = `
//         .fade-enter-active, .fade-leave-active {
//           transition: opacity .5s;
//         }
//         .fade-enter, .fade-leave-to {
//           opacity: 0;
//         }
//       `;
//       document.getElementsByTagName('head')[0].appendChild(style);

//       window.addEventListener('scroll', () => {
//         this.show = (window.scrollY > 400);
//       });
//  },
// });
