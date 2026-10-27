<template>
  <div class="item-list">
    <h2>{{ title }}</h2>
    <ul>
      <li
        v-for="item in sortedItems"
        :key="item.id"
        :class="['item', importanceClass(item.importance), { done: item.isDone }]"
      >
        <label>
          <input
            type="checkbox"
            :checked="item.isDone"
            @change="$emit('toggle', item.id)"
          />
          <span class="text">{{ item.text }}</span>
        </label>

        <select
          :value="item.importance"
          @change="$emit('set-importance', item.id, +$event.target.value)"
          class="importance-select"
        >
          <option :value="1">1 – Madal</option>
          <option :value="2">2 – Keskmine</option>
          <option :value="3">3 – Kõrge</option>
        </select>

        <button @click="$emit('remove', item.id)" class="remove-btn">×</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true }
  },
  emits: ['toggle', 'remove', 'set-importance'],
  computed: {
    sortedItems() {
      // Kõrgem importance eespool
      return [...this.items].sort((a, b) => b.importance - a.importance);
    }
  },
  methods: {
    importanceClass(level) {
      return `imp-${level}`;
    }
  }
};
</script>

<style scoped>
.item-list {
  margin-bottom: 1.5rem;
}

.item-list h2 {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

ul {
  list-style: none;
  padding: 0;
}

.item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  border-left: 6px solid transparent;
  color: #7a790a;
}

.item label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.item.done .text {
  text-decoration: line-through;
  opacity: 0.65;
}


.imp-3 {
  background: #ffebee;
  border-left-color: #c62828;
}


.imp-2 {
  background: #fff8e1;
  border-left-color: #f9a825;
}


.imp-1 {
  background: #e8f5e9;
  border-left-color: #2e7d32;
}

.importance-select {
  margin-left: auto;
  padding: 0.3rem;
  border-radius: 4px;
}

.remove-btn {
  background: transparent;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: #bcf17f;
}

.remove-btn:hover {
  color: #c62828;
}
</style>
