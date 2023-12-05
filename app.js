const vm = Vue.createApp({
    data() {
      return {
        height :25,
        width : 50,
        perspective : 0,
        rotateX : 0, 
        rotateY : 0, 
        rotateZ : 0      
      }
    },
    computed : {
      box () {
        return { 
          height : `${this.height}px`,
          width : `${this.width}px`,
          transform : `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
          `
        }
      }
    },
    methods : {
        reset () {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0; 
            this.rotateZ = 0;

        },
        copy () {
            
        }
    }
  }).mount('#app')