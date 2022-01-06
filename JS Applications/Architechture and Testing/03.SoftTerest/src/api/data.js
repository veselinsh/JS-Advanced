import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


async function getAllIdeas(){
   return api.get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}

async function getIdeasById(id){
    return api.get('/data/ideas/'+id);
}

async function createIdea(idea){
    return api.post('/data/ideas',idea)
}

async function deleteById(id){
    return api.del('/data/ideas/'+ id);
}

export{
    getAllIdeas,
    getIdeasById,
    createIdea,
    deleteById

}