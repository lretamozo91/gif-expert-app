import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Pruebas en componente <AddCategory/>', () => {

    test('debe cambiar el valor de la caja de texto', () => {
    // creamos el sujeto de pruebas
        render( <AddCategory onNewCategory = { () => {} } />);

    // extraemos el input
        const input = screen.getByRole('textbox');
        // screen.debug();

    // disparamos el evento
        fireEvent.input( input, { target: { value: 'Saitama' }});
        // screen.debug();

    // comparamos el cambio despues del evento
        expect( input.value ).toBe('Saitama');
    });
    
    test('debe llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Saitama';
        // un mock es una simlacion de la funcion, me permite tener el control absoluto de la funcion
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory = { onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }});
        fireEvent.submit( form );
        // screen.debug();

        expect( input.value ).toBe('');

        // evaluo que la funcion onNewCategory ah sido llamada
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('no debe llamar onNewCategory si el input esta vacio', () => {
        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory = { onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);

    });
    
})
