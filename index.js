import Vue from 'vue';
import Chart from './Chart';
import * as d3 from 'd3';

new Vue({
  el: '#app',
  template: `<Chart :data="data"></Chart>`,
  data() {
    return {
      data: null,
    };
  },
  components: {
    Chart,
  },
  created() {
    d3.csv('./org.csv').then((d) => {
      console.log('fetched data');
      this.data = d;
    });
  },
});
