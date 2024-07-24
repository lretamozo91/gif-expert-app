import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGif', () => {

    test('debe retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('One Puch');
        expect( gifs.length ).toBeGreaterThan(0); // toBeGreaterThan evalua que sea mayor que cero
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })
    })
    
})
