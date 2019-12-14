import axios from 'axios';

const server_base_url = 'http://localhost:5000'

export default {
  getAll: async () => {
    let res = await axios.get(server_base_url + `/api/student`);
    return res.data || [];
  },
  getOne: async (id) => {
    let res = await axios.get(server_base_url + `/api/student/` + id);
    return res.data || [];
  },
  create: async (data) => {
    let res = await axios.post(server_base_url + `/api/student`, data);
    return res.data || [];
  },
  update: async (id, data) => {
    let res = await axios.put(server_base_url + `/api/student/` + id, data);
    return res.data || [];
  },
  delete: async (id) => {
    let res = await axios.delete(server_base_url + `/api/student/` + id);
    return res.data || [];
  }
}