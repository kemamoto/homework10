import Emails from './emails.service';
export const api = () => ({
  Emails: () => ({ ...Emails }),
});
  
