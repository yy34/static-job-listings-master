var app = new Vue({
  el: "#app",
  data: {
    datas: [],
    filterItems: [],
    filteredItems: [],
  },

  methods: {
    fetchData() {
      fetch("data.json")
        .then((response) => response.json())
        .then((data) => (this.datas = data));
    },
    addFilter(item) {
      if (this.filterItems.indexOf(item) === -1) {
        this.filterItems.push(item);
      }
    },
    clearFilter() {
      this.filterItems = [];
    },
    removeItem(item) {
      const index = this.filterItems.indexOf(item);
      if (index > -1) {
        this.filterItems.splice(index, 1);
      }
    },
  },
  created() {
    this.fetchData();
  },
  computed: {
    itemFiltered() {
      this.filteredItems = this.datas.filter((el) => {
        return this.filterItems.every((element) => {
          return (
            el["languages"].includes(element) ||
            el["role"].includes(element) ||
            el["level"].includes(element) ||
            el["tools"].includes(element)
          );
        });
      });
      return this.filteredItems;
    },
  },
});
