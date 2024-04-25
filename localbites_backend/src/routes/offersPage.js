import { db } from "../database";

export const getAllOffersRoute = {
    method: 'GET',
    path: '/api/offersPage', 
    handler: async (req, h) => {
        try {
            const { results } = await db.query('SELECT * FROM offers');
            return h.response(results); // Return the results within a response object
        } catch (error) {
            console.error('Error fetching offers:', error);
            throw error; // Throw the error to be caught by Hapi's error handling mechanism
        }
    }
};
