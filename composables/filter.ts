// composables/useSharedMap.ts

import { ref, Ref } from 'vue';

interface SharedMapType {
  [key: string]: any;
}

const sharedMap: Ref<SharedMapType> = ref({});

function convertMapToObject(map: Ref<SharedMapType>): SharedMapType {
  return { ...map.value };
}

function addFieldToMap(map: Ref<SharedMapType>, key: string, value: any): void {
  map.value[key] = value;
}

export function useSharedMap() {
  return {
    sharedMap,
    convertMapToObject,
    addFieldToMap,
  };
}