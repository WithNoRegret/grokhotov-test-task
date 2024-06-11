import { defineStore } from "pinia";

export const useCart = defineStore('cart', () => {
  const cartItems: Ref<ItemInStore[]> = ref<ItemInStore[]>([]);

  const totalItemTypes: ComputedRef<number> = computed(() => cartItems.value.length);
  const totalItems: ComputedRef<number> = computed(() => cartItems.value.reduce((acc, item) => acc + item.amount, 0));
  const totalPrice: ComputedRef<number> = computed(() => cartItems.value.reduce((acc, item) => acc + item.price, 0));

  const addItem = (item: Item): void => {
    const existingItem = cartItems.value.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.amount += 1;
      existingItem.price += item.price;
    } else {
      const newItem: ItemInStore = { ...item, amount: 1 };
      cartItems.value.push(newItem);
    }

  };

  const removeItem = (itemId: number): void => {
    const index = cartItems.value.findIndex(storeItem => storeItem.id === itemId);

    if (index !== -1) {
      const item = cartItems.value[index];

      if (item.amount > 1) {
        item.price = item.price / item.amount * (item.amount - 1);
        item.amount -= 1;
      } else {
        cartItems.value.splice(index, 1);
      }
    }
  };

  const getItemCountById = (itemId: number): number => {
    const item = cartItems.value.find(storeItem => storeItem.id === itemId);
    return item ? item.amount : 0;
  };

  const resetItemById = (itemId: number): void => {
    const index = cartItems.value.findIndex(storeItem => storeItem.id === itemId);

    if (index !== -1) {
      cartItems.value.splice(index, 1);
    }
  };

  const clearCart = () => {
    cartItems.value = [];
    setup.value = false;
  }

  const setup: Ref<boolean> = ref(false);
  const toggleSetup = () => setup.value = !setup.value;

  return {
    cartItems,
    totalItems,
    totalItemTypes,
    totalPrice,
    addItem,
    removeItem,
    clearCart,
    getItemCountById,
    resetItemById,
    setup,
    toggleSetup
  };
});