import fetch from 'node-fetch';
import urls from '../config/urls';
const path = 'api/check?';

const Emails = {
    isDisposable: async (key, myemail) => {
        const params = new URLSearchParams(
            {
              access_key: key,
              email: myemail
            },
          );
        const response = await fetch(`${urls.emails}${path}${params}`, { 
            method: 'GET',    
        });
        const data = await response.json();
        return data.disposable;
      },

      isFormatValid: async (key, myemail) => {
        const params = new URLSearchParams(
            {
              access_key: key,
              email: myemail
            },
          );
        const response = await fetch(`${urls.emails}${path}${params}`, { 
            method: 'GET',    
        });
        const data = await response.json();
        return data.format_valid;
      },

      isRole: async (key, myemail) => {
        const params = new URLSearchParams(
            {
              access_key: key,
              email: myemail,
            },
          );
        const response = await fetch(`${urls.emails}${path}${params}`, { 
            method: 'GET',    
        });
        const data = await response.json();
        return data.role;
      },

      missedKey: async (key, myemail) => {
        const params = new URLSearchParams(
            {
              access_key: key,
              email: myemail
            },
          );
        const response = await fetch(`${urls.emails}${path}${params}`, { 
            method: 'GET',    
        });
        return response;
      },
};

export default Emails;