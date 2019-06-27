import { environment } from '../../environments/environment';

const envUrlAppends = {
    baseApi: environment.apiUrl,
};

export const ApplicationUrls = {
    baseApi: envUrlAppends.baseApi,
    getcars : envUrlAppends.baseApi + 'get_list',
    auth : {
        login :  envUrlAppends.baseApi + 'login'
    },
    user: {
        getUser: envUrlAppends.baseApi,
    }
};
