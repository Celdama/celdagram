export const GET_POSTS = 'GET_POSTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_USER_LIKE = 'ADD_USER_LIKE';
export const REMOVE_USER_LIKE = 'REMOVE_USER_LIKE';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';

const initialState = [];

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case GET_POSTS:
      return [...action.payload];
    case ADD_COMMENT:
      return state.map((post) => {
        return post.id === action.payload.postId
          ? { ...post, comments: [...post.comments, action.payload.data] }
          : post;
      });
    case ADD_USER_LIKE:
      return state.map((post) => {
        return post.id === action.payload.postId
          ? { ...post, likes: [...post.likes, action.payload.data] }
          : post;
      });
    case REMOVE_USER_LIKE:
      return state.map((post) => {
        return post.id === action.payload.postId
          ? {
              ...post,
              likes: post.likes.filter(
                (item) => item.userId !== action.payload.data.userId
              ),
            }
          : post;
      });
    case DELETE_POST:
      // GET USER USELESS, LE SEUL VERITABLE PB EST QUE J4ENVOIE
      // L'ID DU POST CREE COMME CA DANS LE TABLEAU POST. DONC
      // QUAND JE FILTRE (POUR LE SUPPRIMER) IMPOSSIBLE DE LE COMPARER
      // AVEC L'ID DU POST A SUPPRIMER.
      // IL FAUT QUE JE CREER UN OBJET, QUAND JAJOUTE UN POST {id: PostId, desc: Post.desc}
      // ET QUE JAJOUET CET OBJET AU TABLEAU POST, JE POURRAIS ENSUITE LE FILTRER POUR LE SUPPRIMEr
      // ET NAURAIS PAS BESOIN DE FAIRE UN CALL A FIREBASE POUR GETUSERS() DANS
      // L'OPTIQUE DE R2CUP2RER DES DONNEES MAJ
      return state.filter((post) => {
        return post.photoId !== action.payload.postId;
      });
    default:
      return state;
  }
};
