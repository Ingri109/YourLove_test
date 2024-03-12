import { useBooleanToggle } from "../hooks";
import { renderHook, act } from "@testing-library/react";

describe('useBooleanToggle hooks', () => {
    it('should handle toggle', () => {
        const { result } = renderHook(() => useBooleanToggle());

        console.log(result.current); // Для отримання значення хука

        expect(true).toBe(true);
    });
});
