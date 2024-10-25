import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Contador from '@/components/Contador.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Contador.vue', () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      incrementar: jest.fn(),
      decrementar: jest.fn(),
    };
    getters = {
      contador: () => 0,
    };
    store = new Vuex.Store({
      actions,
      getters,
    });
  });

  it('debería mostrar el valor inicial', () => {
    const wrapper = shallowMount(Contador, { store, localVue });
    expect(wrapper.text()).toContain('Contador: 0');
  });

  it('debería llamar a "incrementar" cuando se hace clic en el botón de incrementar', async () => {
    const wrapper = shallowMount(Contador, { store, localVue });
    await wrapper.find('button').trigger('click');
    expect(actions.incrementar).toHaveBeenCalled();
  });
});
