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
