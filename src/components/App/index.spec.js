import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import App from '.';

// Імпортуємо адаптер для React 16
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Налаштовуємо Enzyme
Enzyme.configure({ adapter: new Adapter() });

// Мокуємо виклик open() для запуску componentDidMount
jest.mock('../../utils/indexdb', () => ({
    open: jest.fn().mockResolvedValue(),
}));

describe('App component', () => {
    it('renders without crashing', async () => {
        await act(async () => {
            // Монтуємо компонент в пам'яті (MemoryRouter використовується для тестування роутингу)
            const wrapper = mount(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            );

            // Очікуємо, що open() буде викликано один раз
            expect(require('../../utils/indexdb').open).toHaveBeenCalledTimes(1);

            // Очікуємо, що компонент загрузиться
            await new Promise((resolve) => setTimeout(resolve, 0));
            wrapper.update();

            // Перевіряємо, що компонент має вигляд, як очікується
            expect(wrapper.find('div').text()).toContain('Loading...');

            // Перевіряємо, що компонент вірно рендериться після завершення загрузки
            await act(async () => {
                await new Promise((resolve) => setImmediate(resolve));
            });
            wrapper.update();

            // Перевіряємо, що компонент має вигляд, як очікується після завершення загрузки
            expect(wrapper.find('nav')).toHaveLength(1);
            expect(wrapper.find('ul')).toHaveLength(1);
            expect(wrapper.find('li')).toHaveLength(3);

            // Тут можна додаткові перевірки згідно вашого дизайну та логіки

            // Розмонтуємо компонент
            wrapper.unmount();
        });
    });
});

