import { bcryptAdapter } from '../config';



export const Data = {

    user: [
        {
            name: 'Elvis Macas',
            email: 'elvis-michael2001@hotmail.com',
            password: bcryptAdapter.hash('minecraft7'),
            avatar_url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        },
    ],

    business: [
        {
            business_name: 'Name',
            business_address: 'Businesss address',
            business_opening_hours: 'Opening hours',
            business_contact_info: 'Contact info',
            business_description: 'Description',
        }
    ],
    chatbot: [
        {
            chatbot_system: 'Eres un asistente personal que ayudará a los demás con cualquier pregunta.',
            chatbot_temperature: 0.7,
            chatbot_maxTokens: 30,
            chatbot_numResults: 1,
        }
    ],
    categories: [
        { category_name: 'Restaurante' },
        { category_name: 'Tienda de Comestibles' },
        { category_name: 'Servicios' },
        { category_name: 'Comercio' },
        { category_name: 'Educación' },
        { category_name: 'Salud y Bienestar' },
        { category_name: 'Electrónica y Tecnología' },
        { category_name: 'Transporte' },
        { category_name: 'Entretenimiento' },
        { category_name: 'Turismo y Hospedaje' },
    ],
    subcategories: [
        { category_id: 1, subcategory_name: 'Parrilladas' },
        { category_id: 1, subcategory_name: 'Comida Criolla' },
        { category_id: 1, subcategory_name: 'Marisquería' },
        { category_id: 1, subcategory_name: 'Cafetería' },
        { category_id: 1, subcategory_name: 'Comida Rápida' },
        { category_id: 1, subcategory_name: 'Pizzería' },
        { category_id: 1, subcategory_name: 'Sushi' },
        { category_id: 1, subcategory_name: 'Heladería' },
        { category_id: 2, subcategory_name: 'Minimarket' },
        { category_id: 2, subcategory_name: 'Bodega' },
        { category_id: 2, subcategory_name: 'Frutería' },
        { category_id: 2, subcategory_name: 'Carnicería' },
        { category_id: 2, subcategory_name: 'Licorería' },
        { category_id: 2, subcategory_name: 'Tienda de abarrotes' },
        { category_id: 3, subcategory_name: 'Peluquería' },
        { category_id: 3, subcategory_name: 'Barbería' },
        { category_id: 3, subcategory_name: 'Lavandería' },
        { category_id: 3, subcategory_name: 'Spa' },
        { category_id: 3, subcategory_name: 'Gimnasio' },
        { category_id: 3, subcategory_name: 'Taller Automotriz' },
        { category_id: 3, subcategory_name: 'Centro de Copiado' },
        { category_id: 3, subcategory_name: 'Servicios de Mudanza' },
        { category_id: 4, subcategory_name: 'Ropa' },
        { category_id: 4, subcategory_name: 'Zapatería' },
        { category_id: 4, subcategory_name: 'Tienda de Deportes' },
        { category_id: 4, subcategory_name: 'Librería' },
        { category_id: 4, subcategory_name: 'Papelería' },
        { category_id: 4, subcategory_name: 'Joyería' },
        { category_id: 4, subcategory_name: 'Óptica' },
        { category_id: 5, subcategory_name: 'Academia de Idiomas' },
        { category_id: 5, subcategory_name: 'Academia de Música' },
        { category_id: 5, subcategory_name: 'Academia de Baile' },
        { category_id: 5, subcategory_name: 'Guardería' },
        { category_id: 5, subcategory_name: 'Instituto Técnico' },
        { category_id: 6, subcategory_name: 'Farmacia' },
        { category_id: 6, subcategory_name: 'Laboratorio Clínico' },
        { category_id: 6, subcategory_name: 'Consultorio Médico' },
        { category_id: 6, subcategory_name: 'Centro de Fisioterapia' },
        { category_id: 6, subcategory_name: 'Clínica Dental' },
        { category_id: 7, subcategory_name: 'Tienda de Celulares' },
        { category_id: 7, subcategory_name: 'Tienda de Computadoras' },
        { category_id: 7, subcategory_name: 'Reparación de Electrodomésticos' },
        { category_id: 7, subcategory_name: 'Servicio Técnico de Computadoras' },
        { category_id: 8, subcategory_name: 'Transporte Escolar' },
        { category_id: 8, subcategory_name: 'Taxi' },
        { category_id: 8, subcategory_name: 'Mototaxi' },
        { category_id: 8, subcategory_name: 'Alquiler de Vehículos' },
        { category_id: 8, subcategory_name: 'Transporte de Carga' },
        { category_id: 9, subcategory_name: 'Sala de Juegos' },
        { category_id: 9, subcategory_name: 'Karaoke' },
        { category_id: 9, subcategory_name: 'Bar' },
        { category_id: 9, subcategory_name: 'Discoteca' },
        { category_id: 9, subcategory_name: 'Cine' },
        { category_id: 10, subcategory_name: 'Hostal' },
        { category_id: 10, subcategory_name: 'Hotel' },
        { category_id: 10, subcategory_name: 'Cabañas' },
        { category_id: 10, subcategory_name: 'Agencias de Viajes' },
        { category_id: 10, subcategory_name: 'Guías de Turismo' },
    ]
};