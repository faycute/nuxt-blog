import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      idToken: null
    },
    mutations: {
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      },
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      setToken(state, idToken) {
        state.idToken = idToken
      },
      clearToken(state) {
        state.idToken = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get('/posts.json')
          .then(data => {
            const postArray = []
            for (const key in data) {
              postArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', postArray)
          })
          .catch(e => context.error(e)); // エラーページを表示
      },
      addPost(vuexContext, post) {
        // posts.jsonはfirebaseのdbのpostsっていうのを頭につけるために指定
        return this.$axios.$post(`/posts.json?auth=${vuexContext.state.idToken}`, { ...post, updatedDate: new Date() })
          .then(data => {
            vuexContext.commit('addPost', { ...post, id: data.name })
          })
          // .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios.$put(
            `/posts/${editedPost.id}.json?auth=${vuexContext.state.idToken}`,
            editedPost
          )
          .then(data => {
            vuexContext.commit('editPost', editedPost)
          })
          // .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      authenticateUser(vuexContext, authData) {
        let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseAPIKey}`
        if (!authData.isLogin) {
          authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseAPIKey}`
        }
        return this.$axios.$post(authUrl,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(data => {
            vuexContext.commit('setToken', data.idToken)
            localStorage.setItem('idToken', data.idToken)
            localStorage.setItem('expirationDate', new Date().getTime() + +data.expiresIn * 1000)
            Cookie.set('jwt', data.idToken)
            Cookie.set('expirationDate', new Date().getTime() + +data.expiresIn * 1000)
          })
          // .catch(e => console.log(e));
        },
      initAuth(vuexContext, req) {
        let idToken;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='));
          if (!jwtCookie) {
            return;
          }
          idToken = jwtCookie.split('=')[1];
          expirationDate = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1];
        } else { // clinet => req should be null
          // localStorageはブラウザの機能
          idToken = localStorage.getItem('idToken')
          expirationDate = localStorage.getItem('expirationDate')
        }
        // +をつけてnumberに変換する
        if (new Date().getTime() > +expirationDate || !idToken) {
          console.log('No token or invalid token')
          vuexContext.dispatch('logout');
          return;
        }
        vuexContext.commit('setToken', idToken)
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if (process.client) {
          localStorage.removeItem('idToken')
          localStorage.removeItem('expirationDate')
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.idToken != null
      }
    }
  })
}

export default createStore
