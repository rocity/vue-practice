import API from '@/constants/api'
import Vue from 'vue'

export default {
  fetchPosts () {
    return Vue.http.get(`${API.API_URL}posts`)
  }
}
