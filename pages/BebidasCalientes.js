import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='grid justify-items-center'>
                <img src='/LOGOBEBIDASCALIENTES.png' className=''></img>
                <span className='text-2xl font-bold text-cyan-900'>RECUERDA QUE CUALQUIERA DE LAS BEBIDAS CALIENTES LAS PUEDES PEDIR EN FRÍO</span>
            </div>
            <div>
                <div className='grid grid-cols-3 justify-items-center mt-10 mb-10 '>
                    <div className='pl-10'>
                        <img src='/BebidasCalientes/AMERICANO.jpg' alt='americano' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>AMERICANO</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl'>Espresso diluido en agua caliente.</span>
                    </div>

                    <div className='pl-10'>
                        <img src='/BebidasCalientes/CAPUCCINO.jpg' alt='capuccino' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>CAPUCCINO</span><span className='font-light text-gray-600 text-2xl'>/ $40 $55</span>
                        <span className='text-black flex text-2xl'>
                            Preparada con café expreso y leche montada con vapor para darle cremosidad.</span>
                    </div>

                    <div className='pl-10'>
                        <img src='/BebidasCalientes/CAPUCCINO SABOR.jpg' alt='capuccinoSabor' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>CAPUCCINO SABOR</span><span className='font-light text-gray-600 text-2xl'>/ $55 $60</span>
                        <span className='text-black flex text-2xl'>
                            Preparada con café expreso y leche montada con vapor para darle cremosidad.</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 justify-items-center mt-10 mb-10 pl-20'>
                    <div className='pl-10'>
                        <img src='/BebidasCalientes/ESSPRESO.jpg' alt='espresso' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>ESPRESSO</span><span className='font-light text-gray-600 text-2xl'>/ $60 $65</span>
                        <span className='text-black flex text-2xl'>
                            Café molido de una manera muy fina, diluido con una determinada cantidad de agua cuya temperatura es cercana al punto de ebullición.</span>
                    </div>

                    <div className='pl-10'>
                        <img src='/BebidasCalientes/ESSPRRESO DOBLE.jpg' alt='espresso-doble' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Espresso Doble</span><span className='font-light text-gray-600 text-2xl'>/ $62 $67</span>
                        <span className='text-black flex text-2xl'>
                            Su preparación consiste en dos cafés espresso en la taza de cappuccino</span>
                    </div>

                    <div className='pl-10'>
                        <img src='/BebidasCalientes/LATTE.jpg' alt='latte' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>LATTE</span><span className='font-light text-gray-600 text-2xl'>/ $50 $55</span>
                        <span className='text-black flex text-2xl'>
                            Preparado con uno o dos shots de espresso con leche al vapor y una fina capa de leche espumosa encima</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 justify-items-center mt-10 mb-10 pl-20'>
                    <div className='pl-10'>
                        <img src='/BebidasCalientes/CARAJILLO.jpg' alt='carajillo' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Carajillo</span><span className='font-light text-gray-600 text-2xl'>/ $60 $65</span>
                        <span className='text-black flex text-2xl'>
                            Consiste en una mezcla de café expresso con brandy o ron.</span>
                    </div>

                    <div className='pl-10'>
                        <img src='/BebidasCalientes/IRLANDES.jpg' alt='cafe-irlandes' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Café Irlandes</span><span className='font-light text-gray-600 text-2xl'>/ $60 $65</span>
                        <span className='text-black flex text-2xl'>
                            Contiene una exquisita combinación de whisky, azúcar, café y crema de leche.</span>
                    </div>

                    <div className='pl-10'>
                        <img src='/BebidasCalientes/DALGONA.jpg' alt='cafe-dalgona' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Café Dalgona</span><span className='font-light text-gray-600 text-2xl'>/ $50 $55</span>
                        <span className='text-black flex text-2xl'>
                            Se elabora batiendo proporciones iguales de café en polvo, azúcar y agua caliente hasta formar una crema o espuma.</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 justify-items-center mt-10 mb-10 pl-20'>
                    <div className='pl-10'>
                        <img src='/BebidasCalientes/AFFOGATO.jpg' alt='cafe-affogato' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Café Affogato</span><span className='font-light text-gray-600 text-2xl'>/ $60 $65</span>
                        <span className='text-black flex text-2xl'>
                            Hecho con dos ingredientes principales, helado de vainilla y café espresso.</span>
                    </div>

                    <div className='pl-10'>
                        <img src='/BebidasCalientes/CHOCOLATE CALIENTE.jpg' alt='chocolate' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Chocolate</span><span className='font-light text-gray-600 text-2xl'>/ $50 $60</span>
                        <span className='text-black flex text-2xl'>
                            Preparado con cacao en polvo disuelta en leche.</span>
                    </div>

                    <div className='pl-10'>
                        <img src='/BebidasCalientes/CHOCOLATE BLANCO.jpg' alt='chocolate-blanco' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Chocolate Blanco</span><span className='font-light text-gray-600 text-2xl'>/ $50 $60</span>
                        <span className='text-black flex text-2xl'>
                            Combinación de salsa de chocolate blanco con leche vaporizada y decorada con crema batida.</span>
                    </div>
                </div>

            </div>
            <div className='grid justify-items-center'>
                <img src='/LOGOTÉ.png' className=''></img>
            </div>
            <div>
                <div className='grid grid-cols-3 pl-20'>
                    <div className='pl-10 '>
                        <img src='/Bebidas-Te/MANZANILLA.jpg' alt='manzanilla' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Manzanilla</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl'>
                            Es un antinflamatorio, aivia los trastornos digestivos, incluyendo
                            indigestión, náuseas, pérdida del apetito.</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/Bebidas-Te/LIMÓN.jpg' alt='limón' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold '>Limón</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify'>
                            Fortalece el sistema inmunológico y respiratorio, favorece la digestión y funciones energéticas.</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/Bebidas-Te/CHAI.jpg' alt='chai' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Chai</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify'>
                            Actúa como antiinflamatorio, evita las náuseas, mejora el metabolismo y tiene propiedades digestivas.</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 pl-20'>
                    <div className='pl-10'>
                        <img src='/Bebidas-Te/MIEL, JENGIBRE Y LIMÓN.jpg' alt='miel-jengibre-limón' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Miel, jengibre y limón</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify'>
                            Mejora la congestión de las vías respiratorias y de las fosas nasales, regula la temperatura corporal.</span>
                    </div>

                    <div className='pr-10 pl-5'>
                        <img src='/Bebidas-Te/ROJO.jpg' alt='rojo' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Rojo</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify'>
                            Aumenta la energía, reduce el estrés, ayuda en la digestión de comidas pesadas.</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/Bebidas-Te/LAVANDA.jpg' alt='lavanda' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px]'></img>
                        <span className='text-black text-2xl font-bold'>Lavanda</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify'>
                            Evita problemas gastrointestinales como cólicos, inflamacaión intestinal, además alivia el estrés y combe el insomnio.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
