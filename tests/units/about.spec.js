import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
  it('debería renderizar correctamente', () => {
    const wrapper = shallowMount(About);
    expect(wrapper.text()).toContain('Esta es la vista About.');
  });
});
