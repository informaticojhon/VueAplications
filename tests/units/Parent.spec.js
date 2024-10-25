import { shallowMount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';

describe('Parent.vue', () => {
  it('debería actualizar el mensaje cuando se emite desde el componente hijo', async () => {
    const wrapper = shallowMount(Parent);
    wrapper.findComponent({ name: 'Child' }).vm.$emit('enviarTexto', 'Hola');
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Texto desde el componente hijo: Hola');
  });
});
