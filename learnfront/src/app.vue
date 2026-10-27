
<script>
import ItemList from './ItemList.vue';

export default {
  name: 'App',
  components: { ItemList },
  data() {
    return {
      nextId: 4,
      newText: '',
      newImportance: 2,
      items: [
        { id: 1, text: 'Piim', isDone: false, importance: 3 },
        { id: 2, text: 'Leib', isDone: true, importance: 1 },
        { id: 3, text: 'Munad', isDone: false, importance: 2 }
      ]
    };
  },
  computed: {
    doneItems() {
      return this.items.filter(i => i.isDone);
    },
    todoItems() {
      return this.items.filter(i => !i.isDone);
    }
  },
  methods: {
    addItem() {
      const text = this.newText.trim();
      if (!text) return;

      this.items.push({
        id: this.nextId++,
        text,
        isDone: false,
        importance: this.newImportance
      });

      this.newText = '';
      this.newImportance = 2;
    },
    toggleDone(id) {
      const item = this.items.find(i => i.id === id);
      if (item) item.isDone = !item.isDone;
    },
    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id);
    },
    setImportance(id, level) {
      const item = this.items.find(i => i.id === id);
      if (item) item.importance = level;
    }
  }
};
</script>

