import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com', 
  headers: {
    Authorization: 'Client-ID bb1bb668a6619cb0c5ad62e366fad433be5531093193c51df1f1eff498e97520'
  }
});