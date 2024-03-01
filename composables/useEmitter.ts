const useEmitter = () => {
  const hooks = useNuxtApp().hooks
  return {
    emit: hooks.callHook,
    on: hooks.hook,
  }
}

export { useEmitter }