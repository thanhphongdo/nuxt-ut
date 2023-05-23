// import { describe, it, expect } from 'vitest'
// import { mount, shallowMount } from '@vue/test-utils'

// import HelloWorld from '../components/HelloWorld.vue'

// describe('HelloWorld', () => {
//   it('is a Vue instance', () => {
//     const wrapper = shallowMount(HelloWorld, {});
//     const component = wrapper.getCurrentComponent();
//     console.log(component);
//     expect(wrapper.vm).toBeTruthy()
//   })
// })

import { describe, it, expect, vi } from 'vitest'
import { defineComponent } from 'vue';
import { config } from '@vue/test-utils'
import { mount, shallowMount } from '@vue/test-utils';
import HelloWorld from '../components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const getData = vi.fn().mockReturnValue([1, 2, 3, 4, 5]);
    vi.mock('../services/service.ts', () => {
      return {
        getData: vi.fn().mockImplementation(() => {
          return [1, 2, 3, 4, 5];
        })
      }
    });

    const wrapper: any = shallowMount(HelloWorld as any, {
      propsData: {
        msg: 123
      },
    });

    wrapper.componentVM.changeMessage();
    wrapper.componentVM.changeMessage('123');
    expect(wrapper.componentVM.data).to.deep.equal([1, 2, 3, 4, 5], 'data is incorrect');

  });
});