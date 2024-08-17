// src/stores/auth.js
import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const authStore = writable({
  user: pb.authStore.model,
  token: pb.authStore.token,
  isLoggedIn: pb.authStore.isValid
});

pb.authStore.onChange(() => {
  authStore.set({
    user: pb.authStore.model,
    token: pb.authStore.token,
    isLoggedIn: pb.authStore.isValid
  });
});
export { authStore, pb };